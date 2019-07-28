import React from 'react';
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import LoginForm from "../components/LoginForm";
import notFound from "../pages/notFound";
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state: any) => ({
  isAuth: state.isAuth,
});

const ProtectedRoute = (props: any) => {
  const { component: Component, isAuth, ...propsComponent } = props;

  return (
    <Route 
      {...props} 
      render={props => (
        isAuth ?
          <Component {...propsComponent} /> :
          <Redirect to='/' />
      )} 
    />
  )
}


const AllRoutes = ({ isAuth }: any) => {
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <ProtectedRoute path='/welcome' isAuth={isAuth} component={Dashboard} />
        <Route component={notFound} />
      </Switch>
    </BrowserRouter>
  )
};

  export default connect(
    mapStateToProps,
  )(AllRoutes);
  