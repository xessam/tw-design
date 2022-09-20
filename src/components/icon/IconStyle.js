import styled, { css, keyframes } from "styled-components";
import { ifProp } from "@tools";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
// fa-2xs	0.625em	10px
// fa-xs	0.75em	12px
// fa-sm	0.875em	14px
// fa-lg	1.25em	20px
// fa-xl	1.5em	24px
// fa-2xl	2em	32px
const TWIconBase = styled.i`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
const TWIconFontFamily = styled(TWIconBase)`
  font-family: "tw-icon" !important;
`;

const TWIcon = styled(TWIconFontFamily)`
  ${ifProp(
    "spin",
    css`
      animation: ${spin} 1s linear infinite;
    `
  )}  
  ${ifProp(
    "reverse",
    css`
      animation-direction: reverse;
    `
  )}
  
  ${ifProp(
    "flip-horizontal",
    css`
      transform: scaleX(-1);
    `
  )}
  
  ${ifProp(
    "flip-vertical",
    css`
      transform: scaleY(-1);
    `
  )}
`;

export { TWIcon };
