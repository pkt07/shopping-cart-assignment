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
import { useSelector, useDispatch } from "react-redux";
import { handleAddToCart } from "../../store/cart/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentProductCategory = useSelector(
    (store) => store.product.currentProductCategory
  );
  const dispatch = useDispatch();
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
  const showToast = () => {
    toast.success("Item added to the cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleBuyProduct = async (product) => {
    try {
      const obj = {
        id: product.id,
        name: product.name,
        imageURL: product.imageURL,
        price: product.price,
        quantity: 1,
        stock: product.stock,
      };
      const response = await apiCall(appUtils.api.addToCart, "POST", {
        id: product.id,
      });
      debugger;
      if (response.data.response === "Success") {
        dispatch(handleAddToCart(obj));
        showToast();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductWrapper>
      <ToastContainer />
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
                      <ProductBuyButton onClick={() => handleBuyProduct(item)}>
                        Buy Now
                      </ProductBuyButton>
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
                    <ProductBuyButton onClick={() => handleBuyProduct(item)}>
                      Buy Now
                    </ProductBuyButton>
                  </PriceTag>
                </ProductContent>
              </Container>
            ))}
      </ProductCard>
    </ProductWrapper>
  );
};
export default ProductList;
