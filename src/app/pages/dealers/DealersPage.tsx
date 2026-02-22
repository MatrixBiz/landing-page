import {
    Download,
    Search,
    FileSpreadsheet,
    Handshake,
    Package,
} from "lucide-react";
import { useState } from "react";

export function DealersPage() {
    const [orderNumber, setOrderNumber] = useState("");

    const handleDownloadForm = () => {
        // In real implementation, this would trigger download of Excel file
        alert("Загрузка формы запроса...");
    };

    const handleTrackOrder = () => {
        if (!orderNumber) {
            alert("Пожалуйста, введите номер заказа");
            return;
        }
        alert(
            `Ваш заказ ${orderNumber} в работе. Ориентировочное время до готовности: 23 дня 4 часа`,
        );
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-red-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Для Дилеров
                    </h1>
                    <p className="text-xl text-white/90">
                        Специальные условия для партнеров и корпоративных
                        клиентов
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Corporate Clients */}
                    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-red-100 rounded-lg">
                                <Handshake className="w-10 h-10 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Корпоративным клиентам
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Мы предлагаем выгодные условия сотрудничества для
                            организаций и компаний. Индивидуальный подход,
                            специальные цены и гибкая система скидок.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                <span className="text-gray-700">
                                    Персональный менеджер
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                <span className="text-gray-700">
                                    Специальные цены для дилеров
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                <span className="text-gray-700">
                                    Гибкая система скидок
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                <span className="text-gray-700">
                                    Приоритетная обработка заказов
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                <span className="text-gray-700">
                                    Маркетинговая поддержка
                                </span>
                            </div>
                        </div>

                        <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                            Подробнее о программе
                        </button>
                    </div>

                    {/* Request Form Download */}
                    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-green-100 rounded-lg">
                                <FileSpreadsheet className="w-10 h-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Сформировать запрос
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Скачайте форму запроса в формате Excel, заполните
                            необходимые данные и отправьте нам для быстрой
                            обработки.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <h3 className="font-semibold text-gray-900 mb-2">
                                Форма включает:
                            </h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Список необходимых товаров</li>
                                <li>• Артикулы и количество</li>
                                <li>• Реквизиты организации</li>
                                <li>• Контактные данные</li>
                            </ul>
                        </div>

                        <button
                            onClick={handleDownloadForm}
                            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Скачать форму запроса (Excel)
                        </button>

                        <p className="text-xs text-gray-500 mt-3 text-center">
                            После заполнения отправьте на info@zvezdafabrika.ru
                        </p>
                    </div>
                </div>

                {/* Track Order Section */}
                {/*<div className="bg-white rounded-lg shadow-md p-8 mb-12">*/}
                {/*    <div className="flex items-center gap-4 mb-6">*/}
                {/*        <div className="p-4 bg-purple-100 rounded-lg">*/}
                {/*            <Search className="w-10 h-10 text-purple-600" />*/}
                {/*        </div>*/}
                {/*        <h2 className="text-2xl font-bold text-gray-900">*/}
                {/*            Отследить заказ*/}
                {/*        </h2>*/}
                {/*    </div>*/}

                {/*    <p className="text-gray-600 mb-6">*/}
                {/*        Введите номер вашего заказа, чтобы узнать текущий статус*/}
                {/*        и ориентировочное время готовности.*/}
                {/*    </p>*/}

                {/*    <div className="flex gap-4 max-w-2xl">*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            value={orderNumber}*/}
                {/*            onChange={(e) => setOrderNumber(e.target.value)}*/}
                {/*            placeholder="Введите номер заказа (например, ФЗ-2026-0001)"*/}
                {/*            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"*/}
                {/*        />*/}
                {/*        <button*/}
                {/*            onClick={handleTrackOrder}*/}
                {/*            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap"*/}
                {/*        >*/}
                {/*            Проверить статус*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    <div className="mt-6 bg-gray-50 rounded-lg p-4">*/}
                {/*        <p className="text-sm text-gray-600">*/}
                {/*            <strong>Примечание:</strong> Для получения*/}
                {/*            актуальной информации о статусе заказа вы также*/}
                {/*            можете связаться с вашим менеджером через мессенджер*/}
                {/*            или по телефону*/}
                {/*            <a*/}
                {/*                href="tel:+78001234567"*/}
                {/*                className="text-red-600 ml-1"*/}
                {/*            >*/}
                {/*                +7 (937) 586-12-12*/}
                {/*            </a>*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Logistics Section */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-orange-100 rounded-lg">
                            <Package className="w-10 h-10 text-orange-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Логистика
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">
                                Самовывоз
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Забирайте товар с нашего склада в удобное для
                                вас время
                            </p>
                            <p className="text-sm text-red-600 font-semibold">
                                Бесплатно
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">
                                Доставка по РФ
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Работаем с надежными транспортными компаниями
                            </p>
                            <p className="text-sm text-gray-600">
                                Деловые Линии, СДЭК, ПЭК
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">
                                Индивидуальные условия
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Для крупных заказов предоставляем специальные
                                условия доставки
                            </p>
                            <p className="text-sm text-red-600 font-semibold">
                                От 5 млн ₽ бесплатно
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-gray-600">
                            Подробную информацию о логистике, расчет стоимости и
                            сроков доставки вы можете получить у вашего
                            персонального менеджера.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
