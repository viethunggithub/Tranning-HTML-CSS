import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    margin:20px 0 100px 30px;
    >h3{
        margin:20px 0 5px 0;
        font-weight:600px;
        font-family:Knit, sans-serif;
        color:#452a7a;
    }
    >div{
        background:#eeeaf4;
        height:16px;
        width:336px;
        border-radius:10px;
        overflow:hidden;
        position:relative;
        >div{
            background:#7645d9;
            width:${props => props.width}%;
            height:16px;
            transition:.4s;
        }
    };
    >button{
        margin-top:10px;
        font-size:16px;
        font-family:Knit, sans-serif;
        color:#ffffff;
        background:#1fc7d4;
        padding:0 16px;
        box-shadow:rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
        font-weight: 600;
        cursor: pointer;
        letter-spacing: 0.03em;
        height: 32px;
        outline:none;
        border-color:#1fc7d4;
        border-radius:20px;
        :hover{
            opacity:0.6
        }
    };
    >div:nth-child(4){
        border-radius:0px;
    }
`;

const Divs = styled(Div)`
    >div{
        >div{
            width:${props=>props.secondary}%;
            background:#b298e7;
            >div{
                width:${props => props.primary}%;
                background:#7645d9;
                height:16px;
                position:absolute;
                transition:.4s;
            }
        }
    }
`;
const random =() =>{
    return (Math.floor(Math.random()*20+1))*5
}

function Main() {
    const [width, setWidth] = useState(25);
    const [primary,setPrimary] = useState(25)
    const [secondary,setSecondary] = useState(50)

    const onRandom = () => {
        setWidth(random())
    }
    const onPrimary = () => {
        setPrimary(random())
    }
    const onSecondary = () => {
        setSecondary(random())
    }
    return (
        <div>
            <Div width={width}>
                <h3>Round</h3>
                <div>
                    <div></div>
                </div>
                <h3>Flat</h3>
                <div>
                    <div></div>
                </div>
                <button onClick={onRandom}>Random Progress</button>
            </Div>

            <Divs primary={primary} secondary={secondary}>
                <div>
                    <div>
                        <div></div>
                    </div>
                </div>
                <button onClick={onPrimary}>Random Primary Progress</button><br/>
                <button onClick={onSecondary}>Random Secondary Progress</button>
            </Divs>
        </div>
    )
}
export default Main;