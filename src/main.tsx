import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router";
import {routes} from "@/routes.tsx";
import { ProductsProvider } from "./context/ProductsProvider";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <AuthProvider>
        <ProductsProvider>
            <RouterProvider router={routes}></RouterProvider>
        </ProductsProvider>
    </AuthProvider>
);