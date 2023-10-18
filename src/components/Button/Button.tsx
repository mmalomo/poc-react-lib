import React from "react";
import "./Button.scss";

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...others }: ButtonProps) => {
  return <button {...others}>{label}</button>;
};

export { Button };
export type { ButtonProps };
