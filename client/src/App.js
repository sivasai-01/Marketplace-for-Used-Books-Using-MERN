import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-secondary">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
