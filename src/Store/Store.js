import { configureStore } from "@reduxjs/toolkit";
import  inputSlice from "../Slice/inputSlice";

 export const store = configureStore({
    reducer:{
        input: inputSlice
    }
})