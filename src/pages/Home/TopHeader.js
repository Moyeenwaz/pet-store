import React from "react";
import { HeaderContainer, HeaderText } from "./HomeComponents.styled";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <HeaderContainer>
      <img
        src="https://github.com/Moyeenwaz/pet-store-images/blob/main/banner.png?raw=true"
        alt=""
      />
      <HeaderText>GET A COMPANION TODAY</HeaderText>
      <Link
        to="/shop"
        style={{
          textDecoration: "none",
        }}
      >
        <button>Shop Now</button>
      </Link>
    </HeaderContainer>
  );
};

export default TopHeader;
