import Basket from "../Components/Basket";
import ProductList from "../Components/ProductList";
import { useState, useEffect } from "react";
const HomePage = () => {

    const [products , setProducts]= useState([])
    const [basketItems , setBasketItems]= useState([])
   

const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
}

const handleClickToBasket = (product) => {
    // setBasketItems((list) => {
    //     list.filter((basketCheck) => basketCheck !== item)
    // )
    setBasketItems((basketItems) => [...basketItems, product])
    console.log(product)
}


useEffect(()=> {
    fetchProducts();
    handleClickToBasket();
},[])


    return ( 
        <>
        <ProductList products={products} handleClickToBasket={handleClickToBasket}/>
        <Basket/>
        </>
     );
}
 
export default HomePage;