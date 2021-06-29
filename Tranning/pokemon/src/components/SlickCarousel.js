import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Constant from '../exam/constant'
import NextArrow from './SlickNextArrow'
import PrevArrow from './SlickPrevArrow'


const Div = styled.div`
    margin-top: 100px;
    cursor: pointer;
    .slick-item{
        background-color: #000000;
        img{
            width:100%;
        }
    }
    .slick-next,.slick-prev{
        opacity: 0;
    }
    :hover{
        .slick-next,.slick-prev{
            opacity: 1;
        }
    }
    position: relative;
    .slick-episodes{
        position: absolute;
        top: -49px;
        left: 16%;
        background-color: #232323;
        padding: 10px 15px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        display: flex;
        align-items: center;
        color: #919191;
        font-size: 20px;
        font-weight: 600;
        img{
            margin-right: 10px;
        }
    }
    .slick-slide{
        height: 360px;
        background-color: #000000;
        img{
            opacity: 0.5;
        }
        p{
            padding: 10px 20px;
            color: #ffffff;
        }
    }
    .slick-current{
        background-color: #232323;
        opacity: 1;
        height: 375px;
        border-radius: 5px;
        img{
            opacity: 1;
        }
    }
    
`;
export default function SlickCarousel() {
    var settings = {
        className: "center",
        speed: 500,

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,

        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
        centerMode: true,
        centerPadding: '60px'
    };
    const cartoon = useSelector(state => state.cartoon)
    return (
        <Div>
            <div className="slick-episodes">
                <img src="/image/episodes.png" alt="" />
                {Constant.toUppercaseChart(cartoon.result.name)} Pokémon TV Episodes
            </div>
            <Slider {...settings}>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season13/season13_ep12_ss01.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season02/season02_ep42_ss01.jpg" alt="" />
                    </div>
                    <p>Primeape Goes Bananas</p>
                    <p>S1 | Episode 24</p>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season03/season03_ep39_ss01.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season08/season08_ep49_ss01.jpg" alt="" />
                    </div>
                    <p>Primeape Goes Bananas</p>
                    <p>S1 | Episode 24</p>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season06/season06_ep27_ss01.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season01/season01_ep04_ss01.jpg" alt="" />
                    </div>
                    <p>Primeape Goes Bananas</p>
                    <p>S1 | Episode 24</p>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season16/season16_ep33_ss01.jpg" alt="" />
                    </div>
                </div>
                <div>
                    <div className="slick-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season11/season11_ep12_ss01.jpg" alt="" />
                    </div>
                    <p>Primeape Goes Bananas</p>
                    <p>S1 | Episode 24</p>
                </div>
            </Slider>
        </Div>
    )
}