import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import useReactRouter from "use-react-router";
import { actions } from "../../store";
import LoginForm from "./LoginForm";
import { ContainerProps } from "./types";
import { Field } from "./types";
import { auth } from "../../api";

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

const LoginFormContainer = ({
  authUser,
  isAuth,
  token,
  setUser
}: ContainerProps) => {
  const { location } = useReactRouter();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  // todo переделать на асинхронный redux-экшн
  // по итогу должно получиться так:
  // const onFormSubmit = (values: Field[]) => }
  //   authenticateUser(values)
  //     .then(handleSuccessAuth)
  //     .catch(handleBadAuth);
  //
  // }
  const onFormSubmit = (values: Field[]) => {
    const [{ value: userName }] = values;
    const result = auth("zaglushka");
    const {
      result: { token }
    } = result;
    setUser({ userName, token });
    handleSuccessAuth();
    // todo реализовать обработчик сабмита
  };

  const handleSuccessAuth = () => {
    setRedirectToReferrer(true);
  };

  const { from } = location.state || { from: { pathname: "/" } };

  if (redirectToReferrer === true) {
    debugger;

    return <Redirect to={from} />;
  }

  debugger;
  return <LoginForm onSubmit={onFormSubmit} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
