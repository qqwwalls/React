import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useAuth } from '@/context/AuthContext';
import { customFetch } from '@/api/customFetch';

type LoginFormData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>();

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        setError(null);
        setIsLoading(true);

        try {
            const response = await customFetch('/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Login failed! Please check your credentials.');
            }

            const responseData = await response.json();
            login(responseData.Token || responseData.accessToken || responseData.token);
            navigate('/products');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Помилка авторизації');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Please sign in to access your protected dashboard.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email format"
                                }
                            })}
                            className={`w-full px-4 py-3 rounded-xl border focus:ring-4 transition-all outline-none ${
                                errors.email 
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 bg-red-50" 
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                            }`}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register("password", { 
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className={`w-full px-4 py-3 rounded-xl border focus:ring-4 transition-all outline-none ${
                                errors.password 
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 bg-red-50" 
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                            }`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3.5 px-4 rounded-xl text-white font-bold transition-all shadow-md ${
                            isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg shadow-blue-200'
                        }`}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Don't have an account? <span onClick={() => navigate('/register')} className="font-bold text-blue-600 hover:underline cursor-pointer">Register here</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
