import { createBrowserRouter } from "react-router";
import Layout from "@/components/Layout";
import CategoriesList from "@/components/categories/CategoriesList";
import ProductsList from "@/components/ProductsList";
import Contacts from "@/components/pages/Contacts";
import Search from "@/components/pages/Search";
import CategoryDetail from "@/components/categories/CategoryDetail";
import ErrorPage from "@/components/pages/ErrorPage";
import LoginPage from "@/components/pages/LoginPage";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CategoriesList />
            },
            {
                path: "categories",
                element: <CategoriesList />
            },
            {
                path: "categories/:slug",
                element: <CategoryDetail />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                // Захищений роут
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "products",
                        element: <ProductsList />
                    }
                ]
            },
            {
                path: "contacts",
                element: <Contacts />
            },
            {
                path: "search",
                element: <Search />
            }
        ]
    }
]);
