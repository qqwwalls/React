import { createBrowserRouter } from "react-router";
import React, { Suspense } from "react";
import Layout from "@/components/Layout";
import CategoriesList from "@/components/categories/CategoriesList";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/pages/Search";
import CategoryDetail from "@/components/categories/CategoryDetail";
import ErrorPage from "@/components/pages/ErrorPage";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import CheckoutPage from "@/components/pages/CheckoutPage";
import ReviewPage from "@/components/pages/ReviewPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { customFetch } from "@/api/customFetch";

const Contacts = React.lazy(() => import("@/components/pages/Contacts"));

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CategoriesList />,
                loader: async () => {
                    const response = await customFetch('/category');
                    if (!response.ok) throw new Response("Failed to load categories", { status: response.status });
                    return await response.json();
                }
            },
            {
                path: "categories",
                element: <CategoriesList />,
                loader: async () => {
                    const response = await customFetch('/category');
                    if (!response.ok) throw new Response("Failed to load categories", { status: response.status });
                    return await response.json();
                }
            },
            {
                path: "categories/:id",
                element: <CategoryDetail />,
                loader: async ({ params }) => {
                    const response = await customFetch(`/category/${params.id}`);
                    if (!response.ok) throw new Response("Failed to load category", { status: response.status });
                    return await response.json();
                }
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "checkout",
                element: <CheckoutPage />
            },
            {
                path: "review",
                element: <ReviewPage />
            },
            {
                // Захищений роут
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "products",
                        element: <ProductsList />,
                        loader: async () => {
                            const response = await customFetch('/product');
                            if (!response.ok) {
                                throw new Response("Failed to load products", { status: response.status });
                            }
                            return await response.json();
                        }
                    }
                ]
            },
            {
                path: "contacts",
                element: (
                    <Suspense fallback={<div className="p-8 text-center font-bold text-gray-500">Loading contacts...</div>}>
                        <Contacts />
                    </Suspense>
                )
            },
            {
                path: "search",
                element: <Search />
            }
        ]
    }
]);
