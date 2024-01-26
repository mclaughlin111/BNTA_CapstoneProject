import Product from "./Product";
import Carousel from "react-material-ui-carousel";

import "../ProductList.css";

const ProductListCarousel = ({ products, handleClickToBasket, basket }) => {

// Group products into sets of three
const groupedProducts = [];
for (let i = 0; i < products.length; i += 3) {
  groupedProducts.push(products.slice(i, i + 3));
}

const carouselItems = groupedProducts.map((productGroup, i) => (
  <div key={i} className="carouselItem">
    {productGroup.map((product) => (
      <Product
        key={product.id}
        product={product}
        handleClickToBasket={handleClickToBasket}
        basket={basket}
      />
    ))}
  </div>
));

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


  return (
    <>
    <div className="productListCarousel">
    <Carousel
    indicators={true}
    navButtonsAlwaysVisible={true}
    animation="fade"
    timeout={1000}
    >
        {carouselItems}
       
    </Carousel>
  </div>
  <div className="productList">{productData}</div>;
  </>
);
};

export default ProductListCarousel;


