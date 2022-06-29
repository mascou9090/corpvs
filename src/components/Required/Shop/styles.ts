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
`;

export const Main = styled.main`
  display:flex;
`;