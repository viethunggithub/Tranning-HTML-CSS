import { configureStore } from '@reduxjs/toolkit'
import products from './productsSlice'
import editing from './editingSlice'

export default configureStore({
    reducer: {
        products,
        editing
    }
})