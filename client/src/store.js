// import {authSlice} from "./slices/UserSlice" ;
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./state";

const store = configureStore ({
    
    reducer: {
        auth: authSlice,
    }
}) ;

export default store ;