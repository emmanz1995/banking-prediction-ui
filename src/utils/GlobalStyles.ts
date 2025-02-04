import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.background};
    font-family: "Josefin Sans", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
