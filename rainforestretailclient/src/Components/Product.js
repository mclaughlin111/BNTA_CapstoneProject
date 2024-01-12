const Product = ({product}) => {
    const handleClickToBasket = () => {
        handleClickToBasket(product.id)
    }
    return ( 
        <article>
        <h4>{product.name}</h4>
        <h4>Price : <span>£</span>{product.price}</h4>
        <h4>Description : {product.productInfo}</h4>
        <h4>Category : {product.productType}</h4>
        <button onClick={handleClickToBasket}>Add to Basket</button>
        <hr/>


        </article>
     );
}
 
export default Product;