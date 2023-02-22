import { useState, useEffect } from "react";
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
import Modal from "../Modal";
import { useSelector } from "react-redux";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [totalCartQuantity, setCartQuantity] = useState(null);
  const cartList = useSelector((store) => store.cart.cartList);

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const sum = cartList.reduce((acc, obj) => acc + obj.quantity, 0);
    setCartQuantity(sum);
  }, [cartList]);

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
          <CartModalButton
            aria-label={`Cart Modal Button`}
            onClick={() => setShowModal(true)}
          >
            <FaShoppingCart
              aria-hidden="true"
              style={{ fontSize: "1rem", color: "#ab4747" }}
            />
            {totalCartQuantity} items
          </CartModalButton>
          {showModal && <Modal onClose={handleModalClose} />}
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
