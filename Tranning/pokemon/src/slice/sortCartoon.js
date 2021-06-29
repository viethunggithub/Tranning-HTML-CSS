import { createSlice } from '@reduxjs/toolkit'

const sortCartoon = createSlice({
    name: "sortCartoon",
    initialState: {
        status: 'idle',
        error: null,
        result: 2
    },
    reducers: {
        sortHightNumber: (state, action) => {
            return {
                ...state,
                result: 3
            }
        },
        sortLowerNumber: (state, action) => {
            return {
                ...state,
                result: 2
            }
        },
        sortAtoZ: (state, action) => {
            return {
                ...state,
                result: 4
            }
        },
        sortZtoA: (state, action) => {
            return {
                ...state,
                result: 5
            }
        }
    }
})
export const { sortAtoZ, sortHightNumber, sortLowerNumber, sortZtoA } = sortCartoon.actions
export default sortCartoon.reducer