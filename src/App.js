import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeGeneral from './components/home_page/HomeGeneral';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
<div className="main">
<ThemeProvider theme={theme}>
<Router>
  <Switch>
    <Route exact path="/">
      <HomeGeneral />
    </Route>
  </Switch>
</Router> 
</ThemeProvider>   
</div>
  );
}

export default App;
