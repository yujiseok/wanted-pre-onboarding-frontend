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
    font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
