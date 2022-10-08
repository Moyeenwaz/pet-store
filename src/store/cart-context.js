import React from "react";

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
});

export const CartProvider = ({ children }) => {
  const cartContext = {
    items: [
      {
        id: 1,
        img: "https://github.com/Moyeenwaz/pet-store-images/blob/main/pet-images/pit.png?raw=true",
        breed: "Pitbull",
        age: "3 months old",
        color: "Brown",
        weight: "4 Ibs",
        sex: "Female",
        price: 150000,
      },
      {
        id: 2,
        img: "https://github.com/Moyeenwaz/pet-store-images/blob/main/pet-images/pit.png?raw=true",
        breed: "Pitbull",
        age: "3 months old",
        color: "Brown",
        weight: "4 Ibs",
        sex: "Female",
        price: 150000,
      },
      {
        id: 3,
        img: "https://github.com/Moyeenwaz/pet-store-images/blob/main/pet-images/pit.png?raw=true",
        breed: "Pitbull",
        age: "3 months old",
        color: "Brown",
        weight: "4 Ibs",
        sex: "Female",
        price: 150000,
      },
      {
        id: 4,
        img: "https://github.com/Moyeenwaz/pet-store-images/blob/main/pet-images/pit.png?raw=true",
        breed: "Pitbull",
        age: "3 months old",
        color: "Brown",
        weight: "4 Ibs",
        sex: "Female",
        price: 150000,
      },
    ],
    totalAmount: 0,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
