import React from 'react';

export function replaceElement(
  element,
  replacement,
  props,
) {
  if (!React.isValidElement(element)) return replacement;

  return React.cloneElement(
    element,
    typeof props === 'function' ? props(element.props || {}) : props,
  );
}

export function cloneElement(element , props) {
  return replaceElement(element, element, props);
}