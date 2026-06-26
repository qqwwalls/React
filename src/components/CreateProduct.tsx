import { useState, type FormEvent, type ChangeEvent } from 'react';
import type { ProductType } from '../models/product';

type CreateProductProps = {
    onCreateProduct: (product: ProductType) => void;
};

const CreateProduct = ({ onCreateProduct }: CreateProductProps) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState<number | string>("");
    const [count, setCount] = useState<number | string>("");
    const [image, setImage] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value);
    const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => setCount(e.target.value);
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => setImage(e.target.value);
    const handleIsActiveChange = (e: ChangeEvent<HTMLInputElement>) => setIsActive(e.target.checked);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const newProduct: ProductType = {
            id: Date.now(),
            title: title || "Новий товар",
            price: Number(price) || 0,
            count: Number(count) || 0,
            is_active: isActive,
            image: image || "",
            id_category: 1
        };

        onCreateProduct(newProduct);
        
        setTitle("");
        setPrice("");
        setCount("");
        setImage("");
        setIsActive(false);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Додати новий товар</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Назва товару</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={handleTitleChange}
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
                            value={price} 
                            onChange={handlePriceChange}
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
                            value={count} 
                            onChange={handleCountChange}
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
                        value={image} 
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="https://..."
                    />
                </div>

                <div className="flex items-center gap-3 mt-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <input 
                        type="checkbox" 
                        id="isActive"
                        checked={isActive} 
                        onChange={handleIsActiveChange}
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

export default CreateProduct;
