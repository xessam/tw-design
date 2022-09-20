export const pxTo = (value, base = 16, unit = "rem") =>
  `${parseFloat(value) / base}${unit}`;

export default pxTo;
