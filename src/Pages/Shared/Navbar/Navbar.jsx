import MobileNav from "./MobileNav";
import PCnav from "./PCnav";
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <PCnav></PCnav>
            <MobileNav></MobileNav>
        </div>
    );
};

export default Navbar;