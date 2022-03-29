import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Free Pixel';
    font-size: x-large;
    background-color: #FF6666;
    color: black;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-top: 0;
    margin: 0;
  }

  p {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  a {
    color: black;
  }

  a::visited {
    color: black;
  }

  a::link {
    color: black;
  }

  header {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

