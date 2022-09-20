import prop from "./prop";
import defaultTheme from "../theme/default";
import isEmpty from 'lodash/isEmpty';


const theme = (path, defaultValue) => (props) => {
  const theme = isEmpty(props?.theme) ? defaultTheme : props?.theme;
  // console.log("Theme", isEmpty(props?.theme), props, theme);

  return prop(path, defaultValue)(theme);
};

export default theme;
