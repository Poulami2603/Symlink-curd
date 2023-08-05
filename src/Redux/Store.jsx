import { configureStore } from "@reduxjs/toolkit";
import { CurdSlice } from "./Slice";

export const Store = configureStore({
    reducer: {
        Curd: CurdSlice.reducer
    }
})