import { Link, Outlet } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "../Home.css";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <a>
              <Link to="/">
                <span className="title">RainforestRetail</span>
                </Link>
                </a>
                <span className="titleIcon">🏕️</span>
              
           
          </li>

          <li>
            <Link to="/basket">
              <FaShoppingBasket className="basketIcon" />
            </Link>
            <a href="/checkout" className="checkout">
              <Link to="/checkout">Checkout</Link>
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
