import { useState } from "react";
import { CreditCard, Truck, Calculator, Package } from "lucide-react";

export function PaymentDeliveryPage() {
    const [volume, setVolume] = useState(0.13);
    const [city, setCity] = useState("");

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-red-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Оплата и доставка
                    </h1>
                    <p className="text-xl text-white/90">
                        Удобные способы оплаты и доставки по всей России
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Payment Section */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <CreditCard className="w-8 h-8 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Оплата заказа
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Способы оплаты:
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                Безналичный расчет (для
                                                юридических лиц)
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Выставление счета и оплата по
                                                реквизитам. После получения
                                                заявки мы направим вам счет на
                                                оплату в течение 1 часа.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Section */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-red-100 rounded-lg">
                                <Truck className="w-8 h-8 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Доставка товаров
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Варианты доставки:
                                </h3>
                                <div className="space-y-3">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <div className="font-semibold text-gray-900 mb-2">
                                            Курьерская доставка по РФ
                                        </div>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>
                                                • Бесплатно при заказе от 5 000
                                                000 ₽
                                            </li>
                                            <li>
                                                • Стоимость и сроки
                                                рассчитываются индивидуально
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <div className="font-semibold text-gray-900 mb-2">
                                            Транспортной компанией
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">
                                            Партнеры: Деловые Линии, СДЭК, ПЭК
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Тарифы зависят от региона и веса
                                            груза
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Сроки доставки:
                                </h3>
                                <div className="text-sm text-gray-600 space-y-2">
                                    <div className="flex justify-between">
                                        <span>Междугородняя доставка:</span>
                                        <span className="font-semibold">
                                            ~10 календарных дней
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Calculator */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-red-100 rounded-lg">
                            <Calculator className="w-8 h-8 text-red-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Калькулятор доставки
                        </h2>
                    </div>

                    {/* Brick Wall Info */}
                    <div className="relative bg-red-800 rounded-lg py-8 px-6 mb-6 overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div
                                className="w-full h-full"
                            ></div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-start gap-4 text-white">
                                <Package className="w-12 h-12 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Стандартные параметры груза:
                                    </h3>
                                    <div className="space-y-1 text-white/90">
                                        <p>
                                            • Средний объем одного места: 0.13
                                            м³
                                        </p>
                                        <p>
                                            • Размеры транспортировочной тары:
                                            50×60×45 см
                                        </p>
                                        <p>• Средний вес одного места: 15 кг</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Город доставки
                            </label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Введите город"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Объем груза (м³)
                            </label>
                            <input
                                type="number"
                                value={volume}
                                onChange={(e) =>
                                    setVolume(Number(e.target.value))
                                }
                                step="0.01"
                                min="0.13"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <button className="mt-6 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                        Рассчитать стоимость доставки
                    </button>

                    <p className="text-sm text-gray-500 mt-4 text-center">
                        Расчет через интеграцию с "Деловыми Линиями"
                    </p>
                </div>

                {/* Important Info */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        ⚠️ Важная информация:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            • Окончательная сумма доставки рассчитывается
                            менеджером после оформления заказа
                        </li>
                        <li>
                            • Возможна предварительная консультация по вопросам
                            оплаты и доставки по телефону{" "}
                            <a
                                href="tel:+78001234567"
                                className="text-red-600 font-semibold"
                            >
                                8-800-123-45-67
                            </a>{" "}
                            или e-mail{" "}
                            <a
                                href="mailto:info@fabrikazvezda.ru"
                                className="text-red-600 font-semibold"
                            >
                                info@fabrikazvezda.ru
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
