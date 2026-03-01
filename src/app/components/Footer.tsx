import { Link } from "react-router";
import Logo from "@/app/components/ui/logo.svg";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-4">
                            <div className="flex items-center justify-center w-10 h-10">
                                <img
                                    src={Logo}
                                    alt="Логотип Фабрика Звезда"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-white uppercase">
                                    АКЦИОНЕРНОЕ ОБЩЕСТВО
                                </div>
                                <div className="font-bold text-lg tracking-wide">ФАБРИКА ЗВЕЗДА</div>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            Производство картриджей для принтеров. Качество,
                            проверенное временем.
                        </p>
                        <div className="text-sm text-gray-400">
                            © 2026 АО "ФАБРИКА ЗВЕЗДА"
                            <br />
                            Все права защищены
                        </div>
                    </div>

                    {/* Customers Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Для Заказчиков</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link
                                    to="/catalog"
                                    className="hover:text-white transition-colors"
                                >
                                    Каталог товаров
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/request-quote"
                                    className="hover:text-white transition-colors"
                                >
                                    Запросить КП
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacts"
                                    className="hover:text-white transition-colors"
                                >
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/payment-delivery"
                                    className="hover:text-white transition-colors"
                                >
                                    Оплата и доставка
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Other Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Другие разделы</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link
                                    to="/dealers"
                                    className="hover:text-white transition-colors"
                                >
                                    Для Дилеров
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/service"
                                    className="hover:text-white transition-colors"
                                >
                                    Сервис
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="tel:88001012258"
                                    className="hover:text-white transition-colors"
                                >
                                    8 800-101-22-58
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@zvezdafabrika.ru"
                                    className="hover:text-white transition-colors"
                                >
                                    info@zvezdafabrika.ru
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Политика конфиденциальности
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Условия использования
                        </a>
                    </div>
                    <div className="text-red-600 font-semibold">
                        СДЕЛАНО В РОССИИ
                    </div>
                </div>
            </div>
        </footer>
    );
}
