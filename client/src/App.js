import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import UnPrivateRoute from "./routes/UnPrivateRoute"
import PrivateRoute from "./routes/PrivateRoute"
import BubblePage from "./components/BubblePage"
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <UnPrivateRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/bubbletime" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
