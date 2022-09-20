import React from "react";

import { responsiveArrayReverse } from "@theme/breakpoint";

import { TWCol } from "./ColStyle";

function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}

function Col(props) {
  const {
    children,
    className,
    style,
    gutter,
    wrap,
    flex,
    span,
    order,
    offset,
    push,
    pull,
    ...rest
  } = props;

  let sizeProps = {};
  responsiveArrayReverse.forEach((size) => {
    const propSize = props[size];
    if (typeof propSize === "number") {
      sizeProps[size] = { span: propSize };
    } else if (typeof propSize === "object") {
      sizeProps[size] = propSize || {};
    }

    delete rest[size];
  });

  const mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    const horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }

  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0) {
    const verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }

  if (flex) {
    mergedStyle.flex = parseFlex(flex);

    // Hack for Firefox to avoid size issue
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }

  const colState = {
    ...rest,
    sizeProps: sizeProps,
    span: span,
    order: order,
    offset: offset,
    push: push,
    pull: pull,
  };

  return (
    <TWCol {...colState} style={{ ...mergedStyle, ...style }}>
      {children}
    </TWCol>
  );
}

export default Col;
