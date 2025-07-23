import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
   name:"user",
   initialState:{
    isloading:false,
    alluser:null,
    error:null
   },
   reducers:{
    FetchingUser:(state)=>{
       state.isloading = true
       state.alluser = null
       state.error = null
    },
    FetchingSuccessful:(state, action)=>{
       state.isloading = false
       state.alluser = action.payload
       state.error = null
    }
   }
})


export default userslice.reducer
export const {FetchingSuccessful, FetchingUser} = userslice.actions