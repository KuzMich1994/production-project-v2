import {memo} from 'react';
import s from './navbar.module.scss';
import {classNames} from 'shared/lib/class-names/class-names';
import {AppLink, AppLinkTheme} from 'shared/ui/app-link';
import {ThemeSwitcher} from 'features/theme-switcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const {className} = props;

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={s.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={s.link}
          to={'/'}
        >
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={s.link}
          to={'/about'}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
});