/*-------------------
    MediaQueryBreakpoints
    --------------------*/
export const breakpointSize = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const responsiveArray = ["xxl", "xl", "lg", "md", "sm", "xs"];

export const responsiveArrayReverse = ["xs", "sm", "md", "lg", "xl", "xxl"];

export const responsiveMap = {
  xs: `(max-width: ${breakpointSize.sm - 1}px)`,
  sm: `(min-width: ${breakpointSize.sm}px)`,
  md: `(min-width: ${breakpointSize.md}px)`,
  lg: `(min-width: ${breakpointSize.lg}px)`,
  xl: `(min-width: ${breakpointSize.xl}px)`,
  xxl: `(min-width: ${breakpointSize.xxl}px)`,
};
