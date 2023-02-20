import React from "react";
import {
  CartListItemWrapper,
  ItemCalcButton,
  ItemImage,
  ItemInfo,
  ItemInfoWrapper,
  ItemName,
  ItemQuantityWrapper,
  ItemTotalPrice,
} from "./CartListItem.styled";

const CartListItem = ({ id, name, imageURL, price, quantity }) => {
  return (
    <CartListItemWrapper>
      <ItemInfoWrapper>
        <ItemImage src={imageURL} alt={name} />
        <ItemInfo>
          <ItemName>
            <strong>{name}</strong>
          </ItemName>
          <ItemQuantityWrapper>
            <ItemCalcButton aria-label={`Item Quantity Decrease`}>
              −
            </ItemCalcButton>
            <span>{quantity}</span>
            <ItemCalcButton aria-label={`Item Quantity Increase`}>
              +
            </ItemCalcButton>
            <span>X</span>
            <span>{price}</span>
          </ItemQuantityWrapper>
        </ItemInfo>
      </ItemInfoWrapper>
      <ItemTotalPrice aria-label={`Total Item Price`}>
        Rs.{price * quantity}
      </ItemTotalPrice>
    </CartListItemWrapper>
  );
};

export default CartListItem;
