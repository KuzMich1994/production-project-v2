import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {Suspense} from 'react';
import {classNames} from 'shared/lib/class-names/class-names';
import {useTheme} from 'app/providers/theme-provider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/navbar';

const App = () => {
  const {toggleTheme, theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
}

export default App;
