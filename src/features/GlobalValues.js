import {createSlice } from "@reduxjs/toolkit"
const initialState={
    BackendUrl:"http://localhost:5000"
}
const GlobalValuesSlice=createSlice({
    name:"GlobalValuesSlice",
    initialState,
    reducers:{
    }
})


export default  GlobalValuesSlice.reducer
