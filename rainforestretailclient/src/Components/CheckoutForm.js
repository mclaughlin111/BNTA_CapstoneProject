import { useState } from "react"; 
import { Link } from "react-router-dom";

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

  const handleClick = (event) => {
    createNewOrder();
    fetchProducts();
  }

  return (
    <>
      <h1>Checkout</h1>
      <form id="checkoutForm" onSubmit={handleFormSubmit}>
        <label>Customer Email Address:</label>
        <input
          id="customer-email-address"
          name="Email Address"
          type="email"
          placeholder="enter email"
          value={stateEmail}
          onChange={handleEmailChange}
        />
        <input type="submit" value="Submit"/>   
      </form>

      <Link to="/completed-order"><button onClick={handleClick}>Buy Now</button></Link>
    </>
  );
};

export default CheckoutForm;
