import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="sticky top-0 z-10 flex gap-x-3  items-center justify-between">
        <div className="w-1/3">
          <Logo />
        </div>
        <div className="w-2/3">
          <Suspense>
            {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
            {/* we need to wrap this navsearch in the suspense  because if we dont, next js opts the entire page into client-side rendering. This could cause our page to be blank until the client-side JavaScript has loaded.*/}
            <NavSearch />
          </Suspense>
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
