import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const HeaderS = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:2rem;
`;

export const LinkS = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
  transition: 0.5s;
  &:hover {
    color:#f00;
  }
`;