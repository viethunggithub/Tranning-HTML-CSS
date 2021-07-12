import styled from 'styled-components'
import { useState, useEffect } from 'react'
import ListCartoon from './ListCartoon'
import ProCartoon from './ProCartoon'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCartoon, changeHightNumber, fetchSurpriseMeBlank } from '../slice/pokemonSlice'
import { randomNumber } from '../exam/randomNumber'

const Div = styled.div`
    background: #424242 url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png');
    width: 100%;
    .content{
        margin: 0 35px;
        background: #fff url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
    }
    .content-container{
        max-width: 1300px;
        margin: 0 auto;
        .title{
            padding: 25px 0 16px 15px;
            font-size: 30px;
            letter-spacing: .2rem;
            color: #919191;
            background-color: #ffffff;
            cursor: default;
        }
    }
    .search-container{
        background:#313131;
        padding: 32px 0 24px;
        label{
            font-size: 27px;
            color: #ffffff;
        }
        p{
            color:#ffffff
        }
        .search-input{
            display: flex;
            align-items: center;
            input{
                height: 40px;
                padding: 4px 8px;
                font-size: 100%;
                width: 100%;
                box-shadow: #919191 -1px 0px 1px 1px;
                border-radius: 4px;
            }
            i{
                font-size: 20px;
            }
            button{
                height: 50px;
                width: 55px;
                padding: 16px;
                margin-left: 25px;
                background: #ee6b2f;
                color: #ffffff;
                border-radius: 5px;
                border: none;
                cursor: pointer;
                :hover{
                    background-color: #da471b;
                }
            }
        }
        .search-text{
            padding: 17px 10px 17px 20px;
            background-color: #4dad5b;
            color: #ffffff;
            font-size: 20px;
            border-radius: 5px;
            font-weight: 600;
            :hover{
                background-color: #369143;
            }
        }
    }
    .show-advanced{
        height: 60px;
        background-color: #616161;
        .show-advanced-search{
            position: relative;
            display: flex;
            justify-content: center;
            font-size: 16px;
            color: #ffffff;
            padding-bottom: 10px;
            b{
                position: absolute;
                background-color: #616161;
                bottom: -67px;
                width: 100%;
                text-align: center;
                padding-bottom: 10px;
                cursor: pointer;
                img{
                    position: absolute;
                    margin-left: 10px;
                }
            }
            ::after{
                background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/notches/large-notch-darkgray.png') no-repeat;
                background-size: 38px 18px;
                content: " ";
                height: 18px;
                position: absolute;
                width: 38px;
                bottom: -67px;
                right:-38px;
                transform: rotate(180deg);
            }
            ::before{
                background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/notches/large-notch-darkgray.png') no-repeat;
                background-size: 38px 18px;
                content: " ";
                height: 18px;
                position: absolute;
                width: 38px;
                bottom: -67px;
                left:-38px;
                transform: rotateX(180deg);
            }
        }
    }
    .cartoon{
        background-color: #ffffff;
        padding: 50px 20px 20px;
        i{
            font-size: 18px;
            color: #ffffff;
            margin-right: 10px;
        }
        button, .sort-type{
            cursor: pointer;
            height: 49px;
            width: 100%;
            background-color: #30a7d7;
            border: 0;
            outline: 0;
            padding: 12px 21px 12px 10px;
            border-radius: 5px;
            font-size: 16px;
            color:#ffffff;
            font-weight: 600;
            position: relative;
        }
        button{
            :hover{
                background-color: #1b82b1;
            }
        }
        ul{
            list-style: none;
            color: #ffffff;
        }
        .sort-type{
            position: relative;
            background-color:#313131;
            height: 40px;
            align-items: center;
            display: flex;
            img{
                margin-right: 15px;
            }
            i{
                position: absolute;
                right:-10px;
                top:0;
                font-size: 25px;
                padding: 7px 10px;
                border-radius: 5px;
                border: 1px solid transparent;
                height: 40px;
            }
            ul{
                position: absolute;
                background-color: #616161;
                right: 0;
                left:0;
                top: 40px;
                li{
                    width: 100%;
                    padding: 10px;
                    cursor: pointer;
                    :hover{
                        background-color: #313131;
                    }
                }
            }
            :hover i{
                background-color: #000000;
            }
        }
    }
    .cartoon-list{
        margin: 0 10px 50px 0;
        b{
            display: flex;
            justify-content: center;
            margin-top: 40px;
        }
    }
    .content-bottom{
        height: 35px;
        width: 100%;
        position: relative;
        .content-bottom-white{
            background-color: #ffffff;
            height: 6px;
            width: 65%;
            position: absolute;
            top: 0;
            left:18%;
            ::before, ::after{
                position: absolute;
                content: '';
                border: 4px solid;
                border-color: transparent transparent #2f2f2f #2f2f2f;
            }
            ::after{
                top: 0;
                right: 0;
                border-color: transparent  #2f2f2f #2f2f2f transparent;
            }
        }
    }
`;
export default function Content() {
    const dispatch = useDispatch()
    const [isForm, setIsForm] = useState('')
    const [isShow, setIsShow] = useState(false)
    const [titleSort, setTitleSort] = useState('Lowest Number (First)')
    const pokemon = useSelector(state => state.pokemon)
    const [isLoading, setIsLoading] = useState('')


    const onSelect = () => {
        setIsShow(!isShow)
    }
    const onClickSort = (e) => {
        setTitleSort(e.target.innerHTML)
        switch (e.target.getAttribute('data')) {
            case 'Highest Number (First)':
                dispatch(changeHightNumber('Highest Number (First)'))
                break;
            case 'A-Z':
                dispatch(changeHightNumber('A-Z'))
                break;
            case 'Z-A':
                dispatch(changeHightNumber('Z-A'))
                break;
            default:
                dispatch(changeHightNumber('Lowest Number (First)'))
                break;
        }
    }

    const onChangeForm = (e) => {
        setIsForm(e.target.value)
    }
    const onSearch = () => {
        dispatch(fetchAllCartoon({
            url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898',
            keyString: isForm,
            start: 0
        }))
    }
    
    const onSurprise = () => {
        var surprice_me = []
        for (var i = 1; i <= 20; i++) {
            randomNumber(surprice_me, 898)
        }
        dispatch(fetchSurpriseMeBlank(surprice_me))
    }

    useEffect(() => {
        if (pokemon.result.length === 0 && pokemon.status != 'Fulfilled') {
            setIsLoading('Đang tải....')
        }else{
            setIsLoading("")
        }
    }, [pokemon])

    return (
        <Div>
            <div className="content">
                <div className="content-container">
                    <div className="grid wide">
                        <div className="title">Pokédex</div>
                    </div>
                </div>

                <div className="search-container">
                    <div className="search">
                        <div className="grid wide row">
                            <div className="col l-6 m-6 c-12">
                                <label>Name or Number</label>
                                <div className="search-input">
                                    <input onChange={onChangeForm} type="text" />
                                    <button onClick={onSearch}>
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                                <p>Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</p>
                            </div>
                            <div className="col l-6 m-6 c-12">
                                <div className="search-text">Search for a Pokémon by name or using its National Pokédex number.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="show-advanced">
                    {/* <h1>Hung</h1> */}
                    <div className="row">
                        <div className="col l-4 m-4 c-4"></div>
                        <div className="col l-4 m-4 c-4 show-advanced-search">
                            <b>Show Advanced Search
                            <img src="/image/showAdvan.png" alt="" />
                            </b>

                        </div>
                        <div className="col l-4 m-4 c-4"></div>
                    </div>
                </div>

                <div className="grid wide cartoon">
                    <div className="surprice-sort">
                        <div className="row">
                            <div className="col l-5 m-5 c-5">
                                <button onClick={onSurprise}>
                                    <i className="fas fa-sync-alt"></i>
                                        Surprise Me!
                                </button>
                            </div>
                            <div className="col l-2 m-2 c-2"></div>
                            <div className="col l-5 m-5 c-5">
                                <ul className="sort-type" onClick={onSelect}>
                                    <img src="/image/pokemon.png" alt="" />
                                    <label>{titleSort}</label>
                                    {
                                        isShow ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>
                                    }
                                    <li>
                                        {
                                            isShow && <ul>
                                                <li data="1" onClick={onClickSort}>Sort result by...</li>
                                                <li data="Lowest Number (First)" onClick={onClickSort}>Lowest Number (First)</li>
                                                <li data="Highest Number (First)" onClick={onClickSort}>Highest Number (First)</li>
                                                <li data="A-Z" onClick={onClickSort}>A-Z</li>
                                                <li data="Z-A" onClick={onClickSort}>Z-A</li>
                                            </ul>
                                        }
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="cartoon-list">
                        <b>{isLoading}</b>
                        <ListCartoon />
                    </div>
                    <div className="cartoon-pro">
                        <div className="row">
                            <ProCartoon p='Legions of tentacled Pokémon are lurking inside Pokémon Sword and Pokémon Shield’s Pokémon Dens, and you might find Shiny Grapploct.' h3='The Pokémon in These Max Raid Battles Will Grab You' color='#30a7d7' bg='#1847d7' image='https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-sword-shield/max-raid-battles/06252021/sword-shield-169-en.jpg' />
                            <ProCartoon p='This weeklong event features Bidoof that know special attacks, Shiny Bidoof, and lots more Bidoofery. Shiny Bidoof, and lots more Bidoofery.' h3='There’s a Bidoof Breakout in Pokémon GO' color='#524022' bg='#b89355' image='https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-go/06252021/pokemon-go-169.jpg' />
                            <ProCartoon p='Put your Pokémon knowledge to the test with this quiz about the region first explored inPokémon Black and Pokémon White.' h3='See Just How Well You Know the Unova Region with This Quiz' color='#cccccc' bg='#282828' image='https://assets.pokemon.com/assets//cms2/img/misc/_tiles/25th/quiz/unova/unova-169.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-bottom">
                <div className="content-bottom-white"></div>
            </div>
        </Div >
    )
}