import { Navigate, useNavigate } from "react-router-dom";

const Basket = ({ basketItems, products, basket}) => {

  const productsWithQuantity = (basket) => {
    return (  
        
    <ul>
        
        {Object.entries(basket).map(([idItem, quant], id) => (
          <li key={id}>
            {products[idItem-1].name} : {quant}
          </li>
        ))}
      </ul>
      )
  
  };

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate("/checkout");
  }
 
  return (
    <>
     
      <h2>
        Basket<span className="basketTotal">{basketItems.length}</span>
      </h2>
      {productsWithQuantity(basket)}
      <button onClick={handleClick}>Go To Checkout</button>
    </>
  );
};

export default Basket;
