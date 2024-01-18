import Product from "./Product";
import "../ProductList.css";

const ProductList = ({ products, handleClickToBasket, basket }) => {
  const productData = products.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        handleClickToBasket={handleClickToBasket}
        basket={basket}
      />
    );
  });

  return <div className="productList">{productData}</div>;
};

export default ProductList;
