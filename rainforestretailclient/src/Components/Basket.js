const Basket = ({ basketItems, products, basket }) => {


  const productsWithQuantity = (basket) => {
    return (  
        //function maps over Javascript Object List, and returns products ID & Quantity from handleClickToBasket function
        // idItem: item ID, val: quantity
    <ul>
        
        {Object.entries(basket).map(([idItem, val], id) => (
          <li key={id}>
            {products[idItem-1].name} : {val}
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
    </>
  );
};

export default Basket;
