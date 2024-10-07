import { classNames } from 'shared/lib/class-names/class-names';
import s from './app-link.module.scss';
import {PropsWithChildren} from 'react';
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  
  return (
    <Link
      to={to}
      className={classNames(s.appLink, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}