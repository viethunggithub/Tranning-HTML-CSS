import { configureStore } from '@reduxjs/toolkit'
import books from './slice/booksSlice'

const store = configureStore({
    reducer: {
        books
    }
})
export default store