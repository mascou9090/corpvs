import styled from 'styled-components';
import { User, Key } from "phosphor-react";


export const LoginS = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10rem auto;
  width:30rem;
  border-radius: 6px;
  border: solid 1px black;
  span {
    color: red;
    position:absolute;
    font-size: 0.8rem;
  }
  div {
    display:flex;
  }
  h2 {
    margin-left:6rem;
    margin-top: 1rem;
  }
  label {
    margin: 0.4rem 0 0 7rem;
  }
  input {
    display: block;
    padding:0.7rem;
    border-radius: 5px;
    margin:1.3rem .5rem 0.5rem 1rem;
    color:black;
    border: solid 1px;
    font-size: 1rem;
    &::placeholder {
      color: black;
    }
    &:focus {
      background-color:#fff;
    }
  }
  button {
    display: block;
    justify-content: center;
    margin: 1.6rem auto;
    padding: 0.6rem 2rem;
    border-radius: 6px;
    &:hover {
      background-color:#ccc;
    }
  }

`;
export const UserS = styled(User)`
  margin: 1.6rem 0 0 0.5rem;
`;
export const KeyS = styled(Key)`
  margin: 1.6rem 0 0 0.5rem;
`;