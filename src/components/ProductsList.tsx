import products from "../models/products.ts"
import Product from "./Product.tsx";
//import {useState} from "react";
const ProductsList = () => {
   // const [listOfProducts, setProducts] = useState<Product[]>([...products]);
    return (<div className="flex p-8">{products.map(product=>{
        return (<Product key={product.id} product={product}/>)
    })}</div>)
}
export default ProductsList