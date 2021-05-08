import './App.css';
import './Images/Instagram Logo1.png'
import React from "react";
import Home from './components/Home';
import Committee from './components/Committee';
import Contact from './components/Contact';
import CallForPapers from './components/CallForPapers';
import ImportantDates from './components/ImportantDates';
import Registration from './components/Registration';
import Workshops from './components/Workshops';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav main-nav"><ul><li>
          <Link to="/">Home</Link></li>
          <li><Link to="/Committee">Committee</Link></li>
          <li><Link to="/CallForPapers">CallForPapers</Link></li>
          <li><Link to="/ImportantDates">ImportantDates</Link></li>
          <li><Link to="/Workshops">Workshops</Link></li>
          <li><Link to="/Registration">Registration</Link></li>
          <li><Link to="/Contact">Contact</Link></li>

        </ul></nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Committee">
            <Committee />
          </Route>
          <Route path="/CallForPapers">
            <CallForPapers />
          </Route>
          <Route path="/ImportantDates">
            <ImportantDates />
          </Route>
          <Route path="/Workshops">
            <Workshops />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
