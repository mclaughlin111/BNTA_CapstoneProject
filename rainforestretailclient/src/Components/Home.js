import { Link, Outlet } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
import "../Home.css";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <h1>
              <Link to="/">Home</Link>
            </h1>
          </li>

          <li>
          {/* <FaCartShopping /> */}
            <h2><Link to="/basket">Basket<span></span></Link>
            <Link to="/checkout">Checkout</Link></h2>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
