import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from '../../api/index'

export const fetch_get_books = createAsyncThunk(
    'booksReducer/fetch_get_books',
    async(params, thunkAPI) => {
        const res = await CALLAPI('get', 'Books', null)
        thunkAPI.dispatch(get_books(res.data.records))
    }
)
export const fetch_get_book = createAsyncThunk(
    'booksReducer/fetch_get_book',
    async(params, thunkAPI) => {
        const res = await CALLAPI('get', `../Books/${params.id}`, null)
        thunkAPI.dispatch(get_book(res.data))
    }
)
export const fetch_get_author = createAsyncThunk(
    'booksReducer/fetch_get_author',
    async(params, thunkAPI) => {
        const res = await CALLAPI('get', `../Authors/${params}`, null)
        thunkAPI.dispatch(get_author(res.data.fields.Name))
    }
)
export const fetch_delete_book = createAsyncThunk(
    'booksReducer/fetch_delete_book',
    async(params, thunkAPI) => {
        const res = await CALLAPI('delete', `Books/${params}`, null)
        thunkAPI.dispatch(delete_book(params))
    }
)
export const fetch_post_book = createAsyncThunk(
    'booksReducer/fetch_post_book',
    async(params, thunkAPI) => {
        const res = await CALLAPI('post', `Books`, params)
        thunkAPI.dispatch(post_book(res.data.records[0]))
    }
)
export const fetch_editing = createAsyncThunk(
    'booksReducer/fetch_editing',
    async(params, thunkAPI) => {
        const res = await CALLAPI('get', `../Books/${params}`, null)
        thunkAPI.dispatch(get_editing(res.data))
    }
)
export const fetch_put_book = createAsyncThunk(
    'booksReducer/fetch_put_book',
    async(params, thunkAPI) => {
        const res = await CALLAPI('put', `../Books/${params.id}`, params.data)
        thunkAPI.dispatch(put_book(res.data))
    }
)

export const fetch_sort_book = createAsyncThunk(
    'booksReducer/fetch_sort_book',
    async(params, thunkAPI) => {
        const res = await CALLAPI('get', `Books?sort%5B0%5D%5Bfield%5D=${params.params1}&&sort%5B0%5D%5Bdirection%5D=${params.params2}`, null)
        thunkAPI.dispatch(sort_book(res.data.records))
    }
)
export const fetch_search_book = createAsyncThunk(
    'booksReducer/fetch_search_book',
    async(params, thunkAPI) => {
        const res = await CALLAPI('get', `Books`, null)
        thunkAPI.dispatch(search_book({ params, data: res.data.records }))
    }
)

const booksReducer = createSlice({
    name: 'booksReducer',
    initialState: {
        books: [],
        bookUpdate: [],
        book: null,
        editing: null,
        author: ''
    },
    reducers: {
        get_books: (state, action) => {
            state.books = action.payload
            state.bookUpdate = action.payload
            console.log(action.payload)
        },
        get_book: (state, action) => {
            state.book = action.payload
        },
        get_author: (state, action) => {
            state.author = action.payload
        },
        delete_book: (state, action) => {
            const indexId = state.books.findIndex((ele) => {
                return ele.id === action.payload
            })
            state.books.splice(indexId, 1)
        },
        post_book: (state, action) => {
            state.books.push(action.payload)
            state.bookUpdate.unshift(action.payload)
        },
        get_editing: (state, action) => {
            state.editing = action.payload
        },
        put_book: (state, action) => {
            const indexId = state.books.findIndex((ele) => {
                return ele.id === action.payload.id
            })
            state.books[indexId] = action.payload
        },
        sort_book: (state, action) => {
            state.books = action.payload
        },
        search_book: (state, action) => {
            let arrSearch = []
            action.payload.data.map((book, ind) => {
                if (book.fields.Name.toUpperCase().indexOf(action.payload.params.toUpperCase()) != -1) {
                    arrSearch.push(book)
                }
            })
            state.books = arrSearch
        }
    }
})
export const {
    get_books,
    get_book,
    get_author,
    delete_book,
    post_book,
    get_editing,
    put_book,
    sort_book,
    search_book
} = booksReducer.actions
export default booksReducer.reducer