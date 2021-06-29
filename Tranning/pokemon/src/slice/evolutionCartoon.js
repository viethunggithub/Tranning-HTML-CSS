import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from '../api/callapi'


export const fetchEvolution = createAsyncThunk(
    'evolutionReducer/fetchEvolution',
    async(id, thunkAPI) => {
        var arrays = []
        const res1 = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${id}`)
        const res2 = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${Number(id)+1}`)
        const res3 = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${Number(id)+2}`)
        arrays.push(res1.data, res2.data, res3.data)
        thunkAPI.dispatch(getEvolution(arrays))
    }
)
const evolutionReducer = createSlice({
    name: 'evolutionReducer',
    initialState: {
        status: 'idle',
        error: null,
        result: []
    },
    reducers: {
        getEvolution: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        }
    }
})
export const { getEvolution } = evolutionReducer.actions
export default evolutionReducer.reducer