import React from "react";
import { CategoryItem, Container } from "./CategorySidebar.style";

const CategorySidebar = ({ categories }) => {
  return (
    <Container>
      {categories?.map((item) => (
        <li key={item.id}>
          <CategoryItem key={item.id}>{item.name}</CategoryItem>
        </li>
      ))}
    </Container>
  );
};

export default CategorySidebar;
