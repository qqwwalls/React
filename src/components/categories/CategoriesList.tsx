import { useMemo } from "react";
import { useSearchParams, useLoaderData } from "react-router";
import type { CategoryType } from "@/types/CategoryType";
import Category from "@/components/categories/Category";

const CategoriesList = () => {
    const categories = useLoaderData() as CategoryType[];
    
    // Використовуємо useSearchParams для пагінації (ідеально для теми React Router!)
    const [searchParams, setSearchParams] = useSearchParams();
    
    // Отримуємо поточну сторінку з URL (за замовчуванням 1)
    const currentPage = parseInt(searchParams.get("page") || "1");
    const itemsPerPage = 4;

    // Обчислюємо дані для поточної сторінки, використовуючи useMemo для оптимізації
    const { totalPages, currentCategories } = useMemo(() => {
        const total = Math.ceil(categories.length / itemsPerPage);
        const start = (currentPage - 1) * itemsPerPage;
        
        return {
            totalPages: total,
            currentCategories: categories.slice(start, start + itemsPerPage)
        };
    }, [categories, currentPage]); // Перераховуватиметься ТІЛЬКИ якщо зміняться категорії або номер сторінки

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    if (categories.length === 0) {
        return <p className="text-center text-gray-500 text-lg mt-10">List is empty</p>;
    }

    return (
        <div className="mx-auto max-w-7xl p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
                <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                    Page <span className="font-bold text-blue-600">{currentPage}</span> of {totalPages}
                </div>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {currentCategories.map((category) => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-10 flex justify-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-xl font-medium transition ${
                            currentPage === 1 
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-blue-600"
                        }`}
                    >
                        Previous
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`w-10 h-10 rounded-xl font-bold transition ${
                                currentPage === i + 1 
                                ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-xl font-medium transition ${
                            currentPage === totalPages 
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-blue-600"
                        }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};
export default CategoriesList;
