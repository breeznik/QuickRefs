import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
//reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

//slice return two things actions and reducers
//reducer gives state
