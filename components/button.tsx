import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  css?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, css, children }) => {
  return (
    <button className={` ${css}`}>
      {text ? text : "Sign In"}
      {children}
    </button>
  );
};

export default CustomButton;
