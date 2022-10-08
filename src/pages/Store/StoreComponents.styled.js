import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  padding-bottom: 100px;
`;

export const Shop = styled.div`
  display: flex;
  padding: 72px 50px;
  min-height: 200vh;
  gap: 40px;
`;

export const Wrapper = styled.div`
  flex: 12;
  background-color: pink;
  padding-bottom: 40px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: relative;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 14px 24px;
    h2 {
      font-weight: 700;
      font-size: 24px;
    }
    span {
      font-size: 13px;
    }
  }
  .second-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 14px 24px;
    p {
      color: rgba(0, 0, 0, 0.51);
    }
    .icons {
      display: flex;
      gap: 24px;
      svg {
        cursor: pointer;
      }
    }
  }
  .grid {
    display: grid;
    width: 90%;
    margin: 20px auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    .grid-item {
      width: 100%;
    }
  }
  .pagination {
    position: absolute;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    span {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
    }
    .active {
      background-color: #04709a;
      color: white;
    }
  }
`;

export const Sidebar = styled.div`
  flex: 4;
  box-shadow: 0px 4.90667px 4.90667px rgba(0, 0, 0, 0.25);
  border-radius: 0px 12.7725px 12.7725px 0px;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 20px;
  background-color: #ffffff;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ededed;
    border-radius: 30px;
  }

  h2 {
    font-weight: 700;
    font-size: 1.1rem;
    padding: 13px 20px;
    text-transform: uppercase;
  }
  ul {
    list-style: none;
  }
  .category {
    li {
      margin: 0;
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 12px 9px;
      border: 1px solid #2acada;
      span {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
  .breed {
    border-top: 1px solid lightgray;
    margin-top: 10px;
    .input {
      border: 1.55px solid rgba(139, 139, 139, 0.39);
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
      border-radius: 24.5333px;
      width: 80%;
      display: flex;
      align-items: center;
      height: 30px;
      gap: 5px;
      padding-left: 12px;
      margin: 0 auto;
      input {
        background: transparent;
        border: none;
        outline: none;

        &::placeholder {
          font-size: 0.7rem;
          color: #62727a;
          font-weight: 300;
        }
      }
    }
    .breeds {
      padding: 12px 30px;
      li {
        display: flex;
        gap: 10px;
        align-items: center;
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
  .price {
    border-top: 1px solid lightgray;
    margin-top: 10px;
    h2 {
      padding: 0px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      padding: 15px 30px;
      span {
        color: #04709a;
        cursor: pointer;
      }
    }
    .input-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      input {
        width: 30%;
        padding: 10px 5px;
        background: #ffffff;
        border: 1.22667px solid rgba(0, 0, 0, 0.3);
        border-radius: 8.58667px;
        outline: none;
      }
      span {
        width: 10px;
        height: 1px;
        background-color: black;
      }
    }
  }
  .rating {
    border-top: 1px solid lightgray;
    margin-top: 10px;
    .stars {
      padding: 0 20px;

      li {
        display: flex;
        align-items: center;
        gap: 15px;

        span {
          font-weight: 500;
        }
      }
    }
  }
`;
