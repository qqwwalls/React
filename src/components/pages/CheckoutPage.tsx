import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type CheckoutFormData = {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    paymentMethod: "card" | "cash";
};

const CheckoutPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CheckoutFormData>({
        defaultValues: {
            paymentMethod: "card",
        },
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
        console.log("Order Data:", data);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-xl border border-green-100">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Замовлення оформлено!</h2>
                    <p className="text-gray-500 mb-8">Дякуємо за покупку. Ми зв'яжемося з вами найближчим часом для підтвердження деталей.</p>
                    <button 
                        onClick={() => navigate('/products')}
                        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition"
                    >
                        Повернутися до товарів
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-blue-600 p-6 sm:p-10 text-white">
                    <h1 className="text-3xl font-extrabold mb-2">Оформлення замовлення</h1>
                    <p className="text-blue-100">Будь ласка, заповніть деталі доставки, щоб ми могли відправити товар.</p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-10 space-y-8">
                    {/* Особисті дані */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Особисті дані</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ім'я</label>
                                <input
                                    type="text"
                                    {...register("firstName", { required: "Ім'я є обов'язковим" })}
                                    className={`w-full px-4 py-2.5 rounded-xl border outline-none focus:ring-2 transition ${
                                        errors.firstName ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                    }`}
                                />
                                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Прізвище</label>
                                <input
                                    type="text"
                                    {...register("lastName", { required: "Прізвище є обов'язковим" })}
                                    className={`w-full px-4 py-2.5 rounded-xl border outline-none focus:ring-2 transition ${
                                        errors.lastName ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                    }`}
                                />
                                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Доставка */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Доставка</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Номер телефону</label>
                            <input
                                type="tel"
                                {...register("phone", { 
                                    required: "Телефон є обов'язковим",
                                    pattern: {
                                        value: /^[0-9+]{10,13}$/,
                                        message: "Невірний формат телефону (напр. +380...)"
                                    }
                                })}
                                placeholder="+380"
                                className={`w-full px-4 py-2.5 rounded-xl border outline-none focus:ring-2 transition ${
                                    errors.phone ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                }`}
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Повна адреса (Місто, відділення НП / вулиця)</label>
                            <input
                                type="text"
                                {...register("address", { required: "Адреса є обов'язковою" })}
                                className={`w-full px-4 py-2.5 rounded-xl border outline-none focus:ring-2 transition ${
                                    errors.address ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                                }`}
                            />
                            {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
                        </div>
                    </div>

                    {/* Оплата */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Спосіб оплати</h3>
                        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    value="card"
                                    {...register("paymentMethod")}
                                    className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-700 font-medium">Оплата карткою</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input
                                    type="radio"
                                    value="cash"
                                    {...register("paymentMethod")}
                                    className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-700 font-medium">Оплата при отриманні (Готівка)</span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-200 transition-all text-lg"
                        >
                            Підтвердити замовлення
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
