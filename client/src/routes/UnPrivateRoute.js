import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnPrivateRoute = ({ component: Component, ...e }) => {
    return (
      <Route
        {...e}
        render={props => {
          if (!localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Redirect to="bubbletime" />;
          }
        }}
      />
    );
  };
  
  export default UnPrivateRoute;