import './App.css'
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

function App() {
    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-8">Управління товарами</h1>
            
            <AddProduct />
            
            <hr className="my-10 border-gray-200 max-w-7xl mx-auto" />
            
            <ProductList />
        </div>
    );
}

export default App;