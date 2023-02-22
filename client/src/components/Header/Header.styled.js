import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0px 5px 11px #ccc;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  @media (min-width: 1200px) {
    width: 85%;
    margin: auto;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const HeaderBrand = styled.div`
  img {
    width: 120px;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  a {
    padding-bottom: 0.1rem;
    cursor: pointer;
    font-weight: 500;
    color: #555151;
    text-decoration: none;
    transition: all 100ms ease-in-out;
  }
  a.active {
    border-bottom: 2px solid rgb(171, 71, 71);
    font-weight: 600;
    color: #303030;
    transform: scale(1.03);
  }

  a:hover {
    font-weight: 600;
    color: #303030;
    transform: scale(1.1);
  }
  // no content for smaller screen
  @media (max-width: 380px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
`;

export const SideContainer = styled.nav`
  display: flex;
  justify-content: end;
  gap: 0.5rem;

  a {
    padding-bottom: 0.1rem;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: 500;
    color: #555151;
    text-decoration: none;
  }
  a.active {
    border-bottom: 2px solid #ab4747;
    font-weight: 600;
    color: #303030;
  }

  a:hover {
    font-weight: 600;
    color: #303030;
  }
`;

export const CartModalButton = styled.button`
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0.7rem 1.3rem;
  align-items: center;
  background-color: #e9e9e9;
`;
