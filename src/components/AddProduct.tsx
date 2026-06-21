import { useState, type FormEvent } from 'react';
import type { ProductType } from '../models/product';

const AddProduct = () => {
    const [product, setProduct] = useState<Partial<ProductType>>({
        title: "",
        price: 0,
        count: 0,
        is_active: false,
        image: ""
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Додаємо новий товар:", product);
        alert(`Товар "${product.title}" успішно відправлено (див. консоль)!`);
        
        setProduct({
            title: "",
            price: 0,
            count: 0,
            is_active: false,
            image: ""
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Додати новий товар</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Назва товару</label>
                    <input 
                        type="text" 
                        value={product.title} 
                        onChange={e => setProduct({...product, title: e.target.value})}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Наприклад: Ноутбук..."
                        required
                    />
                </div>
                
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ціна (₴)</label>
                        <input 
                            type="number" 
                            value={product.price || ""} 
                            onChange={e => setProduct({...product, price: Number(e.target.value)})}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="0"
                            min="0"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Кількість</label>
                        <input 
                            type="number" 
                            value={product.count || ""} 
                            onChange={e => setProduct({...product, count: Number(e.target.value)})}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            placeholder="0"
                            min="0"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL зображення</label>
                    <input 
                        type="text" 
                        value={product.image} 
                        onChange={e => setProduct({...product, image: e.target.value})}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="https://..."
                    />
                </div>

                <div className="flex items-center gap-3 mt-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <input 
                        type="checkbox" 
                        id="isActive"
                        checked={product.is_active} 
                        onChange={e => setProduct({...product, is_active: e.target.checked})}
                        className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="isActive" className="text-sm font-medium text-gray-700 cursor-pointer flex-1">
                        Товар активний (доступний для покупки)
                    </label>
                </div>

                <button 
                    type="submit"
                    className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-sm shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all duration-200"
                >
                    Додати товар
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
