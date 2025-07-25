import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser: null,
    loading: false,
    error: false,
    result: null,
}

const userSlice= createSlice({
    name:"user",
    initialState,
    reducers: {
        signInStart: (state) =>{
            state.loading= true;
        },
        signInSuccess:(state,action) =>{
            state.currentUser= action.payload;
            state.result= action.payload.message;
            state.loading= false;
            state.error= false;
        },
        signInFailure: (state,action) =>{
            state.loading = false;
            state.error= false;
            state.result= action.payload.message;
        }
    }
})

export const { signInFailure,signInStart, signInSuccess} = userSlice.actions;

export default userSlice.reducer;