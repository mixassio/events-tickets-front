import React from "react";
import { connect } from "react-redux";
import LoginPage from './pages/login';

const mapStateToProps = ({ isAuth }: any) => ({
  isAuth,
}) 

const App = ({ isAuth }: any) => {
  if (!isAuth) return <LoginPage/>;
    return (
      <div>
        Hello, world!
      </div>
  );

};

export default connect(mapStateToProps)(App);
