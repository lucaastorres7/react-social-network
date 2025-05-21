import React from "react";
import { buttonStyle } from "../../styles";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${buttonStyle.button} ${buttonStyle.buttonHover} ${buttonStyle.buttonDisabled}`}
    >
      {children}
    </button>
  );
};

export default Button;
