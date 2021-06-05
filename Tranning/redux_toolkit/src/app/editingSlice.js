import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from './../RESTfullAPI/callAPI'

export const fetchPutGetProduct = createAsyncThunk(
    'editing/fetchPutGetProduct',
    async(id, thunkAPI) => {
        const res = await CALLAPI("get", `products/${id}`, null)
        thunkAPI.dispatch(putGetProduct(res.data))
    }
)
const myReducer = createSlice({
    name: 'editing',
    initialState: null,
    reducers: {
        putGetProduct: (state, action) => {
            return action.payload
        },
    },
    extraReducers: {
        [fetchPutGetProduct.fulfilled]: (state, action) => {
            // console.log("fulfill");
        }
    }
})
export const { putGetProduct } = myReducer.actions
export default myReducer.reducer