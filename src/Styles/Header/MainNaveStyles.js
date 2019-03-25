import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: none;
  margin-left: auto;
  margin-right: 10px;
    @media(min-width: 660px) { display: flex; }
`;

  export const NavA = styled(Link)`
    color: #F5F5F5;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    // font-weight: 600;
    padding: 20px 12px 20px 12px;
      &:hover { color: #8dbe55; }
  `;