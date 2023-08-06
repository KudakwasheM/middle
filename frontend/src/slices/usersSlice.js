import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      const user = action.payload;
      state.push(user);
    },
  },
});
export const selectAllUsers = (state) => state.users;

export const { getUsers, addUser } = usersSlice.actions;

export default usersSlice.reducer;
