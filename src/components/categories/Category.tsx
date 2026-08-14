import type { CategoryType } from "@/types/CategoryType";
import { useNavigate } from "react-router";

const Category = ({ category }: {category:CategoryType}) => {
    const navigate = useNavigate();

    // Якщо url вже містить http (наші мок дані), використовуємо його. Інакше будуємо шлях.
    const imageUrl = category.url.startsWith('http') 
        ? category.url 
        : import.meta.env.VITE_PATH_TO_SERVER + import.meta.env.VITE_PATH_TO_IMAGE_CATEGORIES + '/' + category.url;

    return (
        <div 
            onClick={() => navigate(`/categories/${category.slug}`)} 
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
        >
            <div className="relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={category.name}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/30">
                        View Details
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {category.name}
                    </h2>
                    <span className="rounded-xl bg-blue-50 border border-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                        #{category.id}
                    </span>
                </div>
                <div className="space-y-2 text-sm text-gray-500 font-medium">
                    <p className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                        <span>Slug:</span>
                        <span className="text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200">{category.slug}</span>
                    </p>
                    <p className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                        <span>Parent:</span>
                        <span className="text-gray-900">{category.parentId ?? "Root"}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Category;
