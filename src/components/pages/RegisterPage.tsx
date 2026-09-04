import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
};

export default function RegisterPage() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            email: "test@gmail.com",
            password: "",
            confirmPassword: "",
        }
    });
    
    const [success, setSuccess] = useState("");

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        setSuccess("Реєстрація успішна!");
        console.log(data);
    };

    const validateEmail = (value: string) => {
        return value.length === 12 || "Email must be at least 12 characters long";
    };

    const password = watch("password");

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-10 shadow-2xl border border-gray-100">
                {/* Заголовок */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Створити акаунт
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                        Приєднуйтесь до нас сьогодні
                    </p>
                </div>

                {/* Успіх */}
                {success && (
                    <div className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800 border border-green-200 shadow-sm">
                        {success}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5 rounded-md shadow-sm">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email адреса
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", { 
                                    required: "Email is required",
                                    validate: validateEmail
                                })}
                                placeholder="name@example.com"
                                autoComplete="email"
                                className={`block w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 focus:ring-2 sm:text-sm ${
                                    errors.email 
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50/50" 
                                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 bg-gray-50 focus:bg-white"
                                }`}
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm font-medium text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Пароль */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Пароль
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long"
                                    }
                                })}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                className={`block w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 focus:ring-2 sm:text-sm ${
                                    errors.password 
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50/50" 
                                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 bg-gray-50 focus:bg-white"
                                }`}
                            />
                            {errors.password && (
                                <p className="mt-2 text-sm font-medium text-red-600">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Підтвердження пароля */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Підтвердження пароля
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                {...register("confirmPassword", { 
                                    required: "Confirm Password is required",
                                    validate: (value) => value === password || "Паролі не збігаються"
                                })}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                className={`block w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 focus:ring-2 sm:text-sm ${
                                    errors.confirmPassword 
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50/50" 
                                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-200 bg-gray-50 focus:bg-white"
                                }`}
                            />
                            {errors.confirmPassword && (
                                <p className="mt-2 text-sm font-medium text-red-600">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg transition duration-200 hover:bg-blue-700 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Зареєструватися
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-500">Вже маєте акаунт? </span>
                    <button 
                        onClick={() => navigate('/login')}
                        className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                    >
                        Увійти
                    </button>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center text-sm font-medium text-gray-700">
                    Data (watched email): <span className="text-blue-600">{watch("email")}</span>
                </div>
            </div>
        </div>
    );
}
