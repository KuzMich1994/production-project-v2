import {classNames} from 'shared/lib/class-names/class-names';
import s from './theme-switcher.module.scss';
import {Theme, useTheme} from 'app/providers/theme-provider';
import LightIconUrl, {ReactComponent as LightIcon} from 'shared/assets/icons/theme-light.svg';
import DarkIconUrl, {ReactComponent as DarkIcon} from 'shared/assets/icons/theme-dark.svg';
import {Button, ButtonTheme} from 'shared/ui/button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const {theme, toggleTheme} = useTheme();

  const getThemeIcon = (isUrl?: boolean) => {
    switch (theme) {
      case Theme.DARK: {
        return  isUrl ? DarkIconUrl : <DarkIcon/>;
      }
      case Theme.LIGHT: {
        return isUrl ? LightIconUrl : <LightIcon/>;
      }
    }
  }
  
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(s.themeSwitcher, {}, [className, s[theme]])}
      onClick={toggleTheme}
    >
      {
        getThemeIcon()
      }
    </Button>
  )
}