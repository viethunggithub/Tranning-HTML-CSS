import styled, { keyframes } from 'styled-components'


const IconKeyframe = keyframes`
    0%{
        transform:translateY(0px)
    }
    50%{
        transform:translateY(6px)
    }
    75%{
        transform:translateY(0px)
    }
    100%{
        transform:translateY(4px)
    }
`;
const Icon = styled.a`
    padding: 9px 10px 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${props => props.boxS};
    line-height: 60px;
    background: ${props => props.bg};
    border-left: ${props => props.bd_left};
    border-right: ${props => props.bd_right};
    :not(.pokemon) > img{
        :hover{
            animation: ${IconKeyframe} .2s ease;
        }
    }
`;
function Icons(props) {
    return (
        <div className="col l-4 m-4 c-4">
            <Icon href="" boxS={props.boxS} bg={props.bg} bd_right={props.bd_right} bd_left={props.bd_left} className={props.class_Name}>
                <img src={`https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/${props.image}`} alt="" />
            </Icon>
        </div>
    )
}


const Promotion = styled.a`
    display: flex;
    align-items: center;
    padding-left: 8px;
`;
function Promotions(props) {
    return (
        <Promotion href="">
            <img src={`https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/${props.image}`} alt="" />
        </Promotion>
    )
}



const Div = styled.div`
    height: 62px;
    border-bottom: solid 2px #dedede;
    background-color: #f5f5f5;;
    overflow: hidden;
    .promotion,.button{
        display: flex;
    }
`;
export default function Header() {
    return (
        <Div className="container">
            <div className="grid wide">
                <div className="row">
                    <div className="button col l-5 m-12 c-12">
                        <Icons bg="#ffffff" boxS="0 0 7px 1px #666666" image="logo-pokemon-79x45.png" class_Name="pokemon" />
                        <Icons image="logo-pokemoncenter-79x45.png" />
                        <Icons bd_left="solid 2px #dedede" bd_right="solid 2px #dedede" image="logo-tcgo-79x45.png" />
                        <label htmlFor="header-promotion-slide" className="arow-header-right">
                            <i className="fas fa-chevron-right"></i>
                        </label>
                    </div>
                    <input type="checkbox" id="header-promotion-slide" />
                    <div className="promotion col l-7 header-promotion-slide">
                        <Promotions image="25th-176x50.jpg" />
                        <Promotions image="swsh06-gus-175-en.jpg" />
                        <Promotions image="new-pokemon-snap-gus-175.jpg" />
                        <a href="/" className="promotion-last">
                            <img src='https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/promo-app-gallery-176x50.jpg' alt="" />
                        </a>
                        <label htmlFor="header-promotion-slide">
                            <div className="arow-header-left l-0">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </Div>
    )
}

