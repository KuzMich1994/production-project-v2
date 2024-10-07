import { classNames } from 'shared/lib/class-names/class-names';
import s from './button.module.scss';
import {ButtonHTMLAttributes} from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.PRIMARY, ...otherProps } = props;

  return (
    <button
      className={classNames(s.button, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}