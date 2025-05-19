import React from "react";

const buttonStyle = {
  button:
    "text-base text-[#764701] cursor-pointer rounded-md bg-[#fb1] px-[1.2rem] py-[0.8rem] box-border min-w-[8rem] transition delay-100",
  buttonHover:
    "focus:outline-none focus:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] hover:outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1]",
  buttonDisabled: "disabled:opacity-50 disabled:cursor-wait",
};

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
