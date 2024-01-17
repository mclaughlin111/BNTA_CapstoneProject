import { useState, useEffect } from "react";

const Product = ({ product, handleClickToBasket, basket }) => {
  const handleClickOnBasket = () => {
    console.log(basket);
    handleClickToBasket(product.id);
  };

  const [inStock, setInStock] = useState(true);


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
      <img className="productImage" alt="product image" src={product.productImg}></img>
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
