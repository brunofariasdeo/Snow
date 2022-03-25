import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import clsx from 'clsx';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ICONS = {
  "local_grocery_store": <AiOutlineShoppingCart />
}

export const Button = ({
  color,
  disabled,
  disableShadow,
  endIcon,
  label,
  startIcon,
  size,
  variant
}) => {
  return (
    <button 
      className={clsx(
        color,
        disableShadow ? 'disableShadow' : '',
        startIcon || endIcon ? 'with-icons' : '',
        size,
        variant
      )}
      disabled={disabled}
    >
      {ICONS[startIcon]}
      {label}
      {ICONS[endIcon]}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "danger"
  ]),

  disableShadow: PropTypes.bool,

  disabled: PropTypes.bool,

  endIcon: PropTypes.string,

  label: PropTypes.string,

  startIcon: PropTypes.string,

  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg"
  ]),

  variant: PropTypes.oneOf([
    "outlined",
    "text"
  ]),
};

Button.defaultProps = {
  disableShadow: false,
  disabled: false,
  label: "Default",
  variant: "default",
};
