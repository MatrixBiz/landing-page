import { useMemo } from "react";
import { Link } from "react-router";
import { catalogProducts } from "@/app/data/catalogProducts";

export function ProductsSection() {
    const manufacturerCount = useMemo(
        () =>
            new Set(catalogProducts.map((product) => product.manufacturer))
                .size,
        [],
    );

    return (
        <section id="products" className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 sm:p-10 lg:p-12">
                            <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-3">
                                Каталог продукции
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Совместимые картриджи для офисной печати
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Подбор по производителю, коду и совместимости. В
                                каталоге представлены позиции для популярных
                                линеек печатающих устройств.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                                <div className="rounded-xl border border-gray-200 p-4">
                                    <p className="text-2xl font-bold text-gray-900">
                                        1700+
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        позиций в каталоге
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-200 p-4">
                                    <p className="text-2xl font-bold text-gray-900">
                                        {manufacturerCount}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        совместимых брендов
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-200 p-4">
                                    <p className="text-2xl font-bold text-gray-900">
                                        12 мес.
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        гарантийный срок
                                    </p>
                                </div>
                            </div>

                            <Link
                                to="/catalog"
                                className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
                            >
                                Перейти в каталог
                            </Link>
                        </div>
                        <div className="bg-gray-100 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
                            <img
                                src="/images/catalog-boxes.png"
                                alt="Коробки с продукцией фабрики Звезда"
                                className="w-full max-w-2xl h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
