import React from 'react';

export enum ButtonTypeEnum {
  Button = 'button', // The button is a clickable button
  Submit = 'submit', // The button is a submit button (submits form-data)
  Reset = 'reset', // The button is a reset button (resets the form-data to its initial values)
}

interface IButtonProps {
  onClick?: any;
  type: ButtonTypeEnum;
  children: string;
  disabled: boolean;
}

const Button = ({ onClick, type, disabled, children }: IButtonProps) => (
  <button type={type} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;