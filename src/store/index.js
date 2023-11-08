import { configureStore } from "@reduxjs/toolkit";
import loginslice from "./slices/loginslice";

const store = configureStore({
    reducer:{
        login: loginslice
    }
})
export default store;