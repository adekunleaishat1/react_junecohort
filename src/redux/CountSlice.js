import { createSlice } from "@reduxjs/toolkit";

const countslice = createSlice({
    name:"count",
    initialState:{
        value:0,
        isloading:false
    },
    reducers:{
        Increament:(state)=>{
          state.value += 1
        },
        IncreasebyValue:(state, actions)=>{
           state.value += actions.payload
        }   
    }
})

export default countslice.reducer
export const {Increament, IncreasebyValue} = countslice.actions

