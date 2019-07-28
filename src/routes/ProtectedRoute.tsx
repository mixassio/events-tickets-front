import { Redirect, Route } from "react-router";
import React from "react";

const ProtectedRoute = (props: any) => {
  const { component: Component, isAuth, ...propsComponent } = props;
  debugger;

  return (
    <Route
      {...props}
      render={props => {
        debugger;

        return isAuth ? (
          <Component {...propsComponent} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
