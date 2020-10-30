import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AppBar from './components/AppBar.js'
import Home from './pages/Home'
import FoodItems from './pages/FoodItems'
import Card from './pages/Card'
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <Router>
      <div>
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/FoodItems">
            <FoodItems />
          </Route>
          <Route path="/Card">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
