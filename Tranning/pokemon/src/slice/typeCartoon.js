import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from '../api/callapi'


export const fetchTypeCartoon = createAsyncThunk(
    'weaknessesReducer/fetchWeaknesses',
    async(url, thunkAPI) => {
        const res = await CALLAPI('get', url, null)
        thunkAPI.dispatch(getTypeCartoon(res.data))
    }
)
const typeReducer = createSlice({
    name: 'weaknessesReducer',
    initialState: {
        status: 'idle',
        error: null,
        result: null
    },
    reducers: {
        getTypeCartoon: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        }
    }
})
export const { getTypeCartoon } = typeReducer.actions
export default typeReducer.reducer