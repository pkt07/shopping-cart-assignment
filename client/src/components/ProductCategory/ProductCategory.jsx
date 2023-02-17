import { useEffect, useState } from "react";
import apiCall from "../../services/index";
import appUtils from "../../services/appUtils";
import { ProductCategoryContainer } from "./ProductCategory.styled";
import ProductCategoryItem from "../ProductCategoryItem";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const response = await apiCall(appUtils.api.getCategories);
        if (!response) {
          throw new Error("No response from server");
        }
        const filteredResponse = response.data
          ?.filter((item) => item.enabled)
          .sort((a, b) => a.order - b.order);
        setCategories(filteredResponse);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchCategory();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!isLoading && !error && categories?.length === 0) {
    return <h2>No records available</h2>;
  }

  return (
    <ProductCategoryContainer>
      {categories?.map((item) => (
        <ProductCategoryItem
          key={item.key}
          id={item.id}
          name={item.name}
          order={item.order}
          desc={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </ProductCategoryContainer>
  );
};

export default ProductCategory;
