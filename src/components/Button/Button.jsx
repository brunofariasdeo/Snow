import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import clsx from 'clsx';

export const Button = ({
  disabled,
  disableShadow,
  label,
  variant
}) => {
  return (
    <button 
      className={clsx(
        disableShadow ? 'disableShadow' : '',
        variant
      )}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  disableShadow: PropTypes.bool,

  disabled: PropTypes.bool,

  variant: PropTypes.oneOf([
    "default",
    "outlined"
  ]),

  label: PropTypes.string,
};

Button.defaultProps = {
  disableShadow: false,
  disabled: false,
  variant: "default",
  label: "Default"
};
