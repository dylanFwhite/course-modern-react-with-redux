import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

// Reducers should only ever contain synchronous functions!!!
// API requests should never be conducted here

export const store = configureStore({
    reducer: {
        users: usersReducer,
        // Use bracket syntax to evaluate property and then use as key
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        // Setup to get the Redux Toolkit Query API to work nicely 
        // with the Redux store 
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
    }
})

// Redux Toolkit Query setup (One time)
setupListeners(store.dispatch)

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
export { 
    useFetchAlbumsQuery, 
    useAddAlbumMutation,
    useRemoveAlbumMutation
} from './apis/albumsApi'
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from './apis/photosApi'
