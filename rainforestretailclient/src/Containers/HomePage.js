import Basket from "../Components/Basket";
import ProductList from "../Components/ProductList";
import { useState, useEffect } from "react";
const HomePage = () => {
  const [products, setProducts] = useState([]); // state for products from backend
  const [basketItems, setBasketItems] = useState([]); // state for basket on frontend
  const [basket, setBasket] = useState({}); // state for basket on frontend
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
  };

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

  return (
    <>
      <Basket products={products} basketItems={basketItems} basket={basket}/>
      {loading ? (
        <p>Loading Products...</p> // shows as API fetch request is carried out
      ) : (
        <ProductList
          products={products}
          handleClickToBasket={handleClickToBasket}
        />
      )}
    </>
  );
};

export default HomePage;
