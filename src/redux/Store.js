import { configureStore } from "@reduxjs/toolkit";
import countslice from "./CountSlice"
import userslice from "./UserSlice"

export default configureStore({
       reducer:{
         countslice,
         userslice
       }
})