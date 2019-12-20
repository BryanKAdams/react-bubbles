import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom"
import Login from "./components/Login";
import UnPrivateRoute from "./routes/UnPrivateRoute"
import PrivateRoute from "./routes/PrivateRoute"
import BubblePage from "./components/BubblePage"
import "./styles.scss";
import Navigation from "./components/Navigation"
import CallToAction from "./components/CallToAction"
function App() {
  return (
    <Router>
      <Route path="/" component={Navigation} />
      <div className="App">

        <UnPrivateRoute exact path="/" component={CallToAction} />
        <UnPrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/bubbletime" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
