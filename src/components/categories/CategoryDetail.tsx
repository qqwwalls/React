import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import type { CategoryType } from "@/types/CategoryType";
import { MOCK_CATEGORIES } from "@/data/mockCategories";

const CategoryDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [category, setCategory] = useState<CategoryType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        // Имітація завантаження (як у викладача, але без ризику падіння бекенду)
        setLoading(true);
        setTimeout(() => {
            const found = MOCK_CATEGORIES.find(c => c.slug === slug);
            setCategory(found || null);
            setLoading(false);
        }, 400); // 400ms delay for realistic feel
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!category) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-gray-900">Category not found</h2>
                <p className="mt-2 text-gray-500">We couldn't find the category "{slug}".</p>
                <button onClick={() => navigate('/categories')} className="mt-6 text-blue-600 hover:underline">
                    &larr; Back to categories
                </button>
            </div>
        );
    }

    const imageUrl = category.url;

    return (
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 sm:p-12 shadow-xl border border-gray-100 mt-6">
            <button 
                onClick={() => navigate('/categories')}
                className="mb-8 flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Categories
            </button>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="relative group overflow-hidden rounded-2xl shadow-md">
                    <img
                        src={imageUrl}
                        alt={category.name}
                        className="h-80 w-full object-cover transform transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div>
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                        Category ID: #{category.id}
                    </div>
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        {category.name}
                    </h1>

                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                            <span className="text-gray-500 font-medium">URL Slug</span>
                            <span className="text-gray-900 font-bold bg-white px-3 py-1 rounded-lg border border-gray-200">{category.slug}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-gray-500 font-medium">Parent Category</span>
                            <span className="text-gray-900 font-bold">{category.parentId ?? "Root Directory"}</span>
                        </div>
                    </div>
                    
                    <button className="mt-8 w-full sm:w-auto bg-gray-900 text-white rounded-xl py-3.5 px-8 font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-200">
                        View Products in {category.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;
