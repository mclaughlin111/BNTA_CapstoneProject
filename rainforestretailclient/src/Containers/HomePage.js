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
    // setBasketItems((basketItems) => [...basketItems, product])
    setBasketItems((prevBasketItems) => {
        const newBasketItems = [...prevBasketItems, product];
        console.log(newBasketItems); // Updated basketItems
        return newBasketItems;
    });


}




useEffect(()=> {
    fetchProducts();
},[])


    return ( 
        <>
         <Basket basketItems={basketItems}/>
        <ProductList products={products} handleClickToBasket={handleClickToBasket}/>
       
        </>
     );
}
 
export default HomePage;