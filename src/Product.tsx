import type { ProductType } from './types/ProductType';
function Product(prop: { product: ProductType }) {
    return (
        <div>
            <h3>{prop.product.title} (ID: {prop.product.id})</h3>
            <p>Price: {prop.product.price}</p>
            <p>Count: {prop.product.count}</p>
            <p>Status: <b>{prop.product.is_active ? "Active" : "Non Active"}</b></p>
        </div>
    );
}

export default Product;