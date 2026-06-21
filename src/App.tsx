import './App.css'
import { type ChangeEvent, useState } from 'react'
import type { ProductType } from "./types/ProductType.ts";
import Counter from "./components/Counter/Counter";
import Button from "./ui/Button";
import UserInputs from "./components/UserInputs/UserInputs";

function App() {
    const [product, setProduct] = useState<ProductType>({
        id: 1,
        title: "Bread",
        price: 35,
        count: 1,
        is_active: true
    });

    function changeTitle(e: ChangeEvent<HTMLInputElement>) {
        setProduct({ ...product, title: e.target.value });
    }

    function changePrice(e: ChangeEvent<HTMLInputElement>) {
        setProduct({ ...product, price: +e.target.value });
    }

    function changeCount(e: ChangeEvent<HTMLInputElement>) {
        setProduct({ ...product, count: +e.target.value });
    }

    function changeActive(e: ChangeEvent<HTMLInputElement>) {
        setProduct({ ...product, is_active: e.target.checked });
    }

    return (
        <>
            <h3>Product</h3>
            <p>
                Title: {product.title} |
                Price: {product.price} |
                Count: {product.count} |
                Status: {product.is_active ? "Active" : "Non active"}
            </p>
            <hr />

            <div>
                Title: <input type="text" value={product.title} onChange={changeTitle} />
            </div>

            <div>
                Price: <input type="number" value={product.price} onChange={changePrice} />
            </div>

            <div>
                Count: <input type="number" value={product.count} onChange={changeCount} />
            </div>

            <div>
                Active: <input type="checkbox" checked={product.is_active} onChange={changeActive} />
            </div>

            <hr />
            <Counter />

            <hr />
            <div style={{ padding: "20px", textAlign: "center" }}>
                <Button />
            </div>

            <hr />
            <UserInputs />
        </>
    );
}

export default App;