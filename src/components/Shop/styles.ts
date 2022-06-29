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
const ShopS = styled.main`
  display: flex;
  justify-content:center;
  align-items:center;
  animation: ${moveLeft} 0.3s forwards;

`;