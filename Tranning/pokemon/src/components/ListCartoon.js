import styled, { keyframes } from 'styled-components'
import ItemCartoon from './ItemCartoon'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemon, fetchSortBlank, fetchBlackBlank, fetchSortHightPokemon, fetchAllBlank, fetchSortAllPokemon } from '../slice/pokemonSlice'
import { useState } from 'react'


const cartoon_keyframe = keyframes`
    from{
        transform:translateY(-3px)
    }
    to{
        transform:translateY(0)
    }
`;
const Div = styled.div`
    .cartoon-item{
        margin-top: 50px;
        img{
            background-color: #f2f2f2;
            width: 100%;
        }
        p{
            color: #919191;
        }
        h5{
            color: #313131;
            font-size: 24px;
            margin: 5px 0;
        }
        .options{
            display: flex;
            justify-content: flex-start;
        }
        span{
            font-family: "Flexo-Medium",arial,sans-serif;
            border-radius: 3px;
            line-height: 18px;
            max-width: 110px;
            margin: 0 1.5625% 0 0;
            width: 38.4375%;
            float: left;
            text-transform: none;
            font-size: 11px;
            text-align: center;
            color: #ffffff;
        }
        :hover{
            animation: ${cartoon_keyframe} .3s ease;
        }
        cursor: pointer;
    }
    .loadMore{
        font-size: 100%;
        font-family: "Flexo-Demi",arial,sans-serif;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        line-height: 125%;
        margin: 1.5625%;
        padding: 0.75em 1.25em 0.675em;
        text-transform: none;
        background-color: #30a7d7;
        color: #fff;
        width: 200px;
        margin: 50px auto;
        :hover{
            background-color:#1b82b1
        }
    }
`;
export default function ListCartoon() {
    const pokemon = useSelector(state => state.pokemon)
    const urlExist = useSelector(state => state.pokemon.urlExist)
    const sort = useSelector(state => state.sort)
    const start = useSelector(state => state.pokemon.start)
    const eleListCartoon = document.querySelector('.cartoon-list')
    const dispatch = useDispatch()
    const [isLoadMore, setIsLoadMore] = useState(false)
    const [isLoad, setIsLoad] = useState(false)



    const onLoadCartoon = () => {
        var loadMore = document.querySelector('.loadMore')
        var cartoonPro = document.querySelector('.cartoon-pro')
        loadMore.setAttribute('style', "display:none")
        cartoonPro.setAttribute('style', "display:none")

        switch (sort.result) {
            case 3:
                dispatch(fetchSortHightPokemon(pokemon.previous))
                break;
            case 4:
                dispatch(fetchSortAllPokemon({
                    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
                    start: start + 20,
                    isSortAtoZ: 1
                }))
                break;
            case 4:
                dispatch(fetchSortAllPokemon({
                    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
                    start: start + 20,
                    isSortAtoZ: -1
                }))
                break;
            default:
                dispatch(fetchPokemon(pokemon.next))
                break;
        }
        setIsLoadMore(true)
    }


    const scrollFunction = () => {
        const windowScrollY = window.scrollY
        const windowHeight = window.innerHeight
        const eleListCartoonHeight = eleListCartoon.clientHeight
        const eleListCartoonTop = eleListCartoon.offsetTop
        if (windowHeight + windowScrollY >= eleListCartoonHeight + eleListCartoonTop) {
            setIsLoad(true)
            setTimeout(function () {
                setIsLoad(false)
            }, 1000)
        }
    }

    useEffect(() => {
        if (isLoad) {
            switch (sort.result) {
                case 3:
                    dispatch(fetchSortHightPokemon(pokemon.previous))
                    break;
                case 4:
                    dispatch(fetchSortAllPokemon({
                        url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
                        start: start + 20,
                        isSortAtoZ: 1
                    }))
                    break;
                case 5:
                    dispatch(fetchSortAllPokemon({
                        url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
                        start: start + 20,
                        isSortAtoZ: -1
                    }))
                    break;
                default:
                    dispatch(fetchPokemon(pokemon.next))
                    break;
            }
        }
    }, [isLoad])

    useEffect(() => {
        if (isLoadMore) {
            window.addEventListener('scroll', scrollFunction);
        };
        return () => {
            window.removeEventListener('scroll', scrollFunction)
        }
    }, [isLoadMore, pokemon])


    useEffect(() => {
        switch (sort.result) {
            case 3:
                dispatch(fetchSortBlank('https://pokeapi.co/api/v2/pokemon/?offset=878&limit=20'))
                break;
            case 2:
                if (urlExist !== 'https://pokeapi.co/api/v2/pokemon') {
                    dispatch(fetchBlackBlank('https://pokeapi.co/api/v2/pokemon'))
                }
                break;
            case 4:
                dispatch(fetchAllBlank({
                    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
                    start: 0,
                    isSortAtoZ: 1
                }))
                break;
            case 5:
                dispatch(fetchAllBlank({
                    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
                    start: 0,
                    isSortAtoZ: -1
                }))
                break;
            default:
                break;
        }
    }, [sort])


    return (
        <Div>
            <div className="row">
                {
                    pokemon.result.map((item, index) => {
                        return <ItemCartoon item={item} key={index} />
                    })
                }
            </div>
            <div onClick={onLoadCartoon} className="loadMore">
                <span>Load more Pokémon</span>
            </div>
        </Div>
    )
}