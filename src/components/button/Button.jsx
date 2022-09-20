import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import LoadingIcon from "./LoadingIcon";

import { TWButton, TWText } from "./ButtonStyle";

function Button(props) {
  const {
    loading = false,
    type = "default",
    shape = "default",
    size = "default",
    disabled,
    children,
    icon,
    ghost = false,
    block = false,
    onClick,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = "button",
    ...rest
  } = props;

  const [innerLoading, setLoading] = useState(!!loading);

  const iconType = innerLoading ? "loading" : icon;
  const iconOnly = !children && children !== 0 && !!iconType;

  const buttonState = {
    btnType: type,
    shape: shape,
    size: size,
    block: block,
    ghost: ghost,
    disabled: disabled,
    iconOnly: iconOnly,
  };

  // =============== Update Loading ===============
  const loadingOrDelay =
    typeof loading === "boolean" ? loading : loading?.delay || true;

  useEffect(() => {
    let delayTimer = null;

    if (typeof loadingOrDelay === "number") {
      delayTimer = window.setTimeout(() => {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }

    return () => {
      if (delayTimer) {
        // in order to not perform a React state update on an unmounted component
        // and clear timer after 'loadingOrDelay' updated.
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);

  const handleClick = (e) => {
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const childNode =
    children || children === 0 ? <TWText>{children}</TWText> : null;
  const iconNode = icon && !innerLoading ? icon : !!innerLoading ? <LoadingIcon /> : "";

  return (
    <TWButton
      {...rest}
      as={props.href !== undefined ? "a" : ""}
      type={htmlType}
      onClick={handleClick}
      {...buttonState}
    >
      {iconNode}
      {childNode}
    </TWButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlType: PropTypes.oneOf(["submit", "button", "reset"]),
  type: PropTypes.oneOf(["default", "primary", "link", "text"]),
  size: PropTypes.oneOf(["default", "large", "small"]),
  shape: PropTypes.oneOf(["default", "circle", "round"]),
  icon: PropTypes.node,
  block: PropTypes.bool,
  ghost: PropTypes.bool,
  disables: PropTypes.bool,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      delay: PropTypes.number,
    }),
  ]),
};
export default Button;
