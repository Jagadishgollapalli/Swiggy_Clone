import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./slices/SearchSlice";
import cartReducer from "./slices/CartSlice";

const store = configureStore({
    reducer:{
        search: searchReducer,
        cart: cartReducer, 
    }
})

export default store;