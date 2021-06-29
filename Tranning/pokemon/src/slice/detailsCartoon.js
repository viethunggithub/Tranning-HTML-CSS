import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from '../api/callapi'
import { example } from '../exam/exec'


const initialState = {
    status: 'idle',
    error: null,
    result: example
}
export const fetchProduct = createAsyncThunk(
    'product/fetchAllProduct',
    async(id, thunkAPI) => {
        const res = await CALLAPI("get", `https://pokeapi.co/api/v2/pokemon/${id}`, null)
        thunkAPI.dispatch(getProduct(res.data))
    }
)

const myReducer = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProduct: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        }
    }
})
export const { getProduct } = myReducer.actions
export default myReducer.reducer;