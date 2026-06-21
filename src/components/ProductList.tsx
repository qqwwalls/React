import Product from "../Product";
import products from "../data/products";

const ProductList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
