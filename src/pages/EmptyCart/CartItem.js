import React, { useState } from "react";
import { CartItemContainer } from "./Cart.styled";
import { Minus, Plus, Del } from "../../components/icons";

const CartItem = ({ img, breed, age, sex, color, price, weight }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <CartItemContainer>
      <img src={img} alt={breed} />
      <div className="pet-details-container">
        <ul className="pet-details">
          <li className="pet-breed">{breed}</li>
          <li>Age: {age}</li>
          <li>Weight: {weight}</li>
          <li>Color: {color}</li>
          <li>Sex: {sex}</li>
        </ul>
        <div className="call-to-action">
          <span>Save for later</span>
        </div>
      </div>
      <div className="price-container">
        <span className="each">Each</span>
        <span className="pet-price">N{price}</span>
      </div>
      <div className="quantity-container">
        <span>Quantity</span>
        <div className="input-container">
          <button onClick={increment}>
            <Plus />
          </button>

          <input type="text" value={quantity} />
          <button onClick={decrement}>
            <Minus />
          </button>
        </div>
      </div>
      <div className="total-container">
        <span className="total">Total</span>
        <span>N150000</span>
      </div>
      <div className="del-container">
        <button>
          <Del />
        </button>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
