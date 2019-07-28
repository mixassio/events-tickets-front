import { combineReducers, createStore, applyMiddleware } from "redux";
import usersReducer from "./user";
//import metaReducer from "./meta";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  const composeEnhancers =
    // @ts-ignore
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      // @ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : composeWithDevTools;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const reducer = combineReducers({
    users: usersReducer,
    //meta: metaReducer
  });

  return createStore(reducer, enhancer);
};

export default configureStore;
