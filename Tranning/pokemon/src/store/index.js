import { configureStore } from '@reduxjs/toolkit'
import cartoon from '../slice/detailsCartoon'
import pokemon from '../slice/pokemonSlice'
import nextCartoon from '../slice/nextCartoon'
import prevCartoon from '../slice/prevCartoon'
import type from '../slice/typeCartoon'
import evolution from '../slice/evolutionCartoon'
import sort from '../slice/sortCartoon'


export default configureStore({
    reducer: {
        cartoon,
        pokemon,
        nextCartoon,
        prevCartoon,
        type,
        evolution,
        sort
    }
})