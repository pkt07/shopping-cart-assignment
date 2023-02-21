import React, { useEffect, useState } from "react";
import apiCall from "../../services/index";
import appUtils from "../../services/appUtils";
import {
  ProductBuyButton,
  ProductContent,
  Description,
  Heading,
  Image,
  Container,
  ProductCard,
  PriceTag,
  ProductWrapper,
} from "./Product.styled";
import CategorySidebar from "../../components/CategorySidebar";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentProductCategory = useSelector(
    (store) => store.product.currentProductCategory
  );
  useEffect(() => {
    const fetchProductsandCategories = async () => {
      setLoading(true);
      try {
        const [product, category] = await Promise.all([
          apiCall(appUtils.api.getProducts),
          apiCall(appUtils.api.getCategories),
        ]);
        if (!product || !category) {
          throw new Error("No response from server");
        }
        setProductList(product.data);
        const enabledCategories = category.data
          ?.filter((data) => data.enabled)
          .sort((a, b) => a.order - b.order);
        setCategories(enabledCategories);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };

    fetchProductsandCategories();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!isLoading && !error && productList?.length === 0) {
    return <h2>No records available</h2>;
  }
  return (
    <ProductWrapper>
      <CategorySidebar categories={categories} />
      <ProductCard>
        {currentProductCategory.length > 0
          ? productList
              ?.filter((item) => item.category === currentProductCategory)
              .map((item, ind) => (
                <Container key={ind}>
                  <Heading>{item.name}</Heading>
                  <Image src={item.imageURL} alt={item.name} />
                  <ProductContent>
                    <Description>{item.description}</Description>
                    <PriceTag>
                      <p>MRP Rs {item.price}</p>
                      <ProductBuyButton>Buy Now</ProductBuyButton>
                    </PriceTag>
                  </ProductContent>
                </Container>
              ))
          : productList?.map((item, ind) => (
              <Container key={ind}>
                <Heading>{item.name}</Heading>
                <Image src={item.imageURL} alt={item.name} />
                <ProductContent>
                  <Description>{item.description}</Description>
                  <PriceTag>
                    <p>MRP Rs {item.price}</p>
                    <ProductBuyButton>Buy Now</ProductBuyButton>
                  </PriceTag>
                </ProductContent>
              </Container>
            ))}
      </ProductCard>
    </ProductWrapper>
  );
};
export default ProductList;
