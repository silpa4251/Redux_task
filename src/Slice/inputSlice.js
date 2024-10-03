import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name : 'input',
    initialState: {
        name:'',
    },
    reducers:{
        addToDisplay: (state,action) => {
          state.name = action.payload;
        },
    },
})

export const {addToDisplay} = inputSlice.actions;
export default inputSlice.reducer;
