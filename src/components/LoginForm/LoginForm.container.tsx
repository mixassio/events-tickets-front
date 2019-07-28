import React from "react";
import { connect } from "react-redux";
import { actions } from "../../store";
import LoginForm from "./LoginForm";
import { ContainerProps } from "./types";
import { Field } from "./types";

const { authUserActions } = actions;

const mapDispatchToProps = (dispatch: any) => ({
  // todo опиши, пожалуйста, данные на входе
  setUser: (data: any) => dispatch(authUserActions.setUser(data))
});
const mapStateToProps = (state: any) => ({
  authUser: state.authUser,
  isAuth: state.isAuth,
  token: state.token
});

const LoginFormContainer = ({ authUser, isAuth, token, setUser  }: ContainerProps) => {
  const onFormSubmit = (values: Field[]) => {
    console.table(values);
    // todo реализовать обработчик сабмита
  };

  return <LoginForm onSubmit={onFormSubmit} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
