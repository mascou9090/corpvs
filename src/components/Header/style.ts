import styled from 'styled-components';
export const HeaderS = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:2rem;

  ul {
    display:flex;
    li {
      list-style: none;
      padding:1rem;
      transition: ease-in-out 0.5s;

      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
`;