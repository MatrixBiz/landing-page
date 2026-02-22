import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import {
    formatRussianPhone,
    handleRussianPhoneMaskedBackspace,
} from "../../utils/phoneMask";

export function ContactsPage() {
    const [formData, setFormData] = useState({
        phone: "",
        inn: "",
        kpp: "",
        email: "",
        name: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here would be the logic to send callback request
        alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
        setFormData({ phone: "", inn: "", kpp: "", email: "", name: "" });
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-red-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Контакты
                    </h1>
                    <p className="text-xl text-white/90">
                        Свяжитесь с нами удобным для вас способом
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Phone Numbers */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Phone className="w-6 h-6 text-red-600" />
                                <h2 className="text-xl font-bold text-gray-900">
                                    Телефоны для связи
                                </h2>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="font-semibold text-gray-900">
                                        Горячая линия:
                                    </div>
                                    <a
                                        href="tel:+78001234567"
                                        className="text-red-600 text-lg"
                                    >
                                        +7 (937) 586-12-12
                                    </a>
                                    <div className="text-sm text-gray-600">
                                        Многоканальный, бесплатно по РФ
                                    </div>
                                </div>
                                {/*<div>*/}
                                {/*    <div className="font-semibold text-gray-900">*/}
                                {/*        Городская линия:*/}
                                {/*    </div>*/}
                                {/*    <a*/}
                                {/*        href="tel:+74951234567"*/}
                                {/*        className="text-red-600 text-lg"*/}
                                {/*    >*/}
                                {/*        +7 (495) 123-45-67*/}
                                {/*    </a>*/}
                                {/*    <div className="text-sm text-gray-600">*/}
                                {/*        Ежедневно с 9:00 до 18:00*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-6 h-6 text-red-600" />
                                <h2 className="text-xl font-bold text-gray-900">
                                    Электронная почта
                                </h2>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <div className="text-sm text-gray-600">
                                        Общие вопросы:
                                    </div>
                                    <a
                                        href="mailto:info@zvezdafabrika.ru"
                                        className="text-red-600"
                                    >
                                        info@zvezdafabrika.ru
                                    </a>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">
                                        Поддержка:
                                    </div>
                                    <a
                                        href="mailto:support@zvezdafabrika.ru"
                                        className="text-red-600"
                                    >
                                        support@zvezdafabrika.ru
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-red-600" />
                                <h2 className="text-xl font-bold text-gray-900">
                                    График работы
                                </h2>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">
                                        Понедельник – Пятница:
                                    </span>
                                    <span className="font-semibold text-gray-900">
                                        09:00 – 18:00
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">
                                        Обеденный перерыв:
                                    </span>
                                    <span className="font-semibold text-gray-900">
                                        12:00 – 13:00
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">
                                        Суббота, Воскресенье:
                                    </span>
                                    <span className="font-semibold text-red-600">
                                        Выходные дни
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Messengers */}
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageCircle className="w-6 h-6 text-red-600" />
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Мессенджеры
                                    </h2>
                                </div>
                                <div className="text-sm text-gray-600 mb-4">
                                    Для срочных вопросов свяжитесь с нами через
                                    мессенджер:
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href="https://t.me/zvezdafabrika"
                                        className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
                                    >
                                        Telegram
                                    </a>
                                    {/*<a*/}
                                    {/*    href="#"*/}
                                    {/*    className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center font-semibold"*/}
                                    {/*>*/}
                                    {/*    VK Мессенджер*/}
                                    {/*</a>*/}
                                </div>
                            </div>
                    </div>

                    {/* Callback Form */}
                    <div>
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Запросить обратный звонок
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ФИО *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="Иванов Иван Иванович"
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
                                        onKeyDown={(e) => {
                                            if (e.key !== "Backspace") {
                                                return;
                                            }
                                            const result =
                                                handleRussianPhoneMaskedBackspace(
                                                    formData.phone,
                                                    e.currentTarget
                                                        .selectionStart ??
                                                        formData.phone.length,
                                                );
                                            if (!result) {
                                                return;
                                            }

                                            e.preventDefault();
                                            setFormData({
                                                ...formData,
                                                phone: result.value,
                                            });

                                            requestAnimationFrame(() => {
                                                e.currentTarget.setSelectionRange(
                                                    result.cursorPosition,
                                                    result.cursorPosition,
                                                );
                                            });
                                        }}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: formatRussianPhone(
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        placeholder="+7 (___) ___-__-__"
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

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ИНН *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.inn}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    inn: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                            placeholder="1234567890"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            КПП *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.kpp}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    kpp: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                            placeholder="123456789"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                                >
                                    Отправить заявку
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Нажимая кнопку, вы соглашаетесь с политикой
                                    конфиденциальности
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
