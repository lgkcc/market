import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dataUser: {},
    isAuth: false
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state, data) => {
            state.dataUser = {...data.payload}
            state.isAuth = true
        },
        logout: (state) => {
            state.dataUser = {}
            state.isAuth = false
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer