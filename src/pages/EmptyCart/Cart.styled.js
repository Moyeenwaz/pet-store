import styled from "styled-components";
export const Container = styled.div`
  min-height: 200vh;
  background-color: #fff;
`;

export const NonEmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  background-color: #fff;
  overflow: hidden;
`;
export const CartContainer = styled.div`
  background-color: #d9e2ef;
  padding: 30px;
  width: 60%;
  border-radius: 10px 0 10px 10px;
  min-height: 100vh;

  .cart-header {
    padding-bottom: 24px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.7rem;
    }
    span {
      font-size: 12px;
      font-weight: 600;
    }
  }
  ul {
    list-style: none;
  }
`;

export const CartSummaryContainer = styled.div`
  width: 25%;
  background-color: #1f74af;
  padding: 30px;
  border-radius: 0 10px 10px 0;
  height: 100vh;

  .cart-summary-header {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 1.7rem;
  }
`;

export const CartItemContainer = styled.li`
  border-bottom: 1px solid lightgray;
  padding: 15px 0;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(6, 1fr);
  img {
    height: 100px;
    align-self: center;
  }

  button {
    background: transparent;
    border: none;
  }
  .pet-details-container {
    .pet-details {
      .pet-breed {
        font-weight: 800;
        font-size: 1rem;
      }
      li {
        font-size: 13px;
        margin-top: 5px;
      }
    }
    .call-to-action {
      font-size: 12px;
      margin-top: 10px;
    }
  }
  .price-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .each {
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .quantity-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    span {
      font-size: 1rem;
      font-weight: 600;
    }
    .input-container {
      display: flex;
      align-items: center;
      gap: 5px;
      svg {
        cursor: pointer;
      }
      input {
        width: 21.24px;
        height: 18.74px;
        text-align: center;
        background: transparent;
        border: 0.624742px solid rgba(0, 0, 0, 0.51);
        border-radius: 6.24742px;
      }
    }
  }
  .total-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .total {
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .del-container {
    align-self: center;
    svg {
      cursor: pointer;
    }
  }
`;
