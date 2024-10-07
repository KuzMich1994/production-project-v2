import {render} from 'react-dom';
import {Counter} from './components/counter';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './theme/theme-provider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
    document.getElementById('root'),
)
