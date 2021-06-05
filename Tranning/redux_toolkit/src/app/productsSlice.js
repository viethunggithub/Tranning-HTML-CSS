import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from './../RESTfullAPI/callAPI'

export const fetchGetProduct = createAsyncThunk(
    'products/fetchGetProduct',
    async(params, thunkAPI) => {
        const res = await CALLAPI("get", "products", null)
        thunkAPI.dispatch(getProduct(res.data))
    }
)
export const postAddProduct = createAsyncThunk(
    'products/postAddProduct',
    async(product, thunkAPI) => {
        const res = await CALLAPI("post", `products`, product)
        thunkAPI.dispatch(addProduct(res.data))
    }
)
export const deleteDelProduct = createAsyncThunk(
    'products/deleteDelProduct',
    async(product, thunkAPI) => {
        await CALLAPI("delete", `products/${product.id}`, null)
        thunkAPI.dispatch(delProduct(product))
    }
)
export const putEditProduct = createAsyncThunk(
    'products/putEditProduct',
    async({ id, product }, thunkAPI) => {
        const res = await CALLAPI("put", `products/${id}`, product)
        thunkAPI.dispatch(editProduct(res.data))
    }
)


const myReducer = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        getProduct: (state, action) => {
            return action.payload
        },
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        delProduct: (state, action) => {
            state.splice(state.findIndex(product => product.Code_ID === action.payload.Code_ID), 1)
        },
        editProduct: (state, action) => {
            state[state.findIndex(product => product.Code_ID === action.payload.Code_ID)] = action.payload
        }
    },
    extraReducers: {
        [fetchGetProduct.fulfilled]: (state, action) => {
            // console.log(action);
        },
        [fetchGetProduct.rejected]: (state, action) => {
            console.log(action);
        },
        [fetchGetProduct.pending]: (state, action) => {
            // console.log(action);
        }
    }
})
export const { getProduct, addProduct, delProduct, editProduct } = myReducer.actions
export default myReducer.reducer;