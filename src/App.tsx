import { useState } from 'react';
import './App.css'
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import initialProducts from "./data/products";
import type { ProductType } from './models/product';

function App() {
    const [products, setProducts] = useState<ProductType[]>(initialProducts);

    const handleCreateProduct = (newProduct: ProductType) => {
        setProducts(prev => [newProduct, ...prev]);
    };

    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8">Управління товарами</h1>
            
            <CreateProduct onCreateProduct={handleCreateProduct} />
            
            <hr className="my-10 border-gray-200 max-w-7xl mx-auto" />
            
            <ProductList products={products} />
        </div>
    );
}

export default App;