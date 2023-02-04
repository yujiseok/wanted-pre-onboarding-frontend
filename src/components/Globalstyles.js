import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #fdba74;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-family: inherit;
  }
  
  input {
    font-family: inherit;
  }

  ul, li {
    list-style: none;
  }

`;

export default Globalstyles;
