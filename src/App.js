import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home';
import ViewBooks from './components/viewbooks';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/:category">
              <ViewBooks />
          </Route>
        </Switch>
    </Router> 
  );
}

export default App;
