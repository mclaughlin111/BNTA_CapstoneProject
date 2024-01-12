import ProductList from "../Components/ProductList";
import { useState, useEffect } from "react";
const HomePage = () => {

    const [products , setProducts]= useState([])

const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
    console.log(data)
}

useEffect(()=> {
    fetchProducts();
},[])
    return ( 
        <>
        <ProductList products={products}/>
        
        </>
     );
}
 
export default HomePage;