import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import { ProductsProvider } from "./context/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductsProvider>
        <App />
    </ProductsProvider>
);