import { createSlice } from "@reduxjs/toolkit";

const initialState: [] = [];
//reducers
const cartSlice = createSlice({
    name: "sampleSlice",
    initialState,
    reducers: {
        smapleAction: (state, action) => { }
    },
});

export const { smapleAction } = cartSlice.actions;
export default cartSlice.reducer;
