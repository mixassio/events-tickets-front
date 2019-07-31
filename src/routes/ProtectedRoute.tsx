import { Redirect, Route } from "react-router";
import React from "react";

const ProtectedRoute = (props: any) => {
  const { component: Component, isAuth, ...propsComponent } = props;

  return (
    <Route
      render={renderProps => {
        return isAuth ? (
          <Component {...propsComponent} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: renderProps.location }
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
