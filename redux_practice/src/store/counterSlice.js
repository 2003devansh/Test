// importing createSlice from redux tool kit

import { createSlice } from "@reduxjs/toolkit";

// function that manage all the state in the counter i.e: increment and the decrement

export const counterSlice = createSlice({
    name: "counter", // naming convention i.e this is the action in this case
     initialState : {
        value : 0 
    } ,
    reducers : {
        increment : state =>{
            state.value += 1 
        },
        decrement : state =>{
            state.value -= 1 ; 
        }
    }
})

export const {increment,decrement} = counterSlice.actions 

export default counterSlice.reducer