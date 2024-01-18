import { useState } from "react";
import Product from "./Product";
const ProductList = ({products, handleClickToBasket, basket,  fetchFilteredProducts}) => {

   const productData=  products.map((product) => {
        return < Product key={product.id} product={product} handleClickToBasket={handleClickToBasket} basket={basket}/>

    })

    const [categoryState , setCategoryState]=useState(null);

    const handleChange = (event)=>{
        const value = event.target.value
        fetchFilteredProducts(value);
        setCategoryState(value)
        
    }
   
    return (
        <div className="productList">
         <h2 id="title">List Of Products</h2>
         <label htmlFor="category" id="categoryText">Search by category:</label>

            <select
            id="category"
            name="category"
            defaultValue={"Choose a category"}
            value={categoryState}
            onChange={handleChange}
            >
               
                <option disabled value ="Choose a category">Choose a category</option>
                <option value = "HOMEGOODS">HOMEGOODS</option>
                <option value = "ENTERTAINMENT">ENTERTAINMENT</option>
                <option value ="ELECTRONICS">ELECTRONICS</option>
                <option value ="BEAUTY">BEAUTY</option>
                <option value ="HOBBIES">HOBBIES</option>
                <option value ="SUSTAINABILITY">SUSTAINABILITY</option>
               
            </select >
        
         {productData}
         </div>

         );
}
 
export default ProductList;