import styled from 'styled-components';
import { User, Key } from "phosphor-react";


export const LoginS = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem ;
  label {
    margin: .6rem 0 0.2rem 1rem;
  }
  input {
    display: block;
    padding:0.7rem;
    margin: 1rem;
    border-radius: 5px;
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
    margin: 1rem auto;
    padding: 0.6rem 2rem;
    border-radius: 6px;
    &:hover {
      background-color:#ccc;
    }
  }

`;
export const UserS = styled(User)`
  margin: .6rem 0 0 1rem;
`;
export const KeyS = styled(Key)`
    margin: .6rem 0 0 1rem;

`;