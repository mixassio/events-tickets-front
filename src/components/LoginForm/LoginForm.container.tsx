import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../../store";
import LoginForm from './LoginForm';
import { Props, State } from "./LoginForm.spec";

const {
  authUserActions,
} = actions;

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (data: any) => dispatch(authUserActions.setUser(data)),

  };
};
const mapStateToProps = (state: any) => ({
  authUser: state.authUser,
  isAuth: state.isAuth,
  token: state.token,
});

class LoginFormontainer extends Component<Props, State> {



  render(): React.ReactNode {
    // const { authUser, isAuth, token } = this.props;
    return (
      <LoginForm />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormontainer);