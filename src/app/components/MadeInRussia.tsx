import Logo from "../../imports/Logo1";

export function MadeInRussia() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Red Logo */}
                    <div className="mb-8 inline-flex items-center justify-center">
                        <div className="w-60 h-60">
                            <Logo />
                        </div>
                    </div>

                    {/* Text */}
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-600 mb-6">
                        СДЕЛАНО
                        <br />В РОССИИ
                    </h2>

                    <p className="text-xl text-gray-600 max-w-2xl mb-8">
                        Полный производственный цикл на территории Российской
                        Федерации. Контроль качества на каждом этапе
                        производства.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">
                                100%
                            </div>
                            <div className="text-gray-600">
                                Российское производство
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">
                                ✓
                            </div>
                            <div className="text-gray-600">
                                Сертифицированное производство
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-red-600 mb-2">
                                500+
                            </div>
                            <div className="text-gray-600">
                                Моделей картриджей
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
