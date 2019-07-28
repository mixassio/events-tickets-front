import React from "react";
import { connect } from "react-redux";
import AllRoutes from "./routes";

const mapStateToProps = ({ isAuth }: any) => ({
  isAuth
});

const App = () => {
  return <AllRoutes />;
};

export default connect(mapStateToProps)(App);
