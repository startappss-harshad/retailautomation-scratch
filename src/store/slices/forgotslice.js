import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginData = createAsyncThunk('login', async(data, {rejectwithvalue})=>{
    const signin= await fetch('/endPoint')
    .then(res=> res.json()).then(res=> res)
    .catch(err=> err)
})


const forgotslice = createSlice({
    name: 'login',
    initialState:{
        loading:false,
        data:[{email:"",password:""}],
        error:false
    },
    reducers:{
        forgotformdata(state,action){
            console.log('from reducer', action.payload)
            state.data.push(action.payload)
        }

    },
    extraReducers:(builder)=>{
        builder.addCase('Pending',(state)=>{
            state.loading=true;
            return state
        })
        builder.addCase('Fulfilled', (state,{payload})=>{
            state.loading=false;
            state.data.push(payload)
        })
        builder.addCase('Rejected',(state, {payload})=>{
            state.loading = false;
            state.error = payload
            return state
        })
    }
})
export const {forgotformdata} = forgotslice.actions
export default forgotslice.reducer;