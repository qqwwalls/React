import { useRef, useEffect } from 'react';
import type { ProductType } from './models/product';
import Card from './ui/Card';

function Product({ product }: { product: ProductType }) {
    const productRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(productRef);
    }, []);

    return (
        <div ref={productRef} className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto h-full flex flex-col">
            <Card>
                <div className="w-full aspect-square bg-[#f5f5f5] flex items-center justify-center border-b border-gray-100 overflow-hidden">
                    <img
                        src={product.image || "https://placehold.co/400"}
                        alt={product.title}
                        className="w-full h-full object-cover mix-blend-multiply hover:scale-105 transition-transform duration-500"
                    />
                </div>
                 
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 break-words">
                            {product.title}
                        </h2>
                 
                        <span
                            className={`self-start px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                                product.is_active
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                        >
                            {product.is_active ? "Активний" : "Неактивний"}
                        </span>
                    </div>
                 
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>ID:</span>
                            <span className="font-medium">{product.id}</span>
                        </div>
                 
                        <div className="flex justify-between">
                            <span>Категорія:</span>
                            <span className="font-medium">{product.id_category || "Немає"}</span>
                        </div>
                 
                        <div className="flex justify-between">
                            <span>Кількість:</span>
                            <span className="font-medium">{product.count || 0} шт.</span>
                        </div>
                    </div>
                 
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-auto">
                        <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                            {product.price} ₴
                        </span>
                 
                        <button className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition">
                            Купити
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Product;