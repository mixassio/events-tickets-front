import { createSlice } from "redux-starter-kit";
import { combineReducers } from "redux";

const authUser = createSlice({
  // todo переименовать на currentUser
  // переделать на объект с интерфейсом
  // типа User (User у нас тоже не описан,
  // надо описать)
  slice: 'authUser',
  initialState: '', // user
  reducers: {
    setUser: (state, action) => {
      const { userName } = action.payload;
      return userName;
    }
  }
});

// todo излишний ключ в сторе.
// Мы можем ориентироваться на currentUser
const isAuth = createSlice({
  slice: 'isAuth',
  initialState: false,
  reducers: {},
  extraReducers: {
    [authUser.actions.setUser.toString()]: () => true
  },
})

// todo перенести хранение токена на куку
const token = createSlice({
  slice: 'token',
  initialState: '',
  reducers: {},
  extraReducers: {
    [authUser.actions.setUser.toString()]: (state, { payload: { token } }) => token
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