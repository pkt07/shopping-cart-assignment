import styled from "styled-components";
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 85%;
    margin: auto;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 4;
`;

export const Container = styled.li`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-self: normal;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border-bottom: 1px dashed black;

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
  @media (min-width: 480px) {
    width: calc(50% - 2rem);
  }
  @media (min-width: 1040px) {
    width: calc(33% - 2rem);
  }
  @media (min-width: 1520px) {
    width: calc(25% - 2rem);
  }
`;
export const Heading = styled.h4`
  height: 3rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const ProductContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const Description = styled.p`
  background-color: #e5e5e5;
  flex: 1 1 auto;
  line-height: 1.5;
  padding: 0.5rem;
  text-align: left;
`;

export const ProductBuyButton = styled.button`
  margin-bottom: 0.5rem;
  padding: 0.8rem 1.2rem;
  color: white;
  border: none;
  background-color: #ab4747;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  :hover {
    transform: scale(1.02);
  }
`;
export const PriceTag = styled.div`
  display: flex;
  justify-content: space-between;
`;
