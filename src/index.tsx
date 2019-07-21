import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import { Provider } from "react-redux";
import { configureStore } from "redux-starter-kit";
import rootReducer from "./store";
import App from "./App";
import "./reset.css";
import "typeface-roboto";

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
