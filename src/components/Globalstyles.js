import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #FFF5E4;
  }


  button {
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

`;

export default Globalstyles;
