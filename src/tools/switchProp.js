import prop from "./prop";

/**
 * A Needle is used to map the props to a value. 
 * This can either be done with a path string "theme.size.sm" or with a function (props) => props.theme.size.sm
 */

const switchProp =
  (needle, cases, defaultCase) =>
  (props = {}) => {
    const value =
      typeof needle === "function" ? needle(props) : prop(needle)(props);
    const finalCases = typeof cases === "function" ? cases(props) : cases;
    if (value in finalCases) {
      return finalCases[value];
    }
    return defaultCase;
  };

export default switchProp;
