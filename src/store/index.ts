import { createSlice } from "redux-starter-kit";
import { combineReducers } from "redux";

const authUser = createSlice({
  slice: 'authUser',
  initialState: '', // user
  reducers: {
    setUser: (state, action) => action.payload
  }
});

const isAuth = createSlice({
  slice: 'isAuth',
  initialState: false,
  reducers: {},
  extraReducers: {},
})

const token = createSlice({
  slice: 'token',
  initialState: '',
  reducers: {},
  extraReducers: {
    [authUser.actions.setUser.toString()]: (state, { payload }) => payload
  },
});

export const actions = {
  authUserActions: authUser.actions,
  isAuthActions: isAuth.actions,
  tokenActions: token.actions,
};

export default combineReducers({
  authUser: authUser.reducer,
  isAuth: isAuth.reducer,
  token: token.reducer,
});