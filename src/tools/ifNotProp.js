import ifProp from "./ifProp";

const ifNotProp = (test, pass, fail) => ifProp(test, fail, pass);

export default ifNotProp;
