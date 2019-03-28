import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  display: none;
  margin-left: auto;
  margin-right: 10px;
    @media(min-width: 600px) { display: flex; }
    @media(min-width: 1100px) { height: 60px; }
`;

// export const NavA = styled.a`
// color: #F5F5F5;
// text-decoration: none;
// font-family: 'Open Sans', sans-serif;
// font-size: 15px;
// padding: 20px 18px 20px 18px;
//   &:hover { color: #8dbe55; }
// `;

  export const NavA = styled(Link)`
    color: #F5F5F5;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    padding: 20px 18px 20px 18px;
      &:hover { color: #8dbe55; }
  `;