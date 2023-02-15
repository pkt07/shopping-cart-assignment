import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import BRANDLOGO from "../../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import {
  SideContainer,
  CartModalButton,
  HeaderBrand,
  Container,
  Wrapper,
  LeftSection,
  HeaderMenu,
  RightSection,
} from "./Header.styled";

const Header = () => {
  const [totalCartQuantity, setCartQuantity] = useState(null);
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <HeaderBrand>
            <Link to="/">
              <img src={BRANDLOGO} alt="Sasta Bajar Brand Logo" />
            </Link>
          </HeaderBrand>
          <HeaderMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </HeaderMenu>
        </LeftSection>
        <RightSection>
          <SideContainer>
            <NavLink to="/login">SignIn</NavLink>
            <NavLink to="/signup">Register</NavLink>
          </SideContainer>
          <CartModalButton aria-label={`Cart Modal Button`}>
            <FaShoppingCart
              aria-hidden="true"
              style={{ fontSize: "1rem", color: "#ab4747" }}
            />
            {totalCartQuantity} items
          </CartModalButton>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
