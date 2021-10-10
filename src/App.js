import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SpaceXDetails from "./components/SpaceXDetails";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mission/:name" component={SpaceXDetails} />
        </Switch>
      </Router>
  );
}

export default App;