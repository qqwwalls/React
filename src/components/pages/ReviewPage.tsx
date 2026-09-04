import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type ReviewFormData = {
    name: string;
    rating: string;
    reviewText: string;
};

const ReviewPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ReviewFormData>({
        defaultValues: {
            rating: "5",
        }
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit: SubmitHandler<ReviewFormData> = (data) => {
        console.log("Review Data:", data);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-xl border border-blue-50">
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Дякуємо за відгук!</h2>
                    <p className="text-gray-500 mb-8">Ваша думка дуже важлива для нас. Вона допоможе іншим покупцям зробити правильний вибір.</p>
                    <button 
                        onClick={() => navigate('/products')}
                        className="bg-gray-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-black transition"
                    >
                        Повернутися до каталогу
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 p-6 sm:p-10 text-white text-center">
                    <h1 className="text-3xl font-extrabold mb-2">Залишити відгук</h1>
                    <p className="text-gray-300">Розкажіть про ваші враження від товару</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-10 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ваше ім'я</label>
                        <input
                            type="text"
                            {...register("name", { required: "Ім'я є обов'язковим" })}
                            placeholder="Олександр"
                            className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 transition ${
                                errors.name ? "border-red-300 focus:ring-red-200 bg-red-50" : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                            }`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Оцінка товару</label>
                        <select
                            {...register("rating")}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white text-gray-700 font-medium"
                        >
                            <option value="5">⭐⭐⭐⭐⭐ Відмінно</option>
                            <option value="4">⭐⭐⭐⭐ Добре</option>
                            <option value="3">⭐⭐⭐ Нормально</option>
                            <option value="2">⭐⭐ Погано</option>
                            <option value="1">⭐ Жахливо</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ваш відгук / питання</label>
                        <textarea
                            {...register("reviewText", { 
                                required: "Текст відгуку є обов'язковим",
                                minLength: {
                                    value: 10,
                                    message: "Відгук повинен містити щонайменше 10 символів"
                                }
                            })}
                            rows={5}
                            placeholder="Напишіть, що вам сподобалося, або що можна покращити..."
                            className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 transition resize-none ${
                                errors.reviewText ? "border-red-300 focus:ring-red-200 bg-red-50" : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                            }`}
                        ></textarea>
                        {errors.reviewText && <p className="mt-1 text-sm text-red-500">{errors.reviewText.message}</p>}
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="w-full sm:w-1/3 bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-2/3 bg-gray-900 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-black hover:shadow-gray-300 transition-all"
                        >
                            Надіслати відгук
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewPage;
