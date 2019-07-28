import { createSlice } from "redux-starter-kit";

// todo заменить все any
const users = createSlice({
  slice: "users",
  initialState: [],
  reducers: {
    add: (state: any, action: { payload: any }): any => {
      return [...state, ...action.payload];
    },
    remove: (state: any, action: { payload: number }) => {
      state.splice(
        state.findIndex((message: any) => message.id !== action.payload),
        1
      );
    }
  }
});

const { actions, reducer } = users;

export const { add, remove } = actions;

export default reducer;
