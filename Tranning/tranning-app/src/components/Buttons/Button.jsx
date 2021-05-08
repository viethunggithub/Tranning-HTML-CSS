import React from 'react'
import Main from './Main';
import styled, { keyframes } from 'styled-components'

const button01 = {
    text: "Primary",
    background: "#1fc7d4"
}
const button02 = {
    text: "Secondary",
    background: "transparent"
}
const button03 = {
    text: "Tertiary",
    background: "#eff4f5"
}
const button04 = {
    text: "Text",
    background: "#faf9fa"
}
const button05 = {
    text: "Danger",
    background: "#ed4b9e"
}
const button06 = {
    text: "Subtle",
    background: "#8f80ba"
}
const button07 = {
    text: "Success",
    background: "#31d0aa"
}


const Disable = styled.button`
    font-size:16px;
    font-family: Kanit, sans-serif;
    margin:0px 8px 0px 0px;
    padding:0 24px;
    margin-right: 8px;
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.03em;
    height:48px;
    border:0px;
    background:${props => props.left ? "#e9eaeb" : "#faf9fa"};
    color: #bdc2c4;
    border:${props => props.left ? "0px" : "2px solid #e9eaeb"};
    cursor:not-allowed;
`;
const Rotate = keyframes`
0%{
    transform:rotate(0deg)
}
100%{
    transform:rotate(360deg)
}
`;

const Div_Last = styled.div`
display:flex;
flex-wrap:wrap;
`;
const Div_01 = styled.div`
    width:940px;
    display:flex;
    justify-content:flex-start;
`;

const Button01 = styled.div`
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    display: inline-flex;
    font-family: Kanit, sans-serif;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0px;
    transition: background-color 0.2s ease 0s;
    height: 44px;
    padding: 0px 24px;
    background-color: transparent;
    border: 2px solid rgb(31, 199, 212);
    box-shadow: none;
    color: rgb(31, 199, 212);  
    margin:0 400px 30px 0; 
:hover{
    opacity:0.7;
}
`;
const Button02 = styled(Button01)`
background:#1fc7d4;
box-shadow:rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
color:#ffffff;
width:580px;
`;
const Button03 = styled(Disable)`
opacity:0.5;
margin-bottom:20px;
>i{
margin-left:10px;
animation: ${Rotate} 2s linear infinite;
font-size:13.5px;
}
`;
const Button04 = styled(Button02)`
margin-right:15px;
width:auto;
>img{
    padding:0px 5px
}
`;
const Button05 = styled(Button04)`
    width:48px;
    padding:0px;
    font-size:${props => props.plus ? '12px' : ""};
    color:${props => props.plus ? '#735f9b' : ""};
    background:${props => props.plus ? 'white' : '#1fc7d4'};
`;
const Button06 = styled(Button05)`
    border-radius:100%;
    border:0px;
    width:32px;
    height:32px;
    overflow:hidden;
    font-size:${props => props.green ? "12px" : ""};
    color:${props => props.green ? "#ffffff" : ""};
    background:${props => props.green ? "#31d0aa" : '#ed4b9e'};
`;
const ButtonUn = styled.button`
    margin-bottom:30px;
    font-weight:600;
    :hover{
        cursor:default;
    }
`;

const Button = (props) => {
    return (
        <div style={{margin:"100px 0 100px 200px"}}>
            <ButtonUn>Unstyled Button</ButtonUn>
            <div>
                <Main buttons={button01} />
                <Main buttons={button02} color borderColor notLine />
                <Main buttons={button03} color notLine />
                <Main buttons={button04} color notLine />
                <Main buttons={button05} />
                <Main buttons={button06} />
                <Main buttons={button07} />
                <Disable left>Disable</Disable>
                <Disable>Disable</Disable>
            </div>
            <hr /><br />
            <div>
                <Main buttons={button01} text />
                <Main buttons={button02} color borderColor notLine text />
                <Main buttons={button03} color notLine text />
                <Main buttons={button04} color notLine text />
                <Main buttons={button05} text />
                <Main buttons={button06} text />
                <Main buttons={button07} text />
                <Disable left>Disable</Disable>
                <Disable>Disable</Disable>
            </div>
            <hr /><br />
            <Div_Last>
                <Button01>As an React Router link</Button01>
                <Button02>Full size</Button02>
                <Div_01>
                    <Button03 left>
                        Approving
                        <i className="fas fa-sync-alt"></i>
                    </Button03>
                    <Button03 left>Approving</Button03>
                </Div_01>
                <Div_01>
                    <Button04>
                        <img src="icon.png" alt="sdf" />
                        Start Icon</Button04>
                    <Button04>End Icon
                    <img src="icon.png" alt="sdf" />
                    </Button04>
                    <Button04>
                        <img src="icon.png" alt="sdf" />
                        Start & End Icon
                        <img src="icon.png" alt="sdf" />
                    </Button04>
                </Div_01>
                <Div_01>
                    <Button05>
                        <img src="icon.png" alt="sdf" />
                    </Button05>
                    <Button05 plus>
                        <i className="fas fa-plus"></i>
                    </Button05>
                </Div_01>
                <Div_01>
                    <Button06>
                        <img src="iconPink.png" alt="sdf" />
                    </Button06>
                    <Button06 plus green>
                        <i className="fas fa-plus"></i>
                    </Button06>
                </Div_01>
            </Div_Last>
        </div>
    )
}
export default Button;