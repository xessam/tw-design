import { createGlobalStyle } from "styled-components";
import resetStyle from "./reset";

const GlobalStyle = createGlobalStyle`
  ${(reset) => `
      ${reset ? resetStyle : ""}
      `}
    
  h1,h2,h3,h4,h5{
    margin: 0;
    padding:0;
  }  
  html, body, input,textarea,button,  h1,h2,h3,h4,h5{
    font-family: Yekan-Bakh-FaN-Regular, Yekan-Bakh-En-Medium;
  }
  *, *::before, *::after {
    box-sizing: border-box;
}
  `;
export default GlobalStyle;
