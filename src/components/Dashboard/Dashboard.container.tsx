import React from 'react';
import { connect } from "react-redux";


const mapStateToProps = (state: any) => ({
  authUser: state.authUser,
  isAuth: state.isAuth,
  token: state.token,
});

const Dashboard = () => (
  <div>Hello, dashboard</div>
)

export default connect(mapStateToProps)(Dashboard);