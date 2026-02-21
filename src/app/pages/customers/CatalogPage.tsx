import { useState } from "react";
import { Search, ShoppingCart, Filter } from "lucide-react";
import { useCart } from "../../context/CartContext";

const catalogProducts = [
    {
        id: "lk-p-001",
        name: "ЛК-П HP LaserJet",
        code: "CE505A",
        compatibility: "HP LaserJet P2035/P2055",
        category: "ЛК-П",
    },
    {
        id: "lk-p-002",
        name: "ЛК-П Canon LBP",
        code: "CRG-725",
        compatibility: "Canon i-SENSYS LBP6000/6020",
        category: "ЛК-П",
    },
    {
        id: "lk-t-001",
        name: "ЛК-Т Samsung ML",
        code: "MLT-D101S",
        compatibility: "Samsung ML-2160/2165/SCX-3400",
        category: "ЛК-Т",
    },
    {
        id: "lk-t-002",
        name: "ЛК-Т Brother HL",
        code: "TN-2335",
        compatibility: "Brother HL-L2300/DCP-L2500",
        category: "ЛК-Т",
    },
    {
        id: "sk-r-001",
        name: "СК-Р Canon PIXMA",
        code: "PG-445XL",
        compatibility: "Canon PIXMA MG2440/MG2540",
        category: "СК-Р",
    },
    {
        id: "sk-r-002",
        name: "СК-Р Epson L-series",
        code: "T6641",
        compatibility: "Epson L100/L110/L200/L210",
        category: "СК-Р",
    },
    {
        id: "lk-p-003",
        name: "ЛК-П Xerox WorkCentre",
        code: "106R02773",
        compatibility: "Xerox WorkCentre 3020/3025",
        category: "ЛК-П",
    },
    {
        id: "lk-t-003",
        name: "ЛК-Т Kyocera FS",
        code: "TK-1110",
        compatibility: "Kyocera FS-1040/1020MFP/1120MFP",
        category: "ЛК-Т",
    },
];

export function CatalogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const { addToCart } = useCart();

    const filteredProducts = catalogProducts.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                                placeholder="Поиск по названию, коду или совместимости..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2">
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
                            <button
                                onClick={() => setSelectedCategory("ЛК-П")}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    selectedCategory === "ЛК-П"
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                ЛК-П
                            </button>
                            <button
                                onClick={() => setSelectedCategory("ЛК-Т")}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    selectedCategory === "ЛК-Т"
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                ЛК-Т
                            </button>
                            <button
                                onClick={() => setSelectedCategory("СК-Р")}
                                className={`px-4 py-2 rounded-lg transition-colors ${
                                    selectedCategory === "СК-Р"
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                СК-Р
                            </button>
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

                            <div className="mb-2">
                                <span className="text-xs text-red-600 font-semibold">
                                    {product.category}
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
