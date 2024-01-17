import { useState, useEffect } from "react";

const Product = ({ product, handleClickToBasket, basket }) => {
  const handleClickOnBasket = () => {
    handleClickToBasket(product.id);
  };

  const [inStock, setInStock] = useState(true);

  console.log(basket);

  // With basket
  useEffect(() => {
    if (basket[product.id] === product.stock || product.stock===0) {
      setInStock(false);
    } else {
      setInStock(true);
    }
  }, [basket[product.id]]);


  return (
    <article>
      <h4>{product.name}</h4>
      <h4>
        Price : <span>£</span>
        {product.price}
      </h4>
      <h4>Description : {product.productInfo}</h4>
      <h4>Category : {product.productType}</h4>
      {/* when in stock true render button, if inStock is falsey  */}
      {inStock ? <button onClick={handleClickOnBasket}>Add to Basket</button> : <p> OUT OF STOCK!</p>}

    </article>
  );
};

export default Product;
