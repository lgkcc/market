import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubApi} from "./market/market.api";
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
