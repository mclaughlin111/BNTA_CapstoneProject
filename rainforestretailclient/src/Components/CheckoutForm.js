const CheckoutForm = () => {
  //Function to handle checkout
  // const handleCheckOut = () => {
  //     return null;
  // }

  return (
    <>
      <h1>Checkout</h1>
      <form id="checkoutForm">
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
        />

        {/* <label id>Customer Home Address:</label>
        <input
          id="customer-home-address"
          name="Home Address"
          type="text"
          placeholder="enter home address"
        /> */}
        <input type="submit" value="Buy Now"/>   
      </form>
    </>
  );
};

export default CheckoutForm;
