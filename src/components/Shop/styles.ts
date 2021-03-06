import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: initial;
  }
`;
export const ShopS = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${moveLeft} 0.3s forwards;
  section {
    height: 84rem;
    width: 50vw;
  }
  @media (max-width: 1410px) {
    flex-direction: column;
    margin-left: -12rem;
    section {
      height: 13rem;
      margin-left: 3rem;
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 85rem;
  flex-wrap: wrap;
  @media (max-width: 1410px) {
    margin:0 auto;
  }

  span {
    margin-left: 5.3rem;
    display: block;
    font-size: 2rem;
    color: #aaf;
  }
  div {
    width: 20rem;
    height: 25rem;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 5px;
    transition: ease-in-out 0.5s;
    @media (max-width: 1410px) {
      width: 15rem;
      height: 20rem;
    }
    &:hover {
      box-shadow: 2px 2px 5px black;
      padding: 1.1rem;
    }
  }
`;

export const ImgS = styled.img`
  padding: 0 auto;
  width: 17rem;
  margin: 0.5rem;
  @media (max-width: 1410px) {
    padding: 0 auto;
    width: 12rem;
    margin: 0.5rem;
  }
`;
