import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export enum ButtonTypeEnum {
  Button = 'button', // The button is a clickable button
  Submit = 'submit', // The button is a submit button (submits form-data)
  Reset = 'reset', // The button is a reset button (resets the form-data to its initial values)
}

export enum ButtonStyle {
  primary,
  secondary,
}

interface IButtonProps {
  onClick?: any;
  type: ButtonTypeEnum;
  children: string;
  disabled: boolean;
  style?: ButtonStyle;
}

const Button = ({ onClick, type, disabled, style, children }: IButtonProps) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={classNames([
      styles.buttonPrimary,
      {
        [`${styles.buttonSecondary}`]: style === ButtonStyle.secondary,
      },
    ])}
  >
    {children}
  </button>
);

export default Button;
