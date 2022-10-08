import PropTypes from 'prop-types';
import { cloneElement } from 'react';

export const Icon = ({ children, color, size, style }) => {
  return cloneElement(children, { color, size, style });
};

Icon.propTypes = {
  children: PropTypes.element,
  size: PropTypes.number
};
