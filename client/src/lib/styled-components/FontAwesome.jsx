import React from 'react';
import PropTypes from 'prop-types';

const FontAwesome = ({
  border,
  fixedWidth,
  flip,
  inverse,
  name,
  pulse,
  rotate,
  size,
  spin,
  stack,
  title,
}) => {
  const classNames = [
    'fas',
    border && 'fa-border',
    fixedWidth && 'fa-fw',
    flip && `fa-flip-${flip}`,
    inverse && 'fa-inverse',
    name && `fa-${name}`,
    pulse && 'fa-pulse',
    rotate && `fa-rotate-${rotate}`,
    size && `fa-${size}`,
    spin && `fa-spin`,
    stack && `fa-stack-${stack}`,
  ];

  return <i className={classNames.join(' ')} title={title} />;
};

FontAwesome.propTypes = {
  border: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  flip: PropTypes.oneOf(['horizontal', 'vertical']),
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
  rotate: PropTypes.oneOf([90, 180, 270]),
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '4x', '5x']),
  spin: PropTypes.bool,
  stack: PropTypes.oneOf(['1x', '2x']),
  title: PropTypes.string,
};

export default FontAwesome;
