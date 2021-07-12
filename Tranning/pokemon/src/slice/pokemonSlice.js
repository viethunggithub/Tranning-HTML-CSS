import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import CALLAPI from '../api/callapi'
import Constant from '../exam/constant'

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (url, thunkAPI) => {
        const res = await CALLAPI("get", url, null)
        thunkAPI.dispatch(getPokemon(res.data))
    }
)
export const fetchSortHightPokemon = createAsyncThunk(
    'pokemon/fetchSortHightPokemon',
    async (url, thunkAPI) => {
        const res = await CALLAPI("get", url, null)
        thunkAPI.dispatch(getSorHight(res.data))
    }
)
export const fetchSortAllPokemon = createAsyncThunk(
    'pokemon/fetchSortAllPokemon',
    async (params, thunkAPI) => {
        const res = await CALLAPI("get", params.url, null)
        const arraysAtoZ = Constant.toSortPokemon(res.data.results, params.isSortAtoZ)
        thunkAPI.dispatch(getPokemon({
            results: Constant.toPaginationPokemon(arraysAtoZ, params.start),
            start: params.start
        }))

    }
)

export const fetchSurpriseMe = createAsyncThunk(
    'pokemon/fetchSurpriseMe',
    async (params, thunkAPI) => {
        var result = []
        for (var i = 0; i < params.length; i++) {
            const res = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${params[i]}`, null)
            result.push({
                name: res.data.name,
                url: `https://pokeapi.co/api/v2/pokemon/${params[i]}`
            })
        }
        thunkAPI.dispatch(getSurprise_me({
            results: result,
            surprise_me: params
        }))
    }
)

//nhiem vu xoa sach state de chuyen sang sort
export const fetchSortBlank = createAsyncThunk(
    'pokemon/fetchSortBlank',
    async (url, thunkAPI) => {
        const res = await CALLAPI("get", url, null)
        thunkAPI.dispatch(sortBlank(res.data))
        thunkAPI.dispatch(getSorHight(res.data))
    }
)
export const fetchBlackBlank = createAsyncThunk(
    'pokemon/fetchBlackBlank',
    async (url, thunkAPI) => {
        const res = await CALLAPI("get", url, null)
        thunkAPI.dispatch(sortBlank(res.data))
        thunkAPI.dispatch(getPokemon(res.data))
    }
)
export const fetchAllBlank = createAsyncThunk(
    'pokemon/fetchAllBlank',
    async (params, thunkAPI) => {
        const res = await CALLAPI("get", params.url, null)
        const arraysAtoZ = Constant.toSortPokemon(res.data.results, params.isSortAtoZ)
        thunkAPI.dispatch(sortBlank(res.data))
        thunkAPI.dispatch(getPokemon({
            results: Constant.toPaginationPokemon(arraysAtoZ, params.start),
            start: params.start
        }))
    }
)

export const fetchAllCartoon = createAsyncThunk(
    'pokemon/fetchAllCartoon',
    async (params, thunkAPI) => {
        const res = await CALLAPI('get', params.url, null)
        var arraySearch = Constant.toSearchPokemon(res.data.results, params.keyString)
        thunkAPI.dispatch(sortBlank(res.data))
        thunkAPI.dispatch(getPokemon({
            results: arraySearch,
            start: params.start
        }))
    }
)
export const fetchSurpriseMeBlank = createAsyncThunk(
    'pokemon/fetchSurpriseMe',
    async (params, thunkAPI) => {
        thunkAPI.dispatch(sortBlank())
        var result = []
        for (var i = 0; i < params.length; i++) {
            const res = await CALLAPI('get', `https://pokeapi.co/api/v2/pokemon/${params[i]}`, null)
            result.push({
                name: res.data.name,
                url: `https://pokeapi.co/api/v2/pokemon/${params[i]}`
            })
        }
        thunkAPI.dispatch(getSurprise_me({
            results: result,
            surprise_me: params
        }))
    }
)


const pokemon = createSlice({
    name: 'pokemon',
    initialState: {
        status: 'idle',
        error: null,
        result: [],
        sortType: 'Lowest Number (First)',
        next: '',
        previous: '',
        urlExist: '',
        start: 0,
        surprise_me: []
    },
    reducers: {
        sortBlank: (state, action) => {
            state.status = 'idle'
            state.error = null
            state.result = []
            state.next = ''
            state.previous = ''
            state.urlExist = ''
            state.start = 0
            state.surprise_me = []
        },
        getSorHight: (state, action) => {
            state.next = action.payload.next
            state.previous = action.payload.previous
            state.result = state.result.concat(action.payload.results.reverse())
        },
        getPokemon: (state, action) => {
            state.next = action.payload.next
            state.result = state.result.concat(action.payload.results)
            state.urlExist = 'https://pokeapi.co/api/v2/pokemon'
            state.start = action.payload.start ? action.payload.start : 0
        },
        changeHightNumber: (state, action) => {
            state.sortType = action.payload
        },
        getSurprise_me: (state, action) => {
            state.result = state.result.concat(action.payload.results)
            state.surprise_me = state.surprise_me.concat(action.payload.surprise_me)
        }
    },
    extraReducers: {
        [fetchSurpriseMe.fulfilled]: (state, action) => {
            state.status = 'Fulfilled'
        }
    }
})
export const { getPokemon, sortBlank, getSorHight, changeHightNumber, getSurprise_me } = pokemon.actions
export default pokemon.reducer