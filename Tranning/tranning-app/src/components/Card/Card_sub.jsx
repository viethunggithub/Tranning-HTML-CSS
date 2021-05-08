import styled from 'styled-components'
import { useState } from 'react'

const Div = styled.div`
display:inline;
border:0.5px solid ${props => props.card.boderColor};
box-shadow: ${props => props.card.boxShadow};
background:#ffffff;
margin:50px 0px 0px 100px;
border-radius:30px;
font-size:16px;
color:${props => props.card.text === "Disable" ? "#cbcfd0" : "#452a7a"};
font-family:Kanit, sans-serif;
font-weight:600;
width:436px;
>div{
    padding:24px;
    width:388px;
};
>div>p{
    margin:0px;
};
>div:first-child{
    border-bottom:2px solid #faf9fa;
}
`;

const Card_Header = styled.div`
margin:20px 0px 0px 100px;
border-radius:30px;
overflow:hidden;
width:436px;
color:#452a7a;
font-size:16px;
font-family:Kanit,sans-serif;
>div{
    padding:24px;
    background:#ffffff;
    border-bottom:1px solid #eaf1f6;
    font-weight:600;
};
>div:first-child{
    font-size:40px;
    background: linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
};
`;

const Ribbon = styled(Card_Header)`
    box-shadow: rgb(238 234 244) 0px 0px 5px inset;
    margin-bottom:20px;
    position:relative;
    >div:first-child{
        background: black;
        height:112px;
        padding:0px;
    };
    >div:last-child{
        height:150px;
        padding:24px;
    };
    >div:nth-child(2){
        padding:6.23px 0px;
        width:90px;
        text-align:center;
        position:absolute;
        top:28px;
        right:40px;
        background:#7645d8;
        border:0px;
        color:#ffffff;
        font-weight:300;
        transform:rotate(45deg);
        right:-2px;
        top:27px
    };
    >div:nth-child(2)::after{
        content:"";
        border:17px solid;
        border-color:transparent transparent #7645d8 #7645d8;
        position:absolute;
        top:0px;
        right:-32px;
    };
    >div:nth-child(2)::before{
        content:"";
        border:17px solid;
        border-color:transparent #7645d8 #7645d8 transparent;
        position:absolute;
        top:0px;
        left:-32px;
    }
`;

const Ribbons = styled.div`
    position:relative;
    margin:0 0 20px 100px;
    background:#ffffff;
    width:436px;
    height:150px;
    padding:24px;
    border-bottom:1px solid #bdc2c4;
    border-radius:30px;
    font-family:Kanit,sans-serif;
    color:#452a7a;
    font-weight:600;
    >div:first-child{
        transform:rotate(45deg);
        right:-3px;
        top:32px;
        background:${props => props.ribbon.color};
        position:absolute;
        width:100px;
        height:34px;
        padding:8px 0px;
        color:#ffffff;
        z-index:1000;
        >p{
            margin:0px;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align:center;
        }
    };

    >div:first-child::after{
        content:"";
        border:17px solid;
        border-color:transparent transparent ${props => props.ribbon.color} ${props => props.ribbon.color};
        position:absolute;
        top:-0.5px;
        right:-33px
    }
    >div:first-child::before{
        content:"";
        border:17px solid;
        border-color:transparent ${props => props.ribbon.color} ${props => props.ribbon.color} transparent ;
        position:absolute;
        top:0px;
        left:-33px
    }
`;


function Card_sub() {
    const [card, setCard] = useState({
        card1: {
            color: "#ffffff",
            text: "Body",
            boderColor: "#ffffff",
            boxShadow: "rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;"
        },
        card2: {
            color: "#a8e6ec",
            text: "Active",
            boderColor: "#069ba4",
            boxShadow: "rgb(0 152 161) 0px 0px 0px 1px, rgb(31 199 212 / 40%) 0px 0px 4px 8px;"
        },
        card3: {
            color: "#d2f1fe",
            text: "Success",
            boderColor: "#63dabe",
            boxShadow: "rgb(49 208 170) 0px 0px 0px 1px, rgb(49 208 170 / 20%) 0px 0px 0px 4px;"
        },
        card4: {
            color: "#f8e5f0",
            text: "Warning",
            boderColor: "#ed4b9e",
            boxShadow: "rgb(237 75 158) 0px 0px 0px 1px, rgb(237 75 158 / 20%) 0px 0px 0px 4px;"
        },
        card5: {
            color: "#ffffff",
            text: "Disable",
            boderColor: "#ffffff",
            boxShadow: "rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;"
        }
    })
    const [ribbon, setRibbon] = useState({
        rb1: {
            main: "Ribbons will truncate when text is too long",
            text: "Ribbon with Long Text",
            color: "#bdc2c4"
        },
        rb2: {
            main: "Card",
            text: "Success",
            color: "#31d0aa"
        },
        rb3: {
            main: "Any Color in the theme",
            text: "Failure",
            color: "#ed4b9e"
        }
    })


    return (
        <div style={{margin:"100px 0 100px 200px"}}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Div card={card.card1}>
                    <div>
                        <p>{card.card1.text}</p>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </Div>
                <Div card={card.card2}>
                    <div>
                        <p>{card.card2.text}</p>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </Div>
                <Div card={card.card3}>
                    <div>
                        <p>{card.card3.text}</p>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </Div>
                <Div card={card.card4}>
                    <div>
                        <p>{card.card4.text}</p>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </Div>
                <Div card={card.card5}>
                    <div>
                        <p>{card.card5.text}</p>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </Div>
            </div>
            <hr /><br />
            <Card_Header>
                <div>Card Header</div>
                <div>Body</div>
                <div>Footer</div>
            </Card_Header>
            <hr /><br />
            <Ribbon>
                <div></div>
                <div>Ribbon</div>
                <div>Body</div>
            </Ribbon>
            <Ribbons ribbon={ribbon.rb1}>
                <div>
                    <p>{ribbon.rb1.text}</p>
                </div>
                <div>{ribbon.rb1.main}</div>
            </Ribbons>
            <Ribbons ribbon={ribbon.rb2}>
                <div>
                    <p>{ribbon.rb2.text}</p>
                </div>
                <div>{ribbon.rb2.main}</div>
            </Ribbons>
            <Ribbons ribbon={ribbon.rb3}>
                <div>
                    <p>{ribbon.rb3.text}</p>
                </div>
                <div>{ribbon.rb3.main}</div>
            </Ribbons>

        </div>
    )
}
export default Card_sub;