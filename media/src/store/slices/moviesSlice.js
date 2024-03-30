import { createSlice } from "@reduxjs/toolkit"
import { reset } from '../actions'

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

// Create slice generates and actions object that contains
// the `action reference` functions
export const { addMovie, removeMovie } = moviesSlice.actions
export const moviesReducer = moviesSlice.reducer
