import React from "react";
import ResponsiveObserve from "@utils/responsiveObserve";
import { responsiveArray } from "@theme/breakpoint";

import { TWRow } from "./RowStyle";

function Row(props) {
  const {
    justify,
    align,
    className,
    style,
    children,
    gutter = 0,
    wrap,
    ...rest
  } = props;

  const [screens, setScreens] = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });
  const gutterRef = React.useRef(gutter);

  React.useEffect(() => {
    const token = ResponsiveObserve.subscribe((screen) => {
      const currentGutter = gutterRef.current || 0;
      if (
        (!Array.isArray(currentGutter) && typeof currentGutter === "object") ||
        (Array.isArray(currentGutter) &&
          (typeof currentGutter[0] === "object" ||
            typeof currentGutter[1] === "object"))
      ) {
        setScreens(screen);
      }
    });
    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter)
      ? gutter
      : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object") {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };

  const gutters = getGutter();

  const rowStyle = {};
  const horizontalGutter =
    gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter =
    gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { gutter: gutters, wrap: wrap });
    }
    return child;
  });

  const rowState = {
    ...rest,
    justify: justify,
    align: align,
    wrap: wrap,
  };
  return (
    <TWRow {...rowState} style={{ ...rowStyle, ...style }}>
      {childrenWithProps}
    </TWRow>
  );
}

export default Row;
