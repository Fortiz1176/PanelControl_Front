import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) ?? {},
    token: JSON.parse(localStorage.getItem("token")) ?? "",
    clients: [],
    details: null,
  },
  reducers: {
    /*Reducer para manejar la autenticación del usuario*/
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.clients = [];
      state.details = null;
    },
    setClients: (state, action) => {
      const { clients } = action.payload;
      state.clients = clients;
    },
    setAddClientsAuth: (state, action) => {
      const { client } = action.payload;

      if (client) {
        state.clients.push(client);
      }
    },
    setDetails: (state, action) => {
      const { details } = action.payload;
      state.details = details;
    },
    setUpdateUser: (state, action) => {
      const prev = JSON.parse(localStorage.getItem("user") || "{}");

      const updatedUser = {
        ...prev,
        ...action.payload,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      state.user = updatedUser;
    },
  },
});
export const {
  setCredentials,
  logout,
  setClients,
  setDetails,
  setAddClientsAuth,
  setUpdateUser,
} = authSlice.actions;

export default authSlice.reducer;
export const currentUser = (state) => state.auth.user.user;
export const currentToken = (state) => state.auth.user.token;
