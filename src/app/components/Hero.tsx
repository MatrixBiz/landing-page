import { Link } from "react-router";
import { Mail } from "lucide-react";

export function Hero() {
    const handleQuickRequest = () => {
        window.location.href =
            "mailto:info@zvezdafabrika.ru?subject=Быстрая заявка";
    };

    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Картриджи для принтеров
                        <span className="block text-red-600 mt-2">
                            Российского производства
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Высокое качество печати, надежность и долговечность.
                        Полный цикл производства на территории России.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/catalog"
                            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Каталог продукции
                        </Link>
                        <button
                            onClick={handleQuickRequest}
                            className="px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Быстрая заявка
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
