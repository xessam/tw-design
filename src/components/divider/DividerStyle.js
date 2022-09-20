import styled, { css } from "styled-components";
import { theme, switchProp, ifProp } from "@tools";

const TWDivider = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;

  ${switchProp("type", {
    bullet: css`
      height: 0.375em;
      width: 0.375em;
      margin: 0 0.5em;
      background: ${ifProp(
        "parentColor",
        "currentColor",
        theme("divider.bulletColor")
      )};
      border-radius: 50%;
    `,
    vertical: css`
      height: 1em;
      margin: 0 1em;
      border-top: 0;
      border-left: 1px solid ${theme("divider.lineColor")};
    `,
    horizontal: css`
      display: flex;
      clear: both;
      width: 100%;
      min-width: 100%;
      margin: 0.75rem 0;
      border-top: 1px solid ${theme("divider.lineColor")};
    `,
  })}
`;

const TWDividerGroup = styled.div`
  > ${TWDivider}:first-child {
    margin-right: 0;
  }
`;

export { TWDivider, TWDividerGroup };
