import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

// Reducers should only ever contain synchronous functions!!!
// API requests should never be conducted here

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
