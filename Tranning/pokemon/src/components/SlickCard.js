import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Constant from '../exam/constant'
import NextArrow from './SlickNextArrow'
import PrevArrow from './SlickPrevArrow'



const Div = styled.div`
    margin-top: 150px;
    .slick-card-item{
        img{
            width: 100%;
        }
        margin: 10px 5px 0;
    }
    .slick-slide{
        height: 400px;
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
        height: 430px;
        border-radius: 5px;
        img{
            opacity: 1;
        }
    }
    position: relative;
    .slick-card{
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
    .slick-next,.slick-prev{
        opacity: 0;
    }
    :hover{
        .slick-next,.slick-prev{
            opacity: 1;
        }
    }
`;
export default function SlickCard() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: true,
        centerPadding: '60px',
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
    };
    const cartoon = useSelector(state => state.cartoon)
    return (
        <Div>
            <div className="slick-card">
                <img src="/image/card.png" alt="" />
                {Constant.toUppercaseChart(cartoon.result.name)} Cards
            </div>
            <Slider {...settings}>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/EX6/EX6_EN_55.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/DET/DET_EN_SM198.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/DET/DET_EN_1.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/SM35/SM35_EN_1.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_1.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_2.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/BW5/BW5_EN_1.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/EX4/EX4_EN_39.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/POP2/POP%20Series%202_EN_12.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/EX6/EX6_EN_54.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
                <div>
                    <div className="slick-card-item">
                        <img src="https://assets.pokemon.com/assets/cms2/img/cards/web/EX6/EX6_EN_55.png" alt=""/>
                    </div>
                    <p>{Constant.toUppercaseChart(cartoon.result.name)}</p>
                </div>
            </Slider>
        </Div>
    );
}