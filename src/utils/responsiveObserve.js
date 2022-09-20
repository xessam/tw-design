import { responsiveMap } from '@theme/breakpoint';

const subscribers = new Map();
let subUid = -1;
let screens = {};

const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach((func) => func(screens));
    return subscribers.size >= 1;
  },
  subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe(token) {
    subscribers.delete(token);
    if (!subscribers.size) this.unregister();
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      const handler = this.matchHandlers[matchMediaQuery];
      handler?.mql.removeListener(handler?.listener);
    });
    subscribers.clear();
  },
  register() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      const listener = ({ matches }) => {
        this.dispatch({
          ...screens,
          [screen]: matches,
        });
      };
      const mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener,
      };

      listener(mql);
    });
  },
};

export default responsiveObserve;
