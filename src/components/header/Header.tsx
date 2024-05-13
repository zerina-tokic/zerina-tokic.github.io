import Container from "../Container";
import Logo from "../Logo";
import MobileMenu from "../mobile-components/MobileMenu";
import ActiveButtons from "./ActiveButtons";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <div className="header bg-white shadow-sm">
      <Container>
        <div className="flex items-center py-6">
          <Logo />
          <NavLinks />
          <ActiveButtons />
          <MobileMenu />
        </div>
      </Container>
    </div>
  );
}

export default Header;
