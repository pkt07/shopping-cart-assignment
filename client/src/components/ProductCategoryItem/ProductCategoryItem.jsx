import {
  ImageWrapper,
  CategoryImage,
  CategoryInfo,
  CategoryListItemWrapper,
  CategoryExploreButton,
} from "./ProductCategoryItem.styled";

const ProductCategoryItem = ({ id, name, order, desc, imageUrl }) => {
  return (
    <CategoryListItemWrapper order={order}>
      <CategoryInfo>
        <h2>{name}</h2>
        <p>{desc}</p>
        <CategoryExploreButton>Explore {name}</CategoryExploreButton>
      </CategoryInfo>
      <ImageWrapper order={order}>
        <CategoryImage src={imageUrl} alt={desc} />
      </ImageWrapper>
    </CategoryListItemWrapper>
  );
};

export default ProductCategoryItem;
