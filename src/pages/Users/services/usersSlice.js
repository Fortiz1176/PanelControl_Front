// src/pages/Users/services/usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("users")) || [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
      localStorage.setItem("users", JSON.stringify(action.payload));
    },
    clearUsers: (state) => {
      state.list = [];
      localStorage.removeItem("users");
    },
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
