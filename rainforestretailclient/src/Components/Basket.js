const Basket = ({ basketItems, products, basket }) => {

    // Needless Function for returning individualised <BasketItem> components under basket
//   const basketItemsAdded = basketItems.map((item) => {
//     return (
//       <BasketItem
//         key={item}
//         item={item}
//         products={products}
    
//       />
//     );
//   });

  const productsWithQuantity = (basket) => {
    return (  
        //function maps over Javascript Object List, and returns products ID & Quantity from handleClickToBasket function
        // idItem: item ID, val: quantity
    <ul>
        
        {Object.entries(basket).map(([idItem, val], id) => (
          <li key={id}>
            {products[idItem].name} : {val}
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
