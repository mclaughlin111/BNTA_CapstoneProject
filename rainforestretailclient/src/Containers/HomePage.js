import Basket from "../Components/Basket";
import CheckoutForm from "../Components/CheckoutForm";
import ProductList from "../Components/ProductList";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home";
import CompletedOrder from "../Components/CompletedOrder";
import ProductListCarousel from "../Components/ProductListCarousel";


const HomePage = () => {
  const [products, setProducts] = useState([]); // state for products from backend
  const [basketItems, setBasketItems] = useState([]); // state for basket on frontend
  const [basket, setBasket] = useState({}); // state for basket on frontend
  const [loading, setLoading] = useState(true); // state for loading function
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  //FETCH Products
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    setProducts(data);
  };

  const fetchEmail = async (enteredEmail) => {
    const response = await fetch(
      `http://localhost:8080/users?email=${enteredEmail}`
    );
    const data = await response.json();
    setUser(data);
  };

  const createNewOrder = async () => {
    const response = await fetch(
      `http://localhost:8080/orders?userId=${user.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(basket),
      }
    );
    const order = await response.json();
    setOrder(order);
  };

  console.log(basket);

  const fetchFilteredProducts = async (productType) => {
    const response = await fetch(
      `http://localhost:8080/products/filtered?productType=${productType}`
    );
    const data = await response.json();
    setProducts(data);
  };

  //Function Adds User selected products to basket
  const handleClickToBasket = (product) => {
    setBasketItems((prevBasketItems) => {
      const newBasketItems = [...prevBasketItems, product];
      return newBasketItems;
    });

    // set basket for qauntity
    setBasket((prevBasket) => {
      const newBasket = { ...prevBasket };
      newBasket[product] = (newBasket[product] || 0) + 1;
      // Updated basket with product quantity
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
      fetchFilteredProducts={fetchFilteredProducts}
      products={products}
      fetchProducts={fetchProducts} />,
      children: [
        {
          path: "/basket",
          element: (
            <Basket
              products={products}
              basketItems={basketItems}
              basket={basket}
            />
          ),
        },
        {
          path: "/checkout",
          element: (
            <CheckoutForm
              fetchEmail={fetchEmail}
              createNewOrder={createNewOrder}
              fetchProducts={fetchProducts}
              basketItems={basketItems}
              basket={basket}
              setBasket={setBasket}
              setBasketItems={setBasketItems}
            />
          ),
        },
        {
          path: "/",
          element: (
            <ProductListCarousel
              products={products}
              handleClickToBasket={handleClickToBasket}
              basket={basket}
              filteredProducts={filteredProducts}
            />
          ),
        },
        {
          path: "/completed-order",
          element: <CompletedOrder order={order} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={rainforestRoutes} />
    </>
  );
};



export default HomePage;
