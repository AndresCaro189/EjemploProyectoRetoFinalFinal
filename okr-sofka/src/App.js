import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { useRoutes} from 'react-router-dom';
import routes from './router/routes'
import theme from './theme/theme'

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>    
    {routing}
  </ThemeProvider>
  );
}

export default App;
