import Product from "./Product";
const ProductList = ({products, handleClickToBasket}) => {

   const productData=  products.map((product) => {
        return < Product key={product.id} product={product} handleClickToBasket={handleClickToBasket}/>

    })

    return (
        <div>
         <h2>List Of Products</h2>
         {productData}
         </div>

         );
}
 
export default ProductList;