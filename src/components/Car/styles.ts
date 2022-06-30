import styled from 'styled-components';

export const Card = styled.div`
  width: 30rem;
  min-height:10rem;
  border: 1px solid black;
  margin:1rem auto;
  padding:0.4rem;
  border-radius: 6px;
  text-align: center;
  box-shadow: -1px 1px 5px black;
  strong {
    font-size: 1.2rem;
  }
  div {
    margin: 1rem;
    display:flex;
  }
  span {
    display:block;
  }
`;