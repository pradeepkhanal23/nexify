import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="sticky top-0 z-10 flex items-center flex-col sm:flex-row justify-between">
        <div className="w-1/3">
          <Logo />
        </div>
        <div className="w-2/3">
          <NavSearch />
        </div>
        <div className="w-1/3 flex items-center justify-center gap-3">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
