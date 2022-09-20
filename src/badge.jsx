import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules';

export const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span',
  theme: {
    '$badge-default-bg': '#636c72',
    '$badge-primary-bg': '#0275d8',
    '$badge-success-bg': '#5cb85c',
    '$badge-info-bg': '#5bc0de',
    '$badge-warning-bg': '#f0ad4e',
    '$badge-danger-bg': '#d9534f',
    '$badge-color': '#fff',
    '$badge-link-hover-color': '#fff',
    '$badge-font-size': '75%',
    '$badge-font-weight': 'bold',
    '$badge-padding-x': '.4em',
    '$badge-padding-y': '.25em',
    '$badge-pill-padding-x': '.6em',
    '$badge-pill-border-radius': '10rem',
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ]),
  /**
   * Change badge border radius.
   */
  pill: PropTypes.bool,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.any,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$badge-default-bg': PropTypes.string,
    '$badge-primary-bg': PropTypes.string,
    '$badge-success-bg': PropTypes.string,
    '$badge-info-bg': PropTypes.string,
    '$badge-warning-bg': PropTypes.string,
    '$badge-danger-bg': PropTypes.string,
    '$badge-color': PropTypes.string,
    '$badge-link-hover-color': PropTypes.string,
    '$badge-font-size': PropTypes.string,
    '$badge-font-weight': PropTypes.string,
    '$badge-padding-x': PropTypes.string,
    '$badge-padding-y': PropTypes.string,
    '$badge-pill-padding-x': PropTypes.string,
    '$badge-pill-border-radius': PropTypes.string,
    '$link-hover-decoration': PropTypes.string,
    '$enable-rounded': PropTypes.bool,
    '$enable-hover-media-query': PropTypes.bool,
  }),

  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class BadgeUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    console.log("this.props", this.props);
    const {
      className,
      cssModule,
      color,
      pill,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);


    console.log("attributes", attributes);
    return (
      <Tag
        className={mapToCssModules(cn(className, 'badge', {
          'badge-pill': pill,
          [`badge-${color}`]: color,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

const Badge = styled(BadgeUnstyled)`
    ${(props) => {
        console.log("badge props", props)
    }}
  ${(props) => `
    
    /* Base class */
    /* Requires one of the contextual, color modifier classes for 'color' and */
    /* 'background-color'. */
    
    &.badge {
      display: inline-block;
      padding: ${props.theme['$badge-padding-y']} ${props.theme['$badge-padding-x']};
      font-size: ${props.theme['$badge-font-size']};
      font-weight: ${props.theme['$badge-font-weight']};
      line-height: 1;
      color: ${props.theme['$badge-color']};
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
    
      /* Empty tags collapse automatically */
      &:empty {
        display: none;
      }
    }
    
    
    /* scss-lint:disable QualifyingElement */
    /* Add hover effects, but only for links */
    &a {
    }
    /* scss-lint:enable QualifyingElement */
    
    /* Pill tags */
    /* Make them extra rounded with a modifier to replace v3s badges. */
    
    &.badge-pill {
      padding-right: ${props.theme['$badge-pill-padding-x']};
      padding-left: ${props.theme['$badge-pill-padding-x']};
    }
    
    /* Colors */
    /* Contextual variations (linked tags get darker on :hover). */
    
    &.badge-default {
    }     
    
    &.badge-primary {
    }
    
    &.badge-success {
    }
    
    &.badge-info {
    }
    
    &.badge-warning {
    }
    
    &.badge-danger {
        background: ${props.theme['$badge-danger-bg']};
    }
  `}
`;
/**
 * Badges can be used as link and buttons and also in order to provide a counter.
 */
Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;

/** @component */
export default Badge;