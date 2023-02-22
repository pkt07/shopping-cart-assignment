import React from "react";
import { CategoryItem, Container } from "./CategorySidebar.style";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrentProductCategory } from "../../store/products/productSlice";

const CategorySidebar = ({ categories }) => {
  const dispatch = useDispatch();
  const currentProductCategory = useSelector(
    (store) => store.product.currentProductCategory
  );

  const handleCategoryFilter = (id) => {
    dispatch(handleCurrentProductCategory(id));
  };
  return (
    <Container>
      {categories?.map((item) => (
        <li key={item.id}>
          <CategoryItem
            key={item.id}
            activeFilter={currentProductCategory === item.id}
            onClick={() => handleCategoryFilter(item.id)}
          >
            {item.name}
          </CategoryItem>
        </li>
      ))}
    </Container>
  );
};

export default CategorySidebar;
