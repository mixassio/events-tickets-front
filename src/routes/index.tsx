import React from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import notFound from "../pages/notFound";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/login/LoginPage";

const mapStateToProps = (state: any) => ({
  isAuth: state.isAuth
});

const AllRoutes = ({ isAuth }: any) => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" exact component={Dashboard} isAuth={isAuth} />
        <Route path="/login" component={LoginPage} />
        <Route component={notFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps)(AllRoutes);
