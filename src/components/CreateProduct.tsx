const CreateProduct = ()=>{
    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col w-1/2 bg-white p-8 rounded-xl shadow-lg space-y-4">
        <div >
            <label className="block mb-1 text-sm font-medium">
                Назва товару
            </label>
            <input
                type="text"
                name="title"
                placeholder="Введіть назву"
                className="w-full px-3 py-2 border rounded-lg"
            />
        </div>

        {/* Ціна */}
        <div>
            <label className="block mb-1 text-sm font-medium">
                Ціна
            </label>
            <input
                type="number"
                name="price"
                placeholder="0"
                min="0"
                className="w-full px-3 py-2 border rounded-lg"
            />
        </div>

        {/* URL зображення */}
        <div>
            <label className="block mb-1 text-sm font-medium">
                Зображення (URL)
            </label>
            <input
                type="text"
                name="image"
                placeholder="https://..."
                className="w-full px-3 py-2 border rounded-lg"
            />
        </div>

        {/* Кількість */}
        <div>
            <label className="block mb-1 text-sm font-medium">
                Кількість
            </label>
            <input
                type="number"
                name="count"
                placeholder="0"
                min="0"
                className="w-full px-3 py-2 border rounded-lg"
            />
        </div>

        {/* Категорія */}
        <div>
            <label className="block mb-1 text-sm font-medium">
                Категорія
            </label>
            <select
                name="id_category"
                className="w-full px-3 py-2 border rounded-lg"
            >
                <option value="">Оберіть категорію</option>
                <option value="1">Ноутбуки</option>
                <option value="2">Смартфони</option>
                <option value="3">Навушники</option>
            </select>
        </div>

        {/* Активний */}
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                name="is_active"
                id="is_active"
            />
            <label htmlFor="is_active">
                Активний товар
            </label>
        </div>

        <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg"
        >
            Створити товар
        </button>
        </div></div>)
}
export default CreateProduct;