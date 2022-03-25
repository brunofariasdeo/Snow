import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const APPEARANCE = {
  default: "default",
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className,
  color,
  disabled,
  disabledShadow,
  endIcon,
  size,
  startIcon,
  text,
  variant
}) => {
  let defaultValue;
  let hover = false; 

  if(className && className.includes("hover")) {
    hover = true;
  }

  if (color || disabledShadow || endIcon || startIcon || size || variant) {
    defaultValue = "";
  }
  else {
    defaultValue = "button-default";
  }

  const textValue = text || "Default";
  const variantValue = variant || "";

  return (
    <button 
      // className={clsx(defaultValue, hover, variantValue, disabledShadow, startIcon || endIcon, size, color)}
      disabled={disabled}
    >
      {startIcon}
      {/* && <AiOutlineShoppingCart /> */}
      
      {textValue}
      {endIcon} 
      {/* && <AiOutlineShoppingCart />} */}
    </button>
  )
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
