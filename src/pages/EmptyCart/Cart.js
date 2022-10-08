import React, { useContext } from "react";
import { CartContext, CartProvider } from "../../store/cart-context";
import { Container } from "./Cart.styled";
import Empty from "./Empty";
import NonEmptyCart from "./NonEmptyCart";
import "./EmptyCart.css";

const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <Container>
      {!items.length && <Empty />}
      {items.length && <NonEmptyCart />}
    </Container>
  );
};

export default Cart;
