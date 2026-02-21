import { AlertTriangle, FileText, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { formatRussianPhone } from "../../utils/phoneMask";

export function ServicePage() {
    const [formData, setFormData] = useState({
        orderNumber: "",
        productName: "",
        productCode: "",
        issueDescription: "",
        clientName: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Запрос RMA - ${formData.productCode}`;
        const body = `Заявка на замену картриджа

Номер заказа: ${formData.orderNumber}
Наименование товара: ${formData.productName}
Код товара: ${formData.productCode}

Описание проблемы:
${formData.issueDescription}

Контактное лицо: ${formData.clientName}
Email: ${formData.email}
Телефон: ${formData.phone}

С уважением,`;

        window.location.href = `mailto:support@fabrikazvezda.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-red-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Сервис и поддержка
                    </h1>
                    <p className="text-xl text-white/90">
                        Гарантийное обслуживание и замена картриджей
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* RMA Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-red-100 rounded-lg">
                                    <AlertTriangle className="w-10 h-10 text-red-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Запрос на замену (RMA)
                                    </h2>
                                    <p className="text-gray-600">
                                        Return Merchandise Authorization
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Номер заказа *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.orderNumber}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    orderNumber: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                            placeholder="ФЗ-2026-0001"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Код товара *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.productCode}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    productCode: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                            placeholder="CE505A"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Наименование товара *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.productName}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                productName: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="ЛК-П HP LaserJet"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Описание проблемы *
                                    </label>
                                    <textarea
                                        required
                                        value={formData.issueDescription}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                issueDescription:
                                                    e.target.value,
                                            })
                                        }
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                                        placeholder="Опишите подробно возникшую проблему..."
                                    />
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">
                                        Контактные данные
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                ФИО *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.clientName}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        clientName:
                                                            e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                placeholder="Иванов Иван Иванович"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                placeholder="example@company.ru"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Телефон *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        phone: formatRussianPhone(e.target.value),
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                                placeholder="+7 (___) ___-__-__"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Отправить запрос на замену
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    После отправки с вами свяжется специалист в
                                    течение 24 часов
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* RMA Process */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="w-6 h-6 text-red-600" />
                                <h3 className="font-semibold text-gray-900">
                                    Процедура RMA
                                </h3>
                            </div>

                            <ol className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        1
                                    </span>
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            Заполните форму
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Укажите детали проблемы
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        2
                                    </span>
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            Получите номер RMA
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            В течение 24 часов
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        3
                                    </span>
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            Отправьте товар
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            С номером RMA на упаковке
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        4
                                    </span>
                                    <div>
                                        <div className="font-medium text-gray-900">
                                            Получите замену
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            После проверки товара
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        {/* Warranty Info */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle className="w-6 h-6 text-blue-600" />
                                <h3 className="font-semibold text-gray-900">
                                    Гарантия
                                </h3>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>• Гарантия на все картриджи</li>
                                <li>• Замена бракованной продукции</li>
                                <li>• Проверка в течение 3-5 рабочих дней</li>
                                <li>
                                    • Бесплатная обратная доставка при
                                    подтверждении брака
                                </li>
                            </ul>
                        </div>

                        {/* Contact Support */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">
                                Нужна помощь?
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <div className="text-gray-600">
                                        Телефон поддержки:
                                    </div>
                                    <a
                                        href="tel:+78001234567"
                                        className="text-red-600 font-semibold"
                                    >
                                        8-800-123-45-67
                                    </a>
                                </div>
                                <div>
                                    <div className="text-gray-600">Email:</div>
                                    <a
                                        href="mailto:support@fabrikazvezda.ru"
                                        className="text-red-600 font-semibold"
                                    >
                                        support@fabrikazvezda.ru
                                    </a>
                                </div>
                                <div>
                                    <div className="text-gray-600">
                                        Время работы:
                                    </div>
                                    <div className="text-gray-900">
                                        Пн-Пт 09:00-18:00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
