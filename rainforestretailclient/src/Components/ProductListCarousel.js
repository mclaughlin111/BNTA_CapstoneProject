import Product from "./Product";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "../ProductList.css";

const ProductListCarousel = ({ products, handleClickToBasket, basket }) => {
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

  console.log(productData);

  return (
    <>
    <div className="productListCarousel">
    <Carousel className="carousel">
      {productData.map((product, i) => (
        <div key={i}>{product}</div>
      ))}
    </Carousel>
  </div>
  <div className="productList">{productData}</div>;
  </>
);
};

export default ProductListCarousel;
