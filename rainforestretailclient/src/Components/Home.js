import {Link, Outlet} from "react-router-dom";
import ProductList from "./ProductList";

const Home = ({products, handleClickToBasket}) => {



    return ( 
        <>
            <nav>
                <ul>
                    <li><Link to= "/basket">Basket</Link> </li>
                    <li><Link to= "/checkout">Checkout</Link></li>
                    <li><Link to="/">Home</Link></li>
                    
                </ul>

            
                <Outlet/>

                  
            </nav>
        </>

     );
}
 
export default Home;