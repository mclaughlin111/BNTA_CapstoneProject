import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import "../Home.css";

const Home = ({ fetchFilteredProducts }) => {
  const [categoryState, setCategoryState] = useState(null);
  const [scroll, setScroll] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    fetchFilteredProducts(value);
    setCategoryState(value);
  };

  // function to amend styling on page scroll 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 70; // Adjust this value as needed

      // Check if the user has scrolled below the defined distance
      setScroll(scrollY > scrollThreshold);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <>
      <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
        <ul className="navbarList">
          <li>
            <a>
              <Link to="/">
                <span className="title">RainforestRetail</span>
              </Link>
            </a>
            {/* <span className="titleIcon">🏕️</span> */}
          </li>

          <li>
          {/* filter by category */}
          <label htmlFor="category" id="categoryText">
            Search by category:
          </label>

          <select
            id="category"
            name="category"
            defaultValue={"Choose a category"}
            value={categoryState}
            onChange={handleChange}
          >
            <option disabled value="Choose a category">
              Choose a category
            </option>
            <option value="HOMEGOODS">HOMEGOODS</option>
            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
            <option value="ELECTRONICS">ELECTRONICS</option>
            <option value="BEAUTY">BEAUTY</option>
            <option value="HOBBIES">HOBBIES</option>
            <option value="SUSTAINABILITY">SUSTAINABILITY</option>
          </select>
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
