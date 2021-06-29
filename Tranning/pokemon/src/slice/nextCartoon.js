import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { example } from '../exam/exec'
import CALLAPI from '../api/callapi'


export const fetchNextCartoon = createAsyncThunk(
    'nextReducer/fetchNextCartoon',
    async(id, thunkAPI) => {
        const res = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${id}`, null)
        thunkAPI.dispatch(getNextCartoon(res.data))
    }
)

const nextReducer = createSlice({
    name: 'nextReducer',
    initialState: {
        status: 'idle',
        error: null,
        result: example
    },
    reducers: {
        getNextCartoon: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        }
    }
})
export const { getNextCartoon } = nextReducer.actions
export default nextReducer.reducer