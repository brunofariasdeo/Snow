import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import clsx from 'clsx';

export const Button = ({
  label,
  variant
}) => {
  return (
    <button 
      className={clsx(
        variant
      )}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "default",
  ]),

  label: PropTypes.string,
};

Button.defaultProps = {
  variant: "default",
  label: "Default"
};
