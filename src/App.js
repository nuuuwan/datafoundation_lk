import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Logo from 'nonstate/atoms/Logo.js';
import Menu from 'nonstate/molecules/Menu.js';

import AboutPage from 'stateful/pages/AboutPage.js';
import ContactPage from 'stateful/pages/ContactPage.js';
import CorporatesPage from 'stateful/pages/CorporatesPage.js';
import DownloadsPage from 'stateful/pages/DownloadsPage.js';
import GovernmentPage from 'stateful/pages/GovernmentPage.js';
import HomePage from 'stateful/pages/HomePage.js';
import NewsPage from 'stateful/pages/NewsPage.js';
import ToolsPage from 'stateful/pages/ToolsPage.js';

import './App.css';

function App() {
  return (
    <div className="div-app">
      <BrowserRouter>
        <div className="div-body">
          <div className="div-left">
            <Menu />
          </div>
          <div className="div-center">
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/corporates" component={CorporatesPage} />
              <Route path="/downloads" component={DownloadsPage} />
              <Route path="/government" component={GovernmentPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/news" component={NewsPage} />
              <Route path="/tools" component={ToolsPage} />

              <Route path="/mylocal" component={ToolsPage} />
              <Route path="/kavuda" component={ToolsPage} />
              <Route path="/org_chart" component={ToolsPage} />

              <Route path="/" component={HomePage} />
            </Switch>

          </div>
          <div className="div-right">
          </div>
        </div>
        <div className="div-footer">
          <div className="div-copyright">
            © 2021 <Logo/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
