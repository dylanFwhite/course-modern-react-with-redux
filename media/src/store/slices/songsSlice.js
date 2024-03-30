import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            // Redux Toolkit uses Immer functionality
            // by default so we don't have to worry
            // about modifying state
            state.push(action.payload)
        },
        removeSong(state, action) {
            // action.payload === string, song title to remove
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    // Used to watch for action types defined in other slices
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

export const { addSong, removeSong } = songsSlice.actions
export const songsReducer = songsSlice.reducer
