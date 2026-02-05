#!/bin/bash
set -e  # Выход при ошибках

echo "🚀 Запуск production сервера"
echo "============================="

# Конфигурация
PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
NGINX_CONF="$PROJECT_ROOT/nginx.conf"
DIST_DIR="$PROJECT_ROOT/dist"
TEMP_LOG="/tmp/nginx-langing.log"

# Проверки
if [ ! -f "$NGINX_CONF" ]; then
    echo "❌ Файл nginx.conf не найден в $PROJECT_ROOT"
    echo "   Создайте nginx.conf в корне проекта"
    exit 1
fi

if [ ! -d "$DIST_DIR" ]; then
    echo "❌ Папка dist не найдена. Сначала выполните: npm run build"
    exit 1
fi

if [ ! -f "$DIST_DIR/index.html" ]; then
    echo "❌ index.html не найден в dist. Проверьте сборку."
    exit 1
fi

echo "🛑 Останавливаю предыдущий nginx"
pkill -9 nginx || true
sleep 2

# Освобождаем порт 80
echo "🔧 Освобождаю порт 80..."
sudo fuser -k 80/tcp 2>/dev/null || true
pkill -f "nginx.*master" 2>/dev/null || true
sleep 2

# Проверяем установлен ли nginx
if ! command -v nginx &> /dev/null; then
    echo "❌ Nginx не установлен. Установите:"
    echo "   Ubuntu/Debian: sudo apt install nginx"
    echo "   CentOS/RHEL: sudo yum install nginx"
    echo "   Или используйте Docker версию"
    exit 1
fi

# Создаем временный конфиг с правильными путями
echo "⚙️  Подготавливаю конфигурацию..."
TEMP_CONF="/tmp/nginx-react-$(date +%s).conf"

# Копируем основной конфиг
cp "$NGINX_CONF" "$TEMP_CONF"

# Автоматически исправляем root путь если нужно
if grep -q "root.*/var/www/html" "$TEMP_CONF"; then
    # Заменяем стандартный путь на текущую папку dist
    sed -i "s|root.*/var/www/html|root $PROJECT_ROOT/dist|g" "$TEMP_CONF"
    echo "✅ Автоматически исправлен root путь на: $PROJECT_ROOT/dist"
fi

# Проверяем конфигурацию
echo "🔍 Проверяю конфигурацию..."
if ! nginx -t -c "$TEMP_CONF" 2>&1; then
    echo "❌ Ошибка в конфигурации nginx"
    echo "=== ЛОГ ОШИБОК ==="
    nginx -t -c "$TEMP_CONF" 2>&1 || true
    echo "================="
    rm -f "$TEMP_CONF"
    exit 1
fi

# Запускаем nginx
echo "🚀 Запускаю Nginx на порту 80..."
nginx -c "$TEMP_CONF" 2>"$TEMP_LOG" &

# Ждем запуска
echo "⏳ Ожидаю запуска сервера..."
for i in {1..10}; do
    if curl -s -o /dev/null -w "%{http_code}" http://localhost 2>/dev/null | grep -q "200\|404\|30"; then
        echo "✅ Сервер запущен успешно!"
        break
    fi
    sleep 1
    if [ $i -eq 10 ]; then
        echo "⚠️  Сервер медленно запускается, проверяю логи..."
        if [ -f "$TEMP_LOG" ]; then
            tail -20 "$TEMP_LOG"
        fi
    fi
done

# Финальная информация
echo ""
echo "========================================"
echo "🎉 PRODUCTION СЕРВЕР ЗАПУЩЕН"
echo "========================================"
echo "🌐 Доступен по: http://localhost"
echo "🌐 Или по IP: http://$(hostname -I 2>/dev/null | awk '{print $1}' || echo 'ваш-ip')"
echo "📁 Папка с сайтом: $DIST_DIR"
echo "⚙️ Конфиг использован: $NGINX_CONF"
echo ""
echo "🛠  Команды управления:"
echo "   Просмотр логов: tail -f $TEMP_LOG"
echo "   Остановка: pkill -9 nginx || true"
echo ""
echo "📋 Для проверки выполните:"
echo "   curl -I http://localhost"
echo "   или откройте в браузере"
echo "========================================"
