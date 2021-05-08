import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
display:flex;
align-items:center;
margin-bottom:30px;
`;

const Button = styled.button`
font-size:16px;
font-family: Kanit, sans-serif;
color: ${props => props.color ? "#1fc7d4" : "#ffffff"};
background:${props => props.buttons.background};
margin:0px 8px 0px 0px;
padding:0 24px;
margin-right: 8px;
align-items: center;
border: ${props => props.borderColor ? "2px solid" : "0px"};
border-color:${props => props.borderColor ? "#1fc7d4" : ""};
border-radius: 16px;
cursor: pointer;
font-weight: 600;
letter-spacing: 0.03em;
height:48px;
box-shadow:${props => props.notLine ? "none" : "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset"};
:hover{
    opacity:0.7;
}
`;

const Button02 = styled(Button)`
padding:0px 16px;
height:32px;
`;
const Button03 = styled(Button)`
padding:0px 8px;
height:20px;
font-size:12px;
`;


const Main = (props) => {
    let { buttons, color, borderColor, notLine,text } = props
    let paragraps = text ? `${buttons.text} anchor` : buttons.text 
    return (
        <Div>
            <Button buttons={buttons} color={color} notLine={notLine}
                borderColor={borderColor}>
                {paragraps} MD
                 </Button>
            <Button02 buttons={buttons} color={color} notLine={notLine}
                borderColor={borderColor}>
                {paragraps} SM
                </Button02>
            <Button03 buttons={buttons} color={color} notLine={notLine}
                borderColor={borderColor}>
                {paragraps} XS
                </Button03>
        </Div>
    )
}
export default Main;