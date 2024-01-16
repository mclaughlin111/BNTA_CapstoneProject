const Basket = ({ basketItems, products, basket}) => {


  const productsWithQuantity = (basket) => {
    return (  
        //function maps over hashmap, and returns products ID & Quantity from handleClickToBasket function
        // idItem: item ID, quant: quantity
    <ul>
        
        {Object.entries(basket).map(([idItem, quant], id) => (
          <li key={id}>
            {products[idItem-1].name} : {quant}
          </li>
        ))}
      </ul>
      )
  
  };
 
  return (
    <>
     
      <h2>
        Basket<span className="basketTotal">{basketItems.length}</span>
      </h2>
      {productsWithQuantity(basket)}
      <button>Go To Checkout</button>
    </>
  );
};

export default Basket;
