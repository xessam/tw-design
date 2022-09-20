import React from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { TWIcon } from "./IconStyle";

function Icon({ icon, solid, className, ...rest }) {
  const iconClass = `tw-${icon}${solid ? "-solid" : ""}`;
  return <TWIcon className={cls(className, iconClass)} {...rest} />;
}

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
