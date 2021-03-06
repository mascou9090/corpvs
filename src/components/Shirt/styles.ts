import styled from 'styled-components';

export const SectionS = styled.section`
  span {
    color:#aaf;
    font-size:3rem;
    margin:1rem 0;
  }
  div{
    display:flex;
    flex-direction: column;
    width:50rem;
    margin:0 auto;
    text-align:center;
    h2 {
      font-size: 2rem;
      margin:2rem;
    }
    img {
      width:30rem;
      margin:0 auto;
      border-radius: 5px;
    }
    p {
      margin:3rem;
      font-size:1.4rem;
      text-align: start;
    }
  }
`;


export const Button = styled.button`
  width:20rem;
  padding:2rem;
  border-radius: 4px;
  margin: 0 auto;
  transition: ease-in-out 0.5s;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color:red;
  }
`;