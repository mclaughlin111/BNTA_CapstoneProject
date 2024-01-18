import Product from "./Product";
import Carousel from "react-material-ui-carousel";

import "../ProductList.css";

const ProductListCarousel = ({ products, handleClickToBasket, basket }) => {

// Group products into sets of three
const groupedProducts = [];
for (let i = 0; i < products.length; i += 3) {
  groupedProducts.push(products.slice(i, i + 3));
}

const carouselItemsGrouped = groupedProducts.map((productGroup, i) => (
  <div key={i} className="carousel-item">
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

  console.log(productData);

  return (
    <>
    <div className="productListCarousel">
    <Carousel className="carousel">
      {/* {productData.map((product, i) => (
        <div key={i}>{carouselItemsGrouped}</div>
      ))} */}
      <div className="carouselItem"></div>
        {carouselItemsGrouped}
    </Carousel>
  </div>
  <div className="productList">{productData}</div>;
  </>
);
};

export default ProductListCarousel;
