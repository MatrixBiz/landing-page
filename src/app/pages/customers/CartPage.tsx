import { Link } from "react-router";
import { useCart } from "@/app/context/CartContext";
import { Trash2, Plus, Minus, Mail, ShoppingBag } from "lucide-react";

export function CartPage() {
    const { items, removeFromCart, updateQuantity, clearCart } = useCart();

    const handleCheckout = () => {
        const itemsList = items
            .map((item) => `${item.name} (${item.code}) - ${item.quantity} шт.`)
            .join("\n");

        const subject = "Оформление заказа через интернет-магазин";
        const body = `Здравствуйте!

Хочу оформить заказ на следующие позиции:

${itemsList}

Прошу выставить счет и сообщить о возможных сроках доставки.

С уважением,`;

        window.location.href = `mailto:info@zvezdafabrika.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // clearCart();
    };

    const handleRequestQuote = () => {
        const itemsList = items
            .map((item) => `${item.name} (${item.code}) - ${item.quantity} шт.`)
            .join("\n");

        const subject = "Запрос КП по товарам из корзины";
        const body = `Здравствуйте!

Прошу предоставить коммерческое предложение на следующие позиции:

${itemsList}

С уважением,`;

        window.location.href = `mailto:info@zvezdafabrika.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        // clearCart();
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Корзина пуста
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Добавьте товары из каталога, чтобы оформить заказ
                        </p>
                        <Link
                            to="/catalog"
                            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Перейти в каталог
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-red-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white">Корзина</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md p-6"
                            >
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Код: {item.code}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {item.compatibility}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                            title="Удалить"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity - 1,
                                                    )
                                                }
                                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-12 text-center font-semibold">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.id,
                                                        item.quantity + 1,
                                                    )
                                                }
                                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="text-right">
                                            <span className="text-sm font-semibold text-red-600">
                                                Цена по запросу
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={clearCart}
                            className="text-red-600 hover:text-red-700 font-medium text-sm"
                        >
                            Очистить корзину
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Ваш заказ
                            </h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-900">
                                    <span className="font-medium">
                                        Товаров в корзине:
                                    </span>
                                    <span className="font-semibold">
                                        {items.reduce(
                                            (sum, item) => sum + item.quantity,
                                            0,
                                        )}{" "}
                                        шт.
                                    </span>
                                </div>
                                <div className="border-t border-gray-200 pt-3">
                                    <p className="text-sm text-gray-600 mb-2">
                                        Цены и стоимость доставки будут указаны
                                        в коммерческом предложении
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Оформить заказ
                                </button>

                                <button
                                    onClick={handleRequestQuote}
                                    className="w-full py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                                >
                                    Запросить КП
                                </button>
                            </div>

                            <p className="text-xs text-gray-500 mt-4 text-center">
                                После нажатия откроется форма для отправки
                                заявки
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
