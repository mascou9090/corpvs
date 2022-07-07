import styled, { keyframes } from "styled-components";
import { User, Key } from "phosphor-react";

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

export const LoginS = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem auto;
  max-width: 23rem;
  border-radius: 6px;
  border: solid 1px black;
  animation: ${moveLeft} 0.3s forwards;
  box-shadow: 3px 3px 7px black;
  button {
    transition: ease-in-out 0.2s;
    display: block;
    justify-content: center;
    margin: 1.6rem auto;
    padding: 0.6rem 2rem;
    border-radius: 6px;
    :nth-child(2) {
    background-color: #22a;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: #00f;
    }
  }
    &:hover {
      cursor: pointer;
      background-color: #ccc;
    }
  }

  span {
    color: red;
    position: absolute;
    font-size: 0.8rem;
  }
  div {
    display: flex;
  }
  h2 {
    margin-left: 6rem;
    margin-top: 1rem;
  }
  label {
    margin: 0.4rem 0 0 7rem;
  }
  input {
    display: block;
    padding: 0.7rem;
    border-radius: 5px;
    margin: 1.3rem 0.5rem 0.5rem 1rem;
    color: black;
    border: solid 1px;
    font-size: 1rem;
    &::placeholder {
      color: black;
    }
    &:focus {
      background-color: #fff;
    }
  }
`;
export const UserS = styled(User)`
  margin: 1.6rem 0 0 0.5rem;
`;
export const KeyS = styled(Key)`
  margin: 1.6rem 0 0 0.5rem;
`;