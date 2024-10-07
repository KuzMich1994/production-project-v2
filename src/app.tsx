import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {MainPageAsync} from './pages/main-page/main-page.async';
import {AboutPageAsync} from './pages/about-page/about-page.async';
import {Suspense, useContext} from 'react';
import {Theme, ThemeContext} from './theme/theme-context';
import {useTheme} from './theme/use-theme';
import {classNames} from './helpers/class-names/class-names';

const App = () => {
  const {toggleTheme, theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={'loading'}>
        <Routes>
          <Route path="/" element={
            <MainPageAsync/>
          } />
          <Route path={'/about'} element={<AboutPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
