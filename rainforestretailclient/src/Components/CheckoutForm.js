import { useState } from "react"; 
import { Link } from "react-router-dom";

const CheckoutForm = ({fetchEmail, createNewOrder}) => {
  //Function to handle checkout
  // const handleCheckOut = () => {
  //     return null;
  // }

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
  }


  
  return (
    <>
      <h1>Checkout</h1>
      <form id="checkoutForm" onSubmit={handleFormSubmit}>
        {/* <label htmlFor="customer-name">Customer Name:</label>
        <input
          id="customer-name"
          name="Name"
          type="text"
          placeholder="enter name"
        /> */}

        <label id>Customer Email Address:</label>
        <input
          id="customer-email-address"
          name="Email Address"
          type="email"
          placeholder="enter email"
          value={stateEmail}
          onChange={handleEmailChange}
        />

        {/* <label id>Customer Home Address:</label>
        <input
          id="customer-home-address"
          name="Home Address"
          type="text"
          placeholder="enter home address"
        /> */}
        <input type="submit" value="Submit"/>   
      </form>

      <Link to="/completed-order"><button onClick={handleClick}>Buy Now</button></Link>
    </>
  );
};

export default CheckoutForm;
