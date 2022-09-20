import prop from "./prop";

const withProp =
  (needle, fn) =>
  (props = {}) => {
    if (Array.isArray(needle)) {
      const needles = needle.map((arg) => withProp(arg, (x) => x)(props));
      return fn(...needles);
    }
    if (typeof needle === "function") {
      return fn(needle(props));
    }
    return fn(prop(needle)(props));
  };

export default withProp;
