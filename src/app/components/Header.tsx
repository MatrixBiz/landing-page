import { Link, useLocation } from "react-router";
import { ShoppingCart, Mail, Menu, X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import Logo from "@/app/components/ui/logo.svg";

export function Header() {
    const location = useLocation();
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const handleQuickRequest = () => {
        window.location.href =
            "mailto:info@zvezdafabrika.ru?subject=Быстрая заявка";
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Company Name */}
                    <Link to="/" className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12">
                            <img
                                src={Logo}
                                alt="Логотип Фабрика Звезда"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <div className="text-xs text-gray-600 uppercase tracking-wide">
                                Акционерное общество
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                                ФАБРИКА ЗВЕЗДА
                            </div>
                        </div>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {/* Для Заказчиков */}
                        <div className="relative group">
                            <button className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">
                                Для Заказчиков
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <Link
                                    to="/catalog"
                                    className={`block px-4 py-3 hover:bg-gray-50 ${isActive("/catalog") ? "text-red-600" : "text-gray-700"}`}
                                >
                                    Каталог товаров
                                </Link>
                                <Link
                                    to="/request-quote"
                                    className={`block px-4 py-3 hover:bg-gray-50 ${isActive("/request-quote") ? "text-red-600" : "text-gray-700"}`}
                                >
                                    Запросить КП
                                </Link>
                                <Link
                                    to="/contacts"
                                    className={`block px-4 py-3 hover:bg-gray-50 ${isActive("/contacts") ? "text-red-600" : "text-gray-700"}`}
                                >
                                    Контакты
                                </Link>
                                <Link
                                    to="/payment-delivery"
                                    className={`block px-4 py-3 hover:bg-gray-50 ${isActive("/payment-delivery") ? "text-red-600" : "text-gray-700"}`}
                                >
                                    Оплата и доставка
                                </Link>
                            </div>
                        </div>

                        {/* Для Дилеров */}
                        <Link
                            to="/dealers"
                            className={`${isActive("/dealers") ? "text-red-600" : "text-gray-700"} hover:text-red-600 transition-colors font-medium`}
                        >
                            Для Дилеров
                        </Link>

                        {/* Сервис */}
                        <Link
                            to="/service"
                            className={`${isActive("/service") ? "text-red-600" : "text-gray-700"} hover:text-red-600 transition-colors font-medium`}
                        >
                            Сервис
                        </Link>

                        {/* Quick Request Button */}
                        <button
                            onClick={handleQuickRequest}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Быстрая заявка
                        </button>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <Link to="/cart" className="relative p-2">
                            <ShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-gray-700"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                        <div className="font-semibold text-gray-900 mb-2">
                            Для Заказчиков
                        </div>
                        <Link
                            to="/catalog"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${isActive("/catalog") ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                        >
                            Каталог товаров
                        </Link>
                        <Link
                            to="/request-quote"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${isActive("/request-quote") ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                        >
                            Запросить КП
                        </Link>
                        <Link
                            to="/contacts"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${isActive("/contacts") ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                        >
                            Контакты
                        </Link>
                        <Link
                            to="/payment-delivery"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${isActive("/payment-delivery") ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                        >
                            Оплата и доставка
                        </Link>

                        <div className="pt-4 border-t border-gray-200">
                            <Link
                                to="/dealers"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg font-medium ${isActive("/dealers") ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                Для Дилеров
                            </Link>
                            <Link
                                to="/service"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg font-medium ${isActive("/service") ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"}`}
                            >
                                Сервис
                            </Link>
                        </div>

                        <button
                            onClick={() => {
                                handleQuickRequest();
                                setMobileMenuOpen(false);
                            }}
                            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Быстрая заявка
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
