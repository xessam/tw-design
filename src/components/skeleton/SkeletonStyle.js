import styled, { css, keyframes } from "styled-components";
import { withProp, theme, switchProp, ifProp, pxTo } from "@tools";

const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const TWSkeleton = styled.span`
  display: block;
  background: ${theme("skeleton.backgroundColor")};
  height: 1.2em;

  ${switchProp("variant", {
    text: css`
      margin-top: 0;
      margin-bottom: 0;
      height: auto;
      transform-origin: 0 55%;
      transform: scale(1, 0.6);
      border-radius: ${ifProp(
        "borderRadius",
        withProp("borderRadius", (radius) => pxTo(radius)),
        theme("skeleton.borderRadius")
      )};
      &:empty:before {
        content: "\\00a0";
      }
    `,
    circular: css`
      borderradius: "50%";
    `,
    rectangular: css`
      border-radius: ${ifProp(
        "borderRadius",
        withProp("borderRadius", (radius) => pxTo(radius)),
        theme("skeleton.borderRadius")
      )};
    `,
  })}

  ${ifProp(
    "hasChildren",
    css`
      & > * {
        visibility: hidden;
      }
    `
  )} 

  ${ifProp(
    "animation",
    css`
      position: relative;
      overflow: hidden;
      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      /* -webkit-mask-image: -webkit-radial-gradient(white, black); */
      &::after {
        animation: ${waveKeyframe} 1.4s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${theme("skeleton.shimmerColor")()},
          transparent
        );
        content: "";
        position: absolute;
        transform: translateX(
          -100%
        ); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `
  )}

  ${({ hasChildren, width, height }) => {
    return {
      ...(hasChildren &&
        !width && {
          maxWidth: "fit-content",
        }),
      ...(hasChildren &&
        !height && {
          height: "auto",
        }),
    };
  }}
`;

export { TWSkeleton };
