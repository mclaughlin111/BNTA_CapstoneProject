import { Navigate, useNavigate } from "react-router-dom";
import '../Basket.css'

const Basket = ({ basketItems, products, basket}) => {

  const productsWithQuantity = (basket) => {
    return (  
        
      <div>
          {Object.entries(basket).map(([idItem, quant], id) => (
            <div className="eachItem" key={id}>
              <img className="basketImage" alt="product image" src={products[idItem-1].productImg}></img>
              <span>{products[idItem-1].name}</span> 
              <span>{quant}</span> 
            </div>
          ))}
      </div>

  /* <ul>
  {Object.entries(basket).map(([idItem, quant], id) => (
    <li className="eachItem" key={id}>
      <img className="basketImage" alt="product image" src={products[idItem-1].productImg}></img> : {products[idItem-1].name} : {quant} 
    </li>
  ))}
  </ul> */

      
    )
  
  };

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate("/checkout");
  }
 
  return (
    
    <div className="basketContainer">
      <h2>
        Basket
        <span className="basketTotal">{basketItems.length}</span>
      </h2>
      <div className="basketItems">
        {productsWithQuantity(basket)}
      </div>  
      <button className="checkoutButton" onClick={handleClick}>
        Go To Checkout
      </button>
    </div>  
    
  );
};

export default Basket;
