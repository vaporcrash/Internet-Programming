import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/home';
import Committee from './components/committee';
import CallForPapers from './components/CallForPapers';
import Important from './components/important';
import Workshops from './components/workshops';
import Register from './components/register';
import Contacts from './components/contact';
function App() {
  return (
    <>
    <title>Conference</title>
    <Router>
    <div>
      <nav className="nav main-nav">
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Committee">Committee</Link></li>
      <li><Link to="/CallForPapers">Call For Papers</Link></li>
      <li><Link to="/Important">Important Dates</Link></li>
      <li><Link to="/Workshops">Workshops</Link></li>
      <li><Link to="/Register">Register</Link></li>
      <li><Link to="/Contacts">Contacts</Link></li>
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
        <Route path="/Important">
          <Important />
        </Route>
        <Route path="/Workshops">
          <Workshops />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>

      </Switch>
    </div>
  </Router>
  </>
  );
}

export default App;
