import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import "../CheckoutForm.css"


const CheckoutForm = ({fetchEmail, createNewOrder, fetchProducts, basketItems, basket}) => {
 
  const[stateEmail, setStateEmail] = useState("")
  const[itemsInBasket, setItemsInBasket]=useState(false)

  const handleEmailChange = (event) => {
    let value = event.target.value;
    setStateEmail(value);
    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchEmail(stateEmail);
    setStateEmail("");
  }

  const navigate = useNavigate();
  console.log(basket.length)


  useEffect(() => {
    if (basketItems.length > 0) {
      setItemsInBasket(true);
    } else {
      setItemsInBasket(false);
    }
  }, [basketItems.length]);
  
  const handleClick = (event) => {
    createNewOrder();
    fetchProducts();
    navigate("/completed-order");
  };
  
return (
  <section id="container">
    {itemsInBasket ? (
      <>
        <h1 id="checkout-title">Checkout</h1>
        <form id="checkoutForm" onSubmit={handleFormSubmit}>
          <label id="customer-email-address-title">Customer Email Address:</label>
          <input
            id="customer-email-address"
            name="Email Address"
            type="email"
            placeholder="enter email"
            value={stateEmail}
            onChange={handleEmailChange}
          />
          <input type="submit" value="Submit" id="submit-button"/>
        </form>
        <button onClick={handleClick} id="buy-now-button">Buy Now</button>
      </>
    ) : (
      <p>Your basket is empty. You will need to add products to buy</p>
    )}
  </section>
);
};

export default CheckoutForm;
