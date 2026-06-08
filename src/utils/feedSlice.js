import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed : (state, action) =>{
            return action.payload
        },

        removeFedd : (state, action)=>{
            return null
        }
    }
})

export const {addFeed , removeFedd} = feedSlice.actions
export default feedSlice.reducer