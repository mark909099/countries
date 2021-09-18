import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeGeneral from './components/home_page/HomeGeneral';

function App() {
  return (
<div>
<Router>
  <Switch>
    <Route exact path="/">
      <HomeGeneral />
    </Route>
  </Switch>
</Router>     
</div>
  );
}

export default App;
