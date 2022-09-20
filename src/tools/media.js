import { css } from 'styled-components';

import { breakpointSize, responsiveMap } from '@theme/breakpoint';

const media = Object.keys(breakpointSize).reduce((accumulator, label) => {
  accumulator[label] = (...args) => {
    return css`
      @media ${responsiveMap[label]} {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
}, {});

export default media;