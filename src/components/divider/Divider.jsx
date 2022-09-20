import * as React from "react";
import PropTypes from "prop-types";

import { TWDivider } from "./DividerStyle";

function Divider({ type = "horizontal", ...props }) {
  return <TWDivider type={type} {...props} role="separator" />;
}

Divider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  parentColor: PropTypes.bool,
  type: PropTypes.oneOfType([
    PropTypes.oneOf(["bullet", "horizontal", "vertical"]),
  ]),
};

export default Divider;
