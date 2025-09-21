import { configureStore } from "@reduxjs/toolkit";
import productReducer  from "../features/products/productsSlice"
import authReducer from "../features/auth/authSlice.js"
import counterReducer from "../features/counter/counterSlice.js"

export const store = configureStore({
    reducer:{
        products: productReducer,
        auth: authReducer,
        counter: counterReducer
    }
})


// steps:
//create store
//wrap app component to provicer
// create slice
//register reducer in store
