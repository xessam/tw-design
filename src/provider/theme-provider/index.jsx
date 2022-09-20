import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import merge from "lodash/merge";

import defaultTheme from "../../theme/default";
import GlobalStyle from "./global-style";

export const defaultProps = {
  theme: defaultTheme,
  injectGlobal: false,
  reset: false,
};

export const propTypes = {
  children: PropTypes.node.isRequired,
  injectGlobal: PropTypes.bool,
  reset: PropTypes.bool,
  theme: PropTypes.object,
};

const ThemeProvider = React.memo(
  ({ children, injectGlobal, reset, theme: userTheme }) => {
    const [theme, setTheme] = React.useState(
      merge({}, defaultTheme, userTheme)
    );

    React.useEffect(() => {
      // We only replace the theme if it is different from the current one
      const nextTheme = merge({}, defaultTheme, userTheme);
      if (JSON.stringify(theme) !== JSON.stringify(nextTheme)) {
        setTheme(nextTheme);
      }
    }, [userTheme]);


    return (
      <StyledThemeProvider theme={theme}>
        {(reset || injectGlobal) && (
          <GlobalStyle reset={reset} injectGlobal={injectGlobal} />
        )}
        {children}
      </StyledThemeProvider>
    );
  }
);

ThemeProvider.defaultProps = defaultProps;
// ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
