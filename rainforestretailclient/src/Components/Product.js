import { useState, useEffect } from "react";
import "../Product.css"


const Product = ({ product, handleClickToBasket, basket }) => {
  const handleClickOnBasket = () => {
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
    <article className="Product">
      <img className="productImage" alt="product" src={product.productImg}></img>
      <h4 id="productName">{product.name}</h4>
      <h4 id="price">
        Price : <span>£</span>
        {product.price}
      </h4>
      <h4 id="description">Description : {product.productInfo}</h4>
      <h4 id="category">Category : {product.productType}</h4>
      {/* when in stock true render button, if inStock is falsey  */}
      {inStock ? <button onClick={handleClickOnBasket}>Add to Basket</button> : <p id="outOfStock"> OUT OF STOCK!</p>}
    </article>
  );
};

export default Product;
