import { useMemo, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { catalogProducts } from "../../data/catalogProducts";

export function CatalogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedManufacturer, setSelectedManufacturer] =
        useState<string>("all");
    const { addToCart } = useCart();
    const manufacturerOptions = useMemo(
        () =>
            [...new Set(catalogProducts.map((product) => product.manufacturer))]
                .filter(Boolean)
                .sort((a, b) => a.localeCompare(b, "ru")),
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

        const matchesManufacturer =
            selectedManufacturer === "all" ||
            product.manufacturer === selectedManufacturer;

        return matchesSearch && matchesManufacturer;
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

                        {/* Manufacturer Filter */}
                        <div className="md:w-72">
                            <select
                                value={selectedManufacturer}
                                onChange={(e) =>
                                    setSelectedManufacturer(e.target.value)
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            >
                                <option value="all">Все производители</option>
                                {manufacturerOptions.map((manufacturer) => (
                                    <option key={manufacturer} value={manufacturer}>
                                        {manufacturer}
                                    </option>
                                ))}
                            </select>
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
                            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col"
                        >
                            <div className="mb-2">
                                <span className="text-xs text-gray-600 font-medium">
                                    {product.manufacturer}
                                </span>
                            </div>

                            <h3
                                className="font-semibold text-gray-900 mb-1 break-words"
                                style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
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
