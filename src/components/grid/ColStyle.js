import styled, { css } from "styled-components";
import { media } from "@tools";

const generateResponsiveCss = ({ span, pull, push, order, offset }) => {
  return css`
    ${span &&
    css`
      flex: 0 0 calc(${span} / 24 * 100%);
      max-width: calc(${span} / 24 * 100%);
    `};

    ${offset &&
    css`
      margin-right: calc(${offset} / 24 * 100%);
    `};

    ${push &&
    css`
      right: calc(${push} / 24 * 100%);
    `};

    ${pull &&
    css`
      left: calc(${pull} / 24 * 100%);
    `};

    ${order &&
    css`
      order: ${order};
    `};
  `;
};

const mapQueries = (sizeProps) => {
  return Object.keys(sizeProps).map(
    (key) => media[key]`
        ${generateResponsiveCss(sizeProps[key])}
    `
  );
};

const TWColBase = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 1px;
`;

const TWCol = styled(TWColBase)`
  display: block;

  ${({ sizeProps, ...props }) => {
    return !Object.keys(sizeProps).length
      ? generateResponsiveCss(props)
      : mapQueries(sizeProps);
  }}
`;

export { TWCol };
