import { useState } from "react"; 
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import "../CheckoutForm.css"


const CheckoutForm = ({fetchEmail, createNewOrder, fetchProducts}) => {
 
  const[stateEmail, setStateEmail] = useState("")

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

  const handleClick = (event) => {
    createNewOrder();
    fetchProducts();
    navigate("/completed-order")
  }

  return (
    <section id ="container">
      <h1 id = "checkout-title">Checkout</h1>
      <form id="checkoutForm" onSubmit={handleFormSubmit}>
        <label id = "customer-email-address-title">Customer Email Address:</label>
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

<button onClick={handleClick} id ="buy-now-button">Buy Now</button>
    </section>
  );
};

export default CheckoutForm;
