import * as React from "react";
import PropTypes from "prop-types";

import { cloneElement } from "./utils";
import Divider from "./Divider";

import { TWDividerGroup } from "./DividerStyle";

function DividerGroup({ leading = !!0, separator, gutter, ...props }) {
  const children = React.Children.toArray(props.children);
  const items = [];

  children.forEach((item, index) => {
    var key = "separator-" + (item.key || index);
    var style = gutter ? { margin: ` 0  ${parseFloat(gutter) / 16}rem` } : {};

    const separatorClone = cloneElement(
      separator || <Divider type="bullet" />,
      { key: key, style: style }
    );

    if (leading || index > 0) {
      items.push(separatorClone);
    }
    items.push(item);
  });

  return <TWDividerGroup>{items}</TWDividerGroup>;
}

DividerGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  leading: PropTypes.bool,
  separator: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default DividerGroup;
