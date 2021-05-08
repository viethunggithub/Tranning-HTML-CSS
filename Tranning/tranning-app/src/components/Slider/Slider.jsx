import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    margin:100px 0 0 200px;
    width:300px;
    position: relative;
    >div:first-child{
        height:10px;
        width:10px;
        background:#1fc7d4;
        position:absolute;
        top:20px;
        left:-5px;
        z-index:3;
    };
    >div:nth-child(2){
        height:10px;
        width:10px;
        background:#1fc7d4;
        position:absolute;
        top:19px;
        left:23px;
        z-index:3;
        display:${props => props.display};
    };
    >div:nth-child(3){
        height:2px;
        width:300px;
        background:transparent;
        position:absolute;
        z-index:3;
        top:18px;
        display:flex;
        justify-content:flex-end;
        >div{
            height:2px;
            width:${props => props.transparent}%;
            background:#d7caec;
        }
    };
    >div:nth-child(4){
        position:absolute;
        top:35px;
        left:${props => props.left}px;
        font-weight:600;
        font-size:16px;
        font-family:Knit, sans-serif;
        letter-spacing:0.2rem;
    };
    >label {
        width:100%;
        position:relative;
        >input{
            :hover{
                cursor: pointer;
            };
            appearance: none;
            ::-webkit-slider-runnable-track{
                background:#faf9fa;
            };
            ::-webkit-slider-thumb{
                appearance: none;
                background:url(${props => props.url.url});
                height:${props => props.url.height};
                width:${props => props.url.width};
                border-radius:100%;
            };
            :after{
                content:"";
                height:10px;
                width:${props => props.myProps}%;
                background:#1fc7d4;
                position:absolute;
                top:19px;
            };      
        };
        >img:nth-child(2){
            position:absolute;
            top:16px;
            left:-16px;
        };
        >img:last-child{
            right:-0px;
            top:-3px;
            position:absolute;
            display:none;
        }
    }
    
`;

function Slider() {

    const [width, setWidth] = useState(50 * 285 / 300);
    const [percent, setPercent] = useState(50)
    const [left, setLeft] = useState(135)
    const [url, setUrl] = useState({
        height: "35px",
        width: "27px",
        url: "./slider1.png"
    })
    const [display, setDisplay] = useState("block")
    const [transparent, setTransparent] = useState(50 - (26.5*100/300/2))

    const onMyChange = (e) => {
        setWidth(e.target.value * 285 / 300)
        setPercent(e.target.value);
        setLeft((e.target.value - 50)*2.7 + 135)
        setTransparent((50 - (27.3*100/300/2)) - (e.target.value-50)*(27.3*100/3000))
        
        if (e.target.value > 90) {
            setUrl({
                height: "34px",
                width: "26px",
                url: "./slider2.png"
            })
        } else {
            setUrl({
                height: "35px",
                width: "27px",
                url: "./slider1.png"
            })
        }

        if (e.target.value < 10) {
            setDisplay("none")
        } else {
            setDisplay("block")
        }
    }

    useEffect(()=>{
        var div = document.querySelectorAll("div")
        if(percent > 90){
            div[9].innerHTML = "MAX"
        }else{
            div[9].innerHTML = `${percent}%`
        }
    })

    return (
        <Div transparent={transparent} display={display} url={url} myProps={width} left={left}>
            <div></div>
            <div></div>
            <div>
                <div></div>
            </div>
            <div>{percent}%</div>
            <label htmlFor="range">
                <input id="range" onChange={onMyChange} step="10" max="100" min="0" type="range" />
                <img src="./slider.png" alt="" />
                <img src="./slider2.png" alt="" />
            </label>
        </Div>
    )
}
export default Slider;