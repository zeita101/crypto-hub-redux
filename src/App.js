import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from "./pages/HomePage";
// import CoinList from "./components/coinGecko/coinGecko";
import CoinGList from "./pages/CoinGList";


function App() {
  return (

    <Router>
      <nav className="navigat">

        <div style={{}} className="nav-links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/list">Crypto List</NavLink>

        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list">
          <CoinGList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router >
  )
}

export default App;