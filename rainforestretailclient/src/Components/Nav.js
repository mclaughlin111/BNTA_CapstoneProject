import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { Outlet} from "react-router-dom";
const Nav = () => {
    return (<>
    <Navbar>
      <NavbarBrand>
      <Link color="foreground" href="/">
        <p className="">🌳Rainforest Retail</p>
        </Link>
      </NavbarBrand>
      
      <NavbarContent className="sm:flex gap-4" justify="end">
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
    <Outlet/>
    </>  );
}
 
export default Nav;