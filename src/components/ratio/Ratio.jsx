import React from "react";
import PropTypes from "prop-types";

import { TWRatio, TWContent } from "./RatioStyle";

export const defaultProps = {
  ratio: 1,
};

function Ratio({ children, style, ratio, ...rest }) {
  const ratioStyle = {
    paddingTop: `${ratio === 0 ? 100 : 100 / ratio}%`,
  };

  return (
    <TWRatio
      style={{
        ...ratioStyle,
        ...style,
      }}
      {...rest}
    >
      <TWContent>{children}</TWContent>
    </TWRatio>
  );
}
Ratio.defaultProps = defaultProps;
Ratio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
export default Ratio;
