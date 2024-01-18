import { Link, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
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
              <FaCartShopping className="basketIcon" />
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
