import Basket from "../Components/Basket";
import CheckoutForm from "../Components/CheckoutForm";
import ProductList from "../Components/ProductList";
import { useState, useEffect } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Components/Home";

const HomePage = () => {
  const [products, setProducts] = useState([]); // state for products from backend
  const [basketItems, setBasketItems] = useState([]); // state for basket on frontend
  const [basket, setBasket] = useState({}); // state for basket on frontend
  const [loading, setLoading] = useState(true); // state for loading function

  //FETCH Products
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
  };

  //Function Adds User selected products to basket
  const handleClickToBasket = (product) => {
    setBasketItems((prevBasketItems) => {
      const newBasketItems = [...prevBasketItems, product];
      // console.log(newBasketItems); // Updated basketItems
      return newBasketItems;
    });

    // set basket for qauntity
    setBasket((prevBasket) => {
        const newBasket = { ...prevBasket };
        newBasket[product] = (newBasket[product] || 0) + 1;
        console.log(newBasket); // Updated basket with product quantity
        return newBasket;
      });

  };

  

  useEffect(() => {
    fetchProducts().finally(() => setLoading(false)); // load function on fetchProducts
  }, []);

  const rainforestRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home 
        products={products}
        handleClickToBasket={handleClickToBasket}/>,
        children: [
            {
                path: "/basket",
                element:  <Basket 
                products={products} 
                basketItems={basketItems} 
                basket={basket}/>
               
      
            },
            {
                path: "/checkout",
                element: <CheckoutForm/>
            },
            {
              path:"/",
              element: <ProductList
              products={products}
              handleClickToBasket={handleClickToBasket}
              />  
            }
            
        ]
    }
]);

  return (
    <>
      <RouterProvider router = {rainforestRoutes} />

    </>
  );
};

export default HomePage;
