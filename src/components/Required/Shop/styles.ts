import styled, {keyframes} from 'styled-components';

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
  justify-content:center;
  align-items:center;
  animation: ${moveLeft} 0.3s forwards;
`;

export const Aside = styled.aside`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:30vw;
  span {
    display:block;
    font-size: 2rem;
  }
  div {
    margin: 1rem;
    padding:2rem;
    border:1px solid black;
    border-radius: 5px;
    transition: ease-in-out .5s;
    &:hover {
      box-shadow: 1px 1px 5px greenyellow;
    }
  }
`;

export const Main = styled.main`
  display:flex;
  width:70vw;
`;
export const ImgS = styled.img`
  width:20rem;
  margin:0.3rem;
`;