import styled from 'styled-components';
import { Backspace } from "phosphor-react";


export const Card = styled.div`
  width: 30rem;
  min-height:10rem;
  border: 1px solid black;
  margin:2.5rem auto;
  padding:0.4rem;
  border-radius: 6px;
  text-align: center;
  box-shadow: -1px 1px 2px black;
  @media (max-width) {
    height:10rem;
  }
  strong {
    font-size: 1.2rem;
  }
  div {
    display: flex;
    margin: 1rem;
    justify-content: space-between;
    border: none;
  }
  span {
    font-weight: 600;
  }
  p {
    color: #aaf;
  }
`;

export const Delete = styled(Backspace)`
  transition: 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color:red;
    border-radius: 10px;
  }
`;
