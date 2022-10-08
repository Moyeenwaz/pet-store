import React, { useContext } from "react";
import {
  CartContainer as Container,
  NonEmptyCartContainer,
} from "./Cart.styled";
import { CartContext } from "../../store/cart-context";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";

const NonEmptyCart = () => {
  const { items } = useContext(CartContext);
  return (
    <NonEmptyCartContainer>
      <Container>
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <span>
            {items.length} {items.length > 1 ? "items" : "item"}
          </span>
        </div>
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              img={item.img}
              breed={item.breed}
              price={item.price}
              age={item.age}
              color={item.color}
              sex={item.sex}
              weight={item.weight}
              item={item}
            />
          ))}
        </ul>
      </Container>
      <CartSummary />
    </NonEmptyCartContainer>
  );
};

export default NonEmptyCart;
