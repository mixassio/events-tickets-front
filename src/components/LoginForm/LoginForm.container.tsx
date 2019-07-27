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


  submitForm = async (e: React.FormEvent<HTMLInputElement>) => {
    console.log('here value', e.currentTarget.value)
/*
    const { setUser } = this.props;
    try {
      console.log('here');
      await setUser(e);
    } catch (e) {
      throw e;
    }
    */
  };


  render(): React.ReactNode {
    return (
      <LoginForm hundleSubmit={this.submitForm} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormontainer);