import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    background-color: ${({ theme }) => theme.bg.main};
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .text-center {
    text-align: center;
  }
`;

export default GlobalStyle;
