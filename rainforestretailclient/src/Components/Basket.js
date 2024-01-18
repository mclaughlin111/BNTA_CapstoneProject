import { Navigate, useNavigate } from "react-router-dom";
import '../Basket.css'

const Basket = ({ basketItems, products, basket}) => {

  const productsWithQuantity = (basket) => {
    return (  
        
      <div>
          {Object.entries(basket).map(([idItem, quant], id) => (
            <div className="eachItem" key={id}>
              <img className="basketImage" alt="product image" src={products[idItem-1].productImg}></img>
              <span className="productName">{products[idItem-1].name}</span> 
              <span className="quantity">{quant}</span> 
            </div>
          ))}
      </div>
      
    )
  };

  const basketSubTotal = (basket) => {
    let runningTotal = 0
    Object.entries(basket).map(([idItem, quant]) =>(
      runningTotal += (products[idItem-1].price * quant)
    ))
    return runningTotal;
  }

  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate("/checkout");
  }
 
  return (
    
    <div className="basketContainer">
      <h2 className="basketHeader">
        Basket
      </h2>
      <div className="basketItems">
        {productsWithQuantity(basket)}
      </div>
      <div className="basketTotal"> 
        <div className="totalItems"> 
          <p>{basketItems.length} Items</p>
        </div>
        <div className="subtotal">  
          <p>Subtotal: £{basketSubTotal(basket)}</p>
        </div>
      </div>  
      <button className="checkoutButton" onClick={handleClick}>
        Go To Checkout
      </button>
      
    </div>  
    
  );
};

export default Basket;
