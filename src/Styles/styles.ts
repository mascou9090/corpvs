import styled ,{createGlobalStyle, keyframes} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #eee;
    color:black;
  }
`;

export const Key = keyframes`
  to {
    transform: rotate(360deg);
  }
` 
export const Loading = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: ${Key} 1s infinite;
`