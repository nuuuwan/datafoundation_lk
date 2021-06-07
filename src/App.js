import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menu from './nonstate/Menu.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Lanka Data Foundation</h1>
      <Menu />

      <Router>
        <Switch>
          <Route path="/home" >
          </Route>
        </Switch>
      </Router>

      <div className="div-copyright">
        Copyright Lanka Data Foundation 2021
      </div>
    </div>
  );
}



export default App;
