import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("users")) || [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload.map((user) => ({
        ...user,
        messages: Array.isArray(user.messages) ? user.messages : [],
      }));

      localStorage.setItem("users", JSON.stringify(state.list));
    },

    removeUser: (state, action) => {
      state.list = state.list.filter(
        (user) => user.login.uuid !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(state.list));
    },

    addMessageToUser: (state, action) => {
      const { userId, message } = action.payload;

      const user = state.list.find((u) => u.login.uuid === userId);

      if (user) {
        if (!Array.isArray(user.messages)) {
          user.messages = [];
        }

        user.messages.push(message);
        localStorage.setItem("users", JSON.stringify(state.list));
      }
    },

    clearUsers: (state) => {
      state.list = [];
      localStorage.removeItem("users");
    },
  },
});

export const { setUsers, removeUser, addMessageToUser, clearUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
