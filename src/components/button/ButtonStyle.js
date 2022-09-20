import styled, { css, keyframes } from "styled-components";
import { theme } from "@tools";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const TWButtonBase = styled.button`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  min-width: ${theme("button.defaultMinWidth")};
  height: ${theme("button.defaultHeight")};
  padding: ${theme("button.defaultPadding")};
  font-size: ${theme("button.defaultFontSize")};
  border-radius: ${theme("button.defaultBorderRadius")};
  color: ${theme("button.defaultColor")};
  border-color: ${theme("button.defaultBorderColor")};
  background: ${theme("button.defaultBackgroundColor")};

  > span {
    display: inline-block;
  }

  :hover {
    color: ${theme("button.defaultHoverColor")};
    border-color: ${theme("button.defaultHoverBackgroundColor")};
    background: ${theme("button.defaultHoverBackgroundColor")};
  }
  &:not([disabled]):hover {
    text-decoration: none;
  }

  &,
  :active,
  :focus {
    outline: 0;
  }
`;

const TWBlockButton = styled(TWButtonBase)`
  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}
`;

const TWButtonSize = styled(TWBlockButton)`
  ${({ size }) =>
    (size === "large" &&
      css`
        min-width: ${theme("button.largeMinWidth")};
        height: ${theme("button.largeHeight")};
        padding: ${theme("button.largePadding")};
        font-size: ${theme("button.largeFontSize")};
        border-radius: ${theme("button.largeBorderRadius")};
      `) ||
    (size === "small" &&
      css`
        min-width: ${theme("button.smallMinWidth")};
        height: ${theme("button.smallHeight")};
        padding: ${theme("button.smallPadding")};
        font-size: ${theme("button.smallFontSize")};
        border-radius: ${theme("button.smallBorderRadius")};
      `)}

  ${({ as, size }) =>
    as === "a" &&
    ((size === "large" &&
      css`
        line-height: 1.75rem;
      `) ||
      (size === "small" &&
        css`
          line-height: 1.75rem;
        `))}
`;

const TWIconButton = styled(TWButtonSize)`
  ${({ iconOnly, size }) =>
    iconOnly &&
    ((size === "default" &&
      css`
        width: ${theme("button.defaultHeight")};
        min-width: ${theme("button.defaultHeight")};
        height: ${theme("button.defaultHeight")};
        padding: 0.25rem 0;
        font-size: ${theme("button.defautlIconOnlyFontSize")};
        > * {
          font-size: ${theme("button.defautlIconOnlyFontSize")};
        }
      `) ||
      (size === "large" &&
        css`
          width: ${theme("button.largeHeight")};
          min-width: ${theme("button.largeHeight")};
          height: ${theme("button.largeHeight")};
          padding: 0.375rem 0;
          font-size: ${theme("button.smallIconOnlyFontSize")};

          > * {
            font-size: ${theme("button.smallIconOnlyFontSize")};
          }
        `) ||
      (size === "small" &&
        css`
          width: ${theme("button.smallHeight")};
          min-width: ${theme("button.smallHeight")};
          height: ${theme("button.smallHeight")};
          padding: 0;
          font-size: ${theme("button.smallIconOnlyFontSize")};

          > * {
            font-size: ${theme("button.smallIconOnlyFontSize")};
          }
        `))}

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      vertical-align: middle;

      > span {
        display: flex;
        justify-content: center;
      }
    `}

  ${({ iconOnly, shape }) =>
    iconOnly &&
    shape === "round" &&
    css`
      width: auto;
    `}
`;

const TWButtonShaped = styled(TWIconButton)`
 ${({ shape, size }) =>
   shape === "circle" &&
   ((size === "default" &&
     css`
       min-width: ${theme("button.defaultHeight")};
     `) ||
     (size === "large" &&
       css`
         min-width: ${theme("button.largeHeight")};
       `) ||
     (size === "small" &&
       css`
         min-width: ${theme("button.smallHeight")};
       `))}
 };

 ${({ shape }) =>
   shape === "circle" &&
   css`
     padding-right: 0;
     padding-left: 0;
     text-align: center;
     border-radius: 50%;
   `}
 };

 ${({ shape, size }) =>
   shape === "round" &&
   ((size === "default" &&
     css`
       height: ${theme("button.defaultHeight")};
       padding: ${theme("button.defaultPadding")};
       font-size: ${theme("button.defaultFontSize")};
       border-radius: ${theme("button.defaultHeight")};
     `) ||
     (size === "large" &&
       css`
         height: ${theme("button.largeHeight")};
         padding: ${theme("button.largePadding")};
         font-size: ${theme("button.largeFontSize")};
         border-radius: ${theme("button.largeHeight")};
       `) ||
     (size === "small" &&
       css`
         height: ${theme("button.smallHeight")};
         padding: ${theme("button.smallPadding")};
         font-size: ${theme("button.smallFontSize")};
         border-radius: ${theme("button.smallHeight")};
       `))}
 };
`;

const TWButtonType = styled(TWButtonShaped)`
 ${({ btnType }) =>
   btnType === "primary" &&
   css`
     color: ${theme("button.primaryColor")};
     border-color: ${theme("button.primaryBackgroundColor")};
     background: ${theme("button.primaryBackgroundColor")};
     text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);

     :hover {
       color: ${theme("button.primaryHoverColor")};
       border-color: ${theme("button.primaryHoverBackgroundColor")};
       background: ${theme("button.primaryHoverBackgroundColor")};
     }
   `}
 };
 
 ${({ btnType }) =>
   btnType === "text" &&
   css`
     color: ${theme("button.textColor")};
     border-color: ${theme("button.textBorderColor")};
     background: 0 0;

     :hover {
       color: ${theme("button.textHoverColor")};
       background: ${theme("button.textHoverBackgroundColor")};
       border-color: ${theme("button.textHoverBackgroundColor")};
     }
   `}
 }; 

 ${({ btnType }) =>
   btnType === "link" &&
   css`
     color: ${theme("button.linkColor")};
     border-color: ${theme("button.linkBorderColor")};
     background: 0 0;

     :hover,
     :active {
       border-color: ${theme("button.linkHoverBackgroundColor")};
     }

     :hover {
       color: ${theme("button.linkHoverColor")};
       background: 0 0;
     }
   `}
 };
`;

const TWButtonDisabled = styled(TWButtonType)`
  ${({ disabled, btnType }) =>
    disabled &&
    (((btnType === "text" || btnType === "link") &&
      css`
        &[disabled],
        &[disabled]:hover,
        &[disabled]:focus,
        &[disabled]:active {
          color: ${theme("button.textualDisableColor")};
          border-color: ${theme("button.textualDisableBackgroundColor")};
          background: 0 0;
          text-shadow: none;
        }
      `) ||
      css`
        &[disabled],
        &[disabled]:hover,
        &[disabled]:focus,
        &[disabled]:active {
          color: ${theme("button.textualDisableColor")};
          border-color: ${theme("button.textualDisableBorderColor")};
          background: ${theme("button.textualDisableBackgroundColor")};
          text-shadow: none;
        }
      `)}

  ${({ disabled, ghost, btnType }) =>
    disabled &&
    ghost &&
    (btnType === "default" || btnType === "primary") &&
    css`
      &[disabled],
      &[disabled]:hover,
      &[disabled]:focus,
      &[disabled]:active {
        color: ${theme("button.defaultDisableColor")};
        border-color: ${theme("button.defaultDisableBorderColor")};
        background: 0 0;
        text-shadow: none;
      }
    `}

  &[disabled] {
    cursor: not-allowed;
  }
`;

const TWButton = styled(TWButtonDisabled)`
  ${({ ghost, btnType }) =>
    ghost &&
    ((btnType === "primary" &&
      css`
        color: #fff;
        border-color: #d02028;
        text-shadow: none;

        :hover,
        :focus {
          color: #fff;
          border-color: #d02028;
          background: #d020283d;
        }
      `) ||
      (btnType === "default" &&
        css`
          color: #fff;
          border-color: #838383;

          :hover,
          :focus {
            color: #fff;
            border-color: #838383;
            background: 0 0;
          }
        `))}

  ${({ ghost }) =>
    ghost &&
    css`
      background: 0 0;
    `}
`;

const TWText = styled.span`
  display: inline-block;

  &:not(:only-child) {
    margin-right: 0.375rem;
  }
`;

const TWLoadingIcon = styled.span`
  font-family: "tw-icon" !important;

  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  vertical-align: -0.125em;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  animation: ${spin} 1s linear infinite;
  animation-direction: reverse;
`;

export { TWButton, TWText, TWLoadingIcon };
