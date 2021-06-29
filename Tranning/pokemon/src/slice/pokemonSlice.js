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

const pokemon = createSlice({
    name: 'pokemon',
    initialState: {
        status: 'idle',
        error: null,
        result: [],
        next: '',
        previous: '',
        urlExist: '',
        start: 0
    },
    reducers: {
        sortBlank: (state, action) => {
            return {
                status: 'idle',
                error: null,
                result: [],
                next: '',
                previous: '',
                urlExist: '',
                start: 0
            }
        },
        getSorHight: (state, action) => {
            return {
                ...state,
                next: action.payload.next,
                previous: action.payload.previous,
                result: state.result.concat(action.payload.results.reverse())
            }
        },
        getPokemon: (state, action) => {
            return {
                ...state,
                next: action.payload.next,
                result: state.result.concat(action.payload.results),
                urlExist: 'https://pokeapi.co/api/v2/pokemon',
                start: action.payload.start ? action.payload.start : 0
            }
        }
    }
})
export const { getPokemon, sortBlank, getSorHight } = pokemon.actions
export default pokemon.reducer