import * as React from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import { TWSkeleton } from "./SkeletonStyle";

function Skeleton(props) {
  const {
    variant = "text",
    component = "span",
    className,
    height,
    width,
    style,
    borderRadius, // in Px
    ...rest
  } = props;

  const ownerState = {
    width,
    height,
    borderRadius,
    variant,
    animation: true,
    hasChildren: Boolean(rest.children),
  };

  return (
    <TWSkeleton
      as={component}
      className={cls(className)}
      style={{
        width,
        height,
        ...style,
      }}
      {...rest}
      {...ownerState}
    />
  );
}

Skeleton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  variant: PropTypes.oneOf(["circular", "rectangular", "text"])
};
export default Skeleton;
