import {render} from 'react-dom';
import App from './app/app';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/theme-provider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
    document.getElementById('root'),
)
