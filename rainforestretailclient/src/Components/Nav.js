import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import { useState } from "react";



const Nav = ({ fetchFilteredProducts}) => {
    

    const handleChange = (event) => {
        const value = event.target.value;
        fetchFilteredProducts(value);
        setCategoryState(value);
      };  
  const [categoryState, setCategoryState] = useState(null);

  return (
    <>
      <Navbar isBordered="true" >
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="">🌳Rainforest Retail</p>
          </Link>
        </NavbarBrand>

        <NavbarContent className="sm:flex gap-4" justify="end">
          <label htmlFor="category">Search by Category</label>

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

          <NavbarItem>
            {/* <Link to= "/basket">Basket</Link>  */}
            <Link color="foreground" href="/basket">
              Basket
            </Link>
          </NavbarItem>

          <NavbarItem isActive>
            {/* <Link to= "/checkout">Checkout</Link> */}
            <Link href="/checkout" aria-current="page">
              Checkout
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent justify="end">
      
        <NavbarItem>
          <Button as={Link} color="primary" href="" variant="flat">
            Basket
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      </Navbar>
      <Outlet />
    </>
  );
};

export default Nav;
