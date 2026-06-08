import './App.css';
import Product from './Product';
import type { ProductType } from './types/ProductType';

function App() {
    const product1: ProductType = {
        id: 1,
        title: "Apple MacBook Air",
        count: 10,
        price: 1200,
        is_active: true
    };

    const product2: ProductType = {
        id: 2,
        title: "Logitech Gaming Mouse",
        count: 0,
        price: 50,
        is_active: false
    };

    return (
        <div>
            <h1>Electronics Store</h1>
            <Product product={product1} />
            <hr />
            <Product product={product2} />
        </div>
    );
}

export default App;