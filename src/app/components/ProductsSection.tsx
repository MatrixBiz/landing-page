import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
    {
        id: 1,
        name: "ЛК-П",
        description: "Лазерный картридж портативный",
        image: "https://images.unsplash.com/photo-1723672947453-e6d09052bdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGVyJTIwY2FydHJpZGdlJTIwdG9uZXIlMjBibGFja3xlbnwxfHx8fDE3NzE2NzE3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 2,
        name: "ЛК-Т",
        description: "Лазерный картридж тонерный",
        image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmslMjBjYXJ0cmlkZ2UlMjBwcmludGVyJTIwc3VwcGx5fGVufDF8fHx8MTc3MTY3MTc1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: 3,
        name: "СК-Р",
        description: "Струйный картридж профессиональный",
        image: "https://images.unsplash.com/photo-1569852741721-ee5a94bf719e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHByaW50ZXIlMjB0b25lciUyMGNhcnRyaWRnZXxlbnwxfHx8fDE3NzE2NzE3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

export function ProductsSection() {
    return (
        <section id="products" className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:border-red-600 transition-colors cursor-pointer"
                        >
                            <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                                {product.description}
                            </div>
                            <div className="text-4xl font-bold text-red-600">
                                {product.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Large Product Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* First Product - Large */}
                    <div className="bg-red-600 rounded-2xl p-8 sm:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ImageWithFallback
                                src={products[0].image}
                                alt={products[0].name}
                                className="w-full h-full object-contain p-8"
                            />
                        </div>
                        <div className="relative z-10">
                            <div className="text-sm text-white/80 uppercase tracking-wider mb-2">
                                {products[0].description}
                            </div>
                            <div className="text-6xl sm:text-7xl font-bold text-white">
                                {products[0].name}
                            </div>
                        </div>
                    </div>

                    {/* Second Product - Large */}
                    <div className="bg-red-600 rounded-2xl p-8 sm:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ImageWithFallback
                                src={products[1].image}
                                alt={products[1].name}
                                className="w-full h-full object-contain p-8"
                            />
                        </div>
                        <div className="relative z-10">
                            <div className="text-sm text-white/80 uppercase tracking-wider mb-2">
                                {products[1].description}
                            </div>
                            <div className="text-6xl sm:text-7xl font-bold text-white">
                                {products[1].name}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Product - Full Width */}
                <div className="bg-red-600 rounded-2xl p-8 sm:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-end">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ImageWithFallback
                            src={products[2].image}
                            alt={products[2].name}
                            className="w-full h-full object-contain p-8"
                        />
                    </div>
                    <div className="relative z-10">
                        <div className="text-sm text-white/80 uppercase tracking-wider mb-2">
                            {products[2].description}
                        </div>
                        <div className="text-6xl sm:text-7xl font-bold text-white">
                            {products[2].name}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
