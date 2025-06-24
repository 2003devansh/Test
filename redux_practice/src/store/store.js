import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice"
import jokeReducer from "../features/jokesSlice";

export default configureStore ({
    reducer : {
        counter : countReducer ,
        joke : jokeReducer 
    }
})