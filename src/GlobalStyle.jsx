import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #000000;
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Montserrat', monospace;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  header {
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  button {
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    cursor: pointer;
    background: none;
    padding: 0;
  }

  footer {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #fff;
    background-color: #2B2929;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  :focus {
    outline-offset: 2px;
  }
`;