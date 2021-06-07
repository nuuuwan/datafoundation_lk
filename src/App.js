import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Logo from './nonstate/atoms/Logo.js';
import Menu from './nonstate/molecules/Menu.js';

import AboutPage from './stateful/pages/AboutPage.js';
import ContactPage from './stateful/pages/ContactPage.js';
import CorporatesPage from './stateful/pages/CorporatesPage.js';
import DataPage from './stateful/pages/DataPage.js';
import GovernmentPage from './stateful/pages/GovernmentPage.js';
import HomePage from './stateful/pages/HomePage.js';
import NewsPage from './stateful/pages/NewsPage.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <div className="div-app-inner">
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/corporates" component={CorporatesPage} />
          <Route path="/data" component={DataPage} />
          <Route path="/government" component={GovernmentPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/" component={HomePage} />
        </Switch>

      </div>

      <div className="div-copyright">
        © 2021 <Logo/>
      </div>

    </BrowserRouter>
  );
}

export default App;
