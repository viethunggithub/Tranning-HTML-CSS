import Stats from './Stats'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchProduct } from '../slice/detailsCartoon'
import { fetchNextCartoon } from '../slice/nextCartoon'
import { fetchPrevCartoon } from '../slice/prevCartoon'
import Constant from '../exam/constant'
import { fetchTypeCartoon } from '../slice/typeCartoon'
import { fetchEvolution } from '../slice/evolutionCartoon'
import SlickCarousel from './SlickCarousel'
import SlickCard from './SlickCard'
import ArrowSection from './ArrowSection'

const Div = styled.div`
    padding: 0 40px 0 35px;
    background: #424242 url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png');
    position: relative;
    .details-backspace{
        background-color: #ffffff;
        height: 90px;
    }
    .wrap-details{
        padding-bottom: 90px;
        background: #fff url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
        .wide{
            background-color: #ffffff;
        }
    }
    .col{
        :nth-child(1){
            padding-right: 2px;
        }
        :nth-child(2){
            padding-left: 2px;
        }
    }
    .pagination{
        background-color: #a4a4a4;
        cursor: pointer;
        text-decoration: none;
        height: 118px;
        .nextCartoon, .prevCartoon{
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            padding-left: 210px;
            align-items: center;
            align-items: flex-start;
            padding-top: 20px;
            font-size: 24px;
            color: #616161;
            font-weight: 600;
            i{
                background-color: #ffffff;
                padding: 4px 8px;
                border-radius: 50%;
                font-size: 16px;
            }
            span{
                :nth-child(2){
                    color: #ffffff;
                    padding: 0 20px;
                }
            }
        }
        .nextCartoon{
            justify-content: flex-end;
            padding-right: 210px;
        }
        transition: .5s all;
        :hover{
            background-color: #30a7d7;
        }
    }
    .details-cartoon{
        position: relative;
    }
    .name-cartoon{
        font-family: "Flexo-Medium",arial,sans-serif;
        color: #212121;
        float: left;
        font-size: 225%;
        margin-top: 0.5em;
        text-align: center;
        width: 82%;
        word-break: break-word;
        position: absolute;
        background-color: #ffffff;
        bottom: 0;
        height: 51px;
        left: 8%;
        padding-top: 10px;
        ::before{
            background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/notches/notch-white-xxl.png') no-repeat 0 0;
            bottom: 0;
            content: '';
            position: absolute;
            height: 52px;
            width: 75px;
            left: -75px;
        };
        ::after{
            background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/notches/notch-white-xxl.png') no-repeat 0 0;
            bottom: 0;
            content: '';
            position: absolute;
            height: 52px;
            width: 75px;
            right: -75px;
            transform: rotateY(180deg)
        }
    }
    .details-content{
        >.row{
            >.col{
                padding-left: 10px;
            }
        }
        padding: 50px 10px 0 10px;
        background-color: #ffffff;
        .img{
            background-color: #f1f1f1;
            border-radius: 8px;
            object-fit: fill;
            img{
                width: 100%;
            }
        }
    }
    .stats-cartoon{
        background-color: #a4a4a4;
        padding:20px;
        border-radius: 10px;
        margin-top: 15px;
        h3{
            font-size: 16px;
            color: #313131;
            margin-bottom: 20px;
        }
    }
    .stats{
        display: flex;
        justify-content: space-evenly;
        .col{
            :nth-child(1), :nth-child(2){
                padding: 0 12px;
            }
        }
    }
    .details{
        padding: 10px;
        p{
            font-size: 18px;
            color: #212121;
        }
        .version{
            margin: 20px 0;
        }
        .properties{
            background-color: #30a7d7;
            border-radius: 10px;
            padding: 20px 10px;
            justify-content: space-between;
            margin: 0 0 20px 0;
            p,b{
                padding: 10px 0;
                font-weight: 600;
            }
            b{
                color: #ffffff;
            }
            i{
                font-size: 30px;
                margin-right: 10px;
            }
        }
        .type{
            display: flex;
            margin: 20px 0;
            button{
                margin-right: -100%;
                width: 32.29%;
                border-radius: 5px;
                margin: 0.5em 8px 0 0;
                padding: 8px 0;
                text-align: center;
                color: #ffffff;
                font-weight: 600;
                border: none;
                cursor: pointer;
            }
        }
        .weaknesses {
            >.row{
                margin: 0;
            }
            >.row>.col{
                padding: 0 10px 0 0;
            }
            button{
                width: 100%;
                border-radius: 5px;
                margin: 0.5em 8px 0 0;
                padding: 8px 0;
                text-align: center;
                color: #ffffff;
                font-weight: 600;
                border: none;
                cursor: pointer;
            }
        }
    }
    .evolutions{
        background: transparent url('https://assets.pokemon.com/static2/_ui/img/chrome/body_gray_bg.png');
        border-radius: 10px;
        margin: 50px 12px;
        color: #ffffff;
        padding:20px 20px 30px;
        position: relative;
        ::before{
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            border: 12px solid;
            border-color: transparent transparent #ffffff #ffffff;
        }
        .evolutions-list{
            display: flex;
            margin-top: 20px;
        }
        .evolutions-item{
            position: relative;
            .evolution-arrow{
                position: absolute;
                top: 50px;
                right: 0;
                i{
                    font-size:60px;
                }
            }
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h4{
                margin: 10px 0;
            }
            b{
                color: #a4acaf;
            }
            img{
                padding: 6px;
                width: 150px;
                border: 5px solid #ffffff;
                border-radius: 50%;
                cursor: pointer;
                background-color: #616161;
            }
            .evolutions-btn{
                display: flex;
                width: 100%;
                justify-content: center;
            }
            button{
                border: none;
                margin-right: 5px;
                border-radius: 5px;
                font-size: 75%;
                padding: 1px 0;
                text-align: center;
                width: 30%;
                background-color: #9bcc50;
                cursor: pointer;
            };
            :last-child{
                .evolution-arrow{
                    display: none;
                }
            }
        }
    }
    .explore-pokemon{
        display: flex;
        justify-content: flex-end;
        margin: 0 12px 0 0;
        padding-bottom: 20px;
        button{
            cursor: pointer;
            padding: 12px 20px;
            border-radius: 5px;
            background-color:#ee6b2f;
            border: none;
            color: #ffffff;
            font-weight: 600;
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
    .watch-pokemon{
        a{
            text-decoration: none;
            color: #ffffff;
            font-weight: 600;
            background-color: #282828;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            font-size: 105%;
            line-height: 125%;
            margin: 1.5625%;
            padding: 0.75em 1.25em 0.675em;
            text-align: center;
            font-family: "Flexo-Demi",arial,sans-serif;
            width: 100%;
        }
        text-align: right;
        margin:10px 200px 0 0;
    }
`;
export default function Details() {
    const params = useParams()
    const cartoon = useSelector(state => state.cartoon)
    const type = useSelector(state => state.type)
    const evolution = useSelector(state => state.evolution)
    const dispatch = useDispatch()
    const idNext = Number(params.id) + 1 > 898 ? 1 : Number(params.id) + 1
    const idPrev = Number(params.id) - 1 < 1 ? 898 : Number(params.id) - 1


    useEffect(() => {
        dispatch(fetchProduct(params.id))
        dispatch(fetchNextCartoon(idNext))
        dispatch(fetchPrevCartoon(idPrev))
        dispatch(fetchTypeCartoon(cartoon.result.types[0].type.url))
        dispatch(fetchEvolution(Constant.toOfsetCartoon(params.id)))
    }, [dispatch, params.id])


    return (
        <Div>
            <div className="wrap-details">
                <div className="details-backspace"></div>
                <ArrowSection />
                <div className="grid wide">
                    <div className="details-cartoon">
                        <div className="name-cartoon">
                            {Constant.toUppercaseChart(cartoon['result']['name'])} {Constant.toChangeID(cartoon['result']['id'])}
                        </div>
                    </div>
                    <div className="details-content">
                        <div className="row">
                            <div className="col l-6 m-6 c-12">
                                <div className="img">
                                    <img src={`${cartoon['result']['sprites']['other']['official-artwork']['front_default']}`} alt="" />
                                </div>
                                <div className="stats-cartoon">
                                    <h3>Stats</h3>
                                    <div className="stats">
                                        {
                                            cartoon.result.stats.map((item, index) => {
                                                return <div className="col l-2 m-2 c-2" key={index}>
                                                    <Stats label={`${Constant.toUppercaseChart(item.stat.name)}`} number={item.base_stat} />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col l-6 m-6 c-12 details">
                                <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
                                <div className="version">
                                    <h3>Versions:</h3>
                                    <span className="version-blue"></span>
                                    <span className="version-red"></span>
                                </div>
                                <div className="properties row">
                                    <div className="pro1 col l-6 m-6 c-6">
                                        <b>Height</b>
                                        <p>123</p>
                                        <b>Weight</b>
                                        <p>123</p>
                                        <b>Gender</b>
                                        <p>
                                            <i className="fas fa-mars"></i>
                                            <i className="fas fa-venus"></i>
                                        </p>
                                    </div>
                                    <div className="pro2 col l-6 m-6 c-6">
                                        <b>Category</b>
                                        <p>123</p>
                                        <b>Abilities</b>
                                        <p>
                                            {
                                                Constant.toUppercaseChart(Constant.toOptionAbility(cartoon.result.abilities)[0].ability.name)
                                            }
                                        </p>
                                    </div>
                                </div>
                                <h3>Type</h3>
                                <div className="type">
                                    {
                                        cartoon.result.types.map((item, index) => {
                                            return <button key={index} style={Constant.toChangeBg(item.type.name, '#ffffff')}>
                                                {Constant.toUppercaseChart(item.type.name)}
                                            </button>
                                        })
                                    }
                                </div>
                                <h3>Weaknesses</h3>
                                <div className="weaknesses">
                                    <div className="row">
                                        {
                                            type.result != null &&
                                            type.result.damage_relations.double_damage_from.map((item, index) => {
                                                return <div className="col l-4 m-4 c-4" key={index}>
                                                    <button style={Constant.toChangeBg(item.name, '#ffffff')}>
                                                        {Constant.toUppercaseChart(item.name)}
                                                    </button>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="evolutions">
                        <h2>Evolutions</h2>
                        <div className="evolutions-list">
                            {
                                evolution.result.map((item, index) => {
                                    return <div className="col l-4 m-4 c-12 evolutions-item" key={index}>
                                        <img src={`${item.sprites.other['official-artwork'].front_default}`} alt="" />
                                        <h4>{Constant.toUppercaseChart(item.name)} <b>{Constant.toChangeID(item.id)}</b></h4>
                                        <div className="evolutions-btn">
                                            {
                                                item.types.map((type, ind) => {
                                                    return <button style={Constant.toChangeBg(type.type.name)} key={ind}>{Constant.toUppercaseChart(type.type.name)}</button>
                                                })
                                            }
                                        </div>
                                        <div className="evolution-arrow">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="explore-pokemon">
                        <Link to="/">
                            <button>Explore More Pokémon</button>
                        </Link>
                    </div>
                </div>

                <SlickCarousel />
                <div className="watch-pokemon">
                    <a href="#">Watch Pokémon TV</a>
                </div>
                <SlickCard />
                <div className="watch-pokemon">
                    <a href="#">Explore More Cards</a>
                </div>
            </div>
            <div className="content-bottom">
                <div className="content-bottom-white"></div>
            </div>
        </Div>
    )
}
