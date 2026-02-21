import { useState } from "react";
import { Mail, CheckCircle, Copy } from "lucide-react";

export function RequestQuotePage() {
    const [includePartners, setIncludePartners] = useState(false);

    const mainEmail = "info@fabrikazvezda.ru";
    const partnerEmail1 = "matrix@partner.ru";
    const partnerEmail2 = "trading@fabrikazvezda.ru";

    const handleSendRequest = () => {
        const recipients = includePartners
            ? `${mainEmail};${partnerEmail1};${partnerEmail2}`
            : mainEmail;

        const subject = "Запрос коммерческого предложения";
        const body = `Здравствуйте!

Прошу предоставить коммерческое предложение на следующие позиции:

1. [Наименование товара, артикул, количество]
2. 
3. 

Организация: [Название]
ИНН: [ИНН]
КПП: [КПП]

Контактное лицо: [ФИО]
Телефон: [Номер телефона]
E-mail: [Адрес электронной почты]

С уважением,`;

        window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="min-h-screen">
            {/* Brick Wall Header */}
            <div className="relative bg-red-800 py-16 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
              0deg,
              #8B0000,
              #8B0000 10px,
              #A00000 10px,
              #A00000 20px
            ),
            repeating-linear-gradient(
              90deg,
              #8B0000,
              #8B0000 30px,
              #A00000 30px,
              #A00000 60px
            )`,
                            backgroundBlendMode: "multiply",
                        }}
                    ></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Запросить КП
                    </h1>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
                        <p className="text-2xl text-white font-semibold">
                            ⏱ Средний срок ожидания ответа на запрос составляет
                            60 минут
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Быстрый запрос коммерческого предложения
                        </h2>
                        <p className="text-gray-600">
                            Нажмите на кнопку ниже, и автоматически откроется
                            форма для отправки письма с запросом КП. Наши
                            специалисты ответят вам в течение 60 минут в рабочее
                            время.
                        </p>
                    </div>

                    {/* Email Recipients */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h3 className="font-semibold text-gray-900 mb-4">
                            Получатели:
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-gray-700">
                                    {mainEmail}
                                </span>
                                <button
                                    onClick={() =>
                                        navigator.clipboard.writeText(mainEmail)
                                    }
                                    className="ml-auto p-1 text-gray-400 hover:text-gray-600"
                                    title="Копировать"
                                >
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Partner Emails Checkbox */}
                            <div className="border-t border-gray-200 pt-4">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={includePartners}
                                        onChange={(e) =>
                                            setIncludePartners(e.target.checked)
                                        }
                                        className="mt-1 w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-600"
                                    />
                                    <div className="flex-1">
                                        <span className="text-gray-900 font-medium">
                                            Добавить в копию партнеров?
                                        </span>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Ваш запрос будет отправлен также в
                                            компании "Матрица" и "Торговый дом
                                            Фабрики Звезда". Вы получите три КП
                                            для формирования НМЦК.
                                        </p>
                                    </div>
                                </label>

                                {includePartners && (
                                    <div className="mt-4 ml-8 space-y-2">
                                        <div className="flex items-center gap-3 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-gray-600">
                                                {partnerEmail1}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                            <span className="text-gray-600">
                                                {partnerEmail2}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-4">
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                60 мин
                            </div>
                            <div className="text-sm text-gray-600">
                                Среднее время ответа
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                3 КП
                            </div>
                            <div className="text-sm text-gray-600">
                                При включении партнеров
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                24/7
                            </div>
                            <div className="text-sm text-gray-600">
                                Прием заявок
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleSendRequest}
                        className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
                    >
                        <Mail className="w-6 h-6" />
                        Отправить запрос на КП
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        После нажатия откроется ваш почтовый клиент с
                        подготовленным шаблоном письма
                    </p>
                </div>
            </div>
        </div>
    );
}
