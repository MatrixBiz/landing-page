import { useMemo, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { catalogProducts } from "../../data/catalogProducts";

export function CatalogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const { addToCart } = useCart();
    const categoryOptions = useMemo(
        () => [...new Set(catalogProducts.map((product) => product.category))],
        [],
    );

    const filteredProducts = catalogProducts.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.manufacturer
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            product.compatibility
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "all" || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Каталог товаров
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl">
                        Здесь вы можете ознакомиться с нашей линейкой товаров и
                        выбрать нужный для себя картридж
                    </p>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Поиск по названию, коду, производителю или совместимости..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 flex-wrap">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    selectedCategory === "all"
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                Все
                            </button>
                            {categoryOptions.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg transition-colors ${
                                        selectedCategory === category
                                            ? "bg-red-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1723672947453-e6d09052bdf3?w=300"
                                    alt={product.name}
                                    className="w-32 h-32 object-contain"
                                />
                            </div>

                            <div className="mb-2 flex items-center justify-between gap-2">
                                <span className="text-xs text-red-600 font-semibold">
                                    {product.category}
                                </span>
                                <span className="text-xs text-gray-600 font-medium truncate">
                                    {product.manufacturer}
                                </span>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-1">
                                Код: {product.code}
                            </p>
                            <p className="text-xs text-gray-500 mb-4">
                                {product.compatibility}
                            </p>
                            {product.resource && (
                                <p className="text-xs text-gray-500 mb-4">
                                    Ресурс: {product.resource} стр.
                                </p>
                            )}

                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-lg font-semibold text-red-600">
                                        Цена по запросу
                                    </span>
                                </div>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                    title="Добавить в корзину"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            Товары не найдены. Попробуйте изменить параметры
                            поиска.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
