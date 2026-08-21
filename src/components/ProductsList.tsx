import Product from "./Product";
import { useLoaderData } from "react-router";
import type { ProductType } from "../types/ProductType";

const ProductsList = () => {
    const products = useLoaderData() as ProductType[];

    if (!products || products.length === 0) {
        return (
            <div className="p-8 text-center text-gray-500">
                Список товарів порожній
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-6 p-8 justify-center">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
