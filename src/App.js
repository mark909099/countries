import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeGeneral from './components/home_page/HomeGeneral';
import AboutGeneral from './components/about_page/AboutGeneral';
import AllCountriesGeneral from './components/all_counries_page/AllCountriesGeneral';
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
    <Route exact path="/about">
      <AboutGeneral />
    </Route>
    <Route exact path="/all_countries">
      <AllCountriesGeneral />
    </Route>
  </Switch>
</Router> 
</ThemeProvider>   
</div>
  );
}

export default App;
