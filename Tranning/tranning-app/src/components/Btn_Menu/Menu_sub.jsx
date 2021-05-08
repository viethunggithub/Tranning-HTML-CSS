import React, { useState } from 'react'
import styled from 'styled-components'
import useChangeColor from './useChangeColor';

const Div = styled.div`
    background:#faf9fa;
    >div{
        background:#eff4f5;
        display:inline-block;
        border-radius:16px;
        margin:0 600px 30px 0;
    }
`;

const Button = styled.button`
    color:${props => props.color.color};
    align-items: center;
    border: 0px;
    border-radius: 16px;
    cursor: pointer;
    display: inline-flex;
    font-family: Kanit, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0px;
    height:48px;
    padding: 0px 24px;
    background:${props => props.color.background};
    box-shadow: ${props => props.color.color === "#eff4f5" ? "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset" : "none"};
    :hover{
        opacity:0.7
    };
    >a{
        text-decoration:none;
        color:${props => props.color.color};
    }
`;

const Button_Mini = styled(Button)`
    padding:0 16px;
    height:32px;
`;


function Menu_sub() {
    const [colorssss, onClickssss] = useChangeColor("#1fc7d4", "#eff4f5")
    const [color, onClick] = useChangeColor("#1fc7d4", "#eff4f5")
    const [colors, onClicks] = useChangeColor("#8f80ba", "#eff4f5")
    const [colorss, onClickss] = useChangeColor("#1fc7d4", "#eff4f5")
    const [colorsss, onClicksss] = useChangeColor("#8f80ba", "#eff4f5")

    function onClick_Max(colorNumber) {
        onClick(colorNumber)
        onClicks(colorNumber)
    }
    function onClick_Min(colorNumber) {
        onClickss(colorNumber)
        onClicksss(colorNumber)
    }
    return (
        <Div>
            <div>
                <Button color={color.color1} onClick={() => onClick_Max("color1")}
                >Button 1</Button>
                <Button color={color.color2} onClick={() => onClick_Max("color2")}
                >Button 2</Button>
                <Button color={color.color3} onClick={() => onClick_Max("color3")}
                >Button 3</Button>
                <Button color={color.color4} onClick={() => onClick_Max("color4")}
                >Button 4</Button>
            </div>
            <div>
                <Button_Mini color={colorss.color1} onClick={() => onClick_Min("color1")}
                >Button 1</Button_Mini>
                <Button_Mini color={colorss.color2} onClick={() => onClick_Min("color2")}
                >Button 2</Button_Mini>
                <Button_Mini color={colorss.color3} onClick={() => onClick_Min("color3")}
                >Button 3</Button_Mini>
                <Button_Mini color={colorss.color4} onClick={() => onClick_Min("color4")}
                >Button 4</Button_Mini>
            </div>
            <div>
                <Button color={colors.color1} onClick={() => onClick_Max("color1")}
                >Button 1</Button>
                <Button color={colors.color2} onClick={() => onClick_Max("color2")}
                >Button 2</Button>
                <Button color={colors.color3} onClick={() => onClick_Max("color3")}
                >Button 3</Button>
                <Button color={colors.color4} onClick={() => onClick_Max("color4")}
                >Button 4</Button>
            </div>
            <div>
                <Button_Mini color={colorsss.color1} onClick={() => onClick_Min("color1")}
                >Button 1</Button_Mini>
                <Button_Mini color={colorsss.color2} onClick={() => onClick_Min("color2")}
                >Button 2</Button_Mini>
                <Button_Mini color={colorsss.color3} onClick={() => onClick_Min("color3")}
                >Button 3</Button_Mini>
                <Button_Mini color={colorsss.color4} onClick={() => onClick_Min("color4")}
                >Button 4</Button_Mini>
            </div>
            <hr />
            <div>
                <Button color={colorssss.color1}
                ><a target="_blank" href="https://pancakeswap.finance/">Link 1</a>
                </Button>
                <Button color={colorssss.color2}
                ><a target="_blank" href="https://pancakeswap.finance/">Link 1</a>
                </Button>
                <Button color={colorssss.color3}
                ><a target="_blank" href="https://pancakeswap.finance/">Link 1</a>
                </Button>
            </div>
        </Div>
    )
}
export default Menu_sub;


