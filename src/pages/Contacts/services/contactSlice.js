import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const exists = state.list.find(
        (c) => c.id === action.payload.id
      );

      if (!exists) {
        state.list.push(action.payload);
        console.log("Se ha agreagdo a contactos")
        localStorage.setItem(
          "contacts",
          JSON.stringify(state.list)
        );
      }
    },

    removeContact: (state, action) => {
      state.list = state.list.filter(
        (c) => c.id !== action.payload
      );
      localStorage.setItem(
        "contacts",
        JSON.stringify(state.list)
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
