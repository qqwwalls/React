import ProductsList from "./components/ProductsList";
import CreateProduct from "./components/CreateProduct";
import CategoriesList from "@/components/categories/CategoriesList";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 font-sans pb-20">
            {/* Header with glassmorphism */}
            <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200 px-6 sm:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">
                    StoreAdmin ✨
                </h1>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                {/* Categories Section */}
                <div className="mb-10 bg-white/40 rounded-3xl border border-white/60 shadow-xl backdrop-blur-sm overflow-hidden">
                    <CategoriesList />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Sidebar: Form */}
                    <div className="xl:col-span-4 sticky top-28">
                        <CreateProduct />
                    </div>

                    {/* Right Content: Products Grid */}
                    <div className="xl:col-span-8 bg-white/40 rounded-3xl p-4 sm:p-8 border border-white/60 shadow-xl backdrop-blur-sm min-h-[500px]">
                        <div className="mb-6 px-4">
                            <h2 className="text-2xl font-bold text-gray-800">Каталог товарів</h2>
                            <p className="text-gray-500 text-sm mt-1">Керуйте вашими товарами та їх наявністю.</p>
                        </div>
                        <ProductsList />
                    </div>
                    
                </div>
            </main>
        </div>
    );
}

export default App;