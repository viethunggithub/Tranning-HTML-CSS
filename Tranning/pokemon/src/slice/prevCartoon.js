import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { example } from '../exam/exec'
import CALLAPI from '../api/callapi'

export const fetchPrevCartoon = createAsyncThunk(
    'prevCartoon/fetchPrevCartoon',
    async(id, thunkAPI) => {
        const res = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${id}`, null)
        thunkAPI.dispatch(getPrevCartoon(res.data))
    }
)

const prevCartoon = createSlice({
    name: 'prevCartoon',
    initialState: {
        status: 'idle',
        error: null,
        result: example
    },
    reducers: {
        getPrevCartoon: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        }
    }
})
export const { getPrevCartoon } = prevCartoon.actions
export default prevCartoon.reducer