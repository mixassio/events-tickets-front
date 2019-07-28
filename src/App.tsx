import React from "react";
import { connect } from "react-redux";
import LoginPage from "./pages/login";
import AllRoutes from "./routes";

const mapStateToProps = ({ isAuth }: any) => ({
  isAuth
});

const App = ({ isAuth }: any) => {
  if (!isAuth) return <LoginPage />;
  return <AllRoutes />;
};

export default connect(mapStateToProps)(App);
