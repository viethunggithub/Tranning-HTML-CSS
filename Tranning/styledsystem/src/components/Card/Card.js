import styled from 'styled-components'
import { variant } from 'styled-system'

const Wrap = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgb(69, 42, 122);
    overflow: hidden;
    position: relative;
    width:436px;
    font-weight:600;
    ${variant({
    variants: {
        body: {
            boxShadow: "rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px",
            mb: "20px",
            borderRadius: "32px"
        },
        active: {
            boxShadow: "rgb(0 152 161) 0px 0px 0px 1px, rgb(31 199 212 / 40%) 0px 0px 4px 8px",
            mb: "20px",
            borderRadius: "32px"
        },
        success: {
            boxShadow: "rgb(49 208 170) 0px 0px 0px 1px, rgb(49 208 170 / 20%) 0px 0px 0px 4px",
            mb: "20px",
            borderRadius: "32px"
        },
        warning: {
            boxShadow: "rgb(237 75 158) 0px 0px 0px 1px, rgb(237 75 158 / 20%) 0px 0px 0px 4px",
            mb: "20px",
            borderRadius: "32px"
        },
        disable: {
            boxShadow: "rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;",
            mb: "20px",
            color: "#bdc2c4",
            borderRadius: "32px"
        }
    }
})}
`;
const Header = styled.div`
    padding: 24px;
`;
const Footer = styled(Header)`
    border-top: 1px solid rgb(233, 234, 235);
`;
const CardHeader = styled(Wrap)`
    border-radius:32px;
    background:linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
   .cardHeader{
       padding: 24px;
       h1{
           margin: 0;
       }
   }
`;
const WrapRibbon = styled.div`
    height:150px;
    width:436px;
    background-color: rgb(255, 255, 255);
    border-radius: 32px;
    box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
    color: rgb(69, 42, 122);
    overflow: hidden;
    position: relative;
    margin-top:20px;
    padding:24px;
    font-weight:600;
    position: relative;
    box-sizing: border-box;
    >div:last-child{
        position:absolute;
        top:39px;
        right:-17px;
        transform: rotate(45deg);
        width:110px;
    }
    span:before{
        content:"";
        border:18.5px solid;
        border-color:transparent rgb(189, 194, 196) rgb(189, 194, 196) transparent;
        position:absolute;
        top:0px;
        left:-37px;
    }
    span:after{
        content:"";
        border:18.5px solid;
        border-color:transparent transparent rgb(189, 194, 196) rgb(189, 194, 196);
        position:absolute;
        right:-36px;
    }
`;
const Paragrap = styled.p`
    color:#ffffff;
    text-align:center;
    margin:0;
    position:absolute;
    padding: 8px 0;
    width:100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${variant({
        variants:{
            gray:{
                bg:"rgb(189, 194, 196)"
            },
            green:{
                bg:"rgb(49, 208, 170);"
            },
            pink:{
                bg:"rgb(237, 75, 158);"
            }
        }
    })}
`;

function Sub(props) {
    return (
        <Wrap variant={props.variant}>
            <Header>{props.title}</Header>
            <Footer>Footer</Footer>
        </Wrap>
    )
}
function Ribbon(props) {
    return (
        <WrapRibbon>
            <div>{props.title}</div>
            <div>
            <Paragrap variant={props.variant}>{props.ribbonText}</Paragrap>
                <span bg={props.bg}></span>
            </div>
        </WrapRibbon>
    )
}

function Card() {
    return (
        <>
            <div>
                <Sub title="Body" variant='body' />
                <Sub title="Active" variant='active' />
                <Sub title="Active" variant='success' />
                <Sub title="Active" variant='warning' />
                <Sub title="Active" variant='disable' />
            </div>
            <CardHeader>
                <div className="cardHeader">
                    <h1>Card Header</h1>
                </div>
                <Sub title="Body" />
            </CardHeader>
            <div>
                <Ribbon title="Ribbons will truncate when text is too long" 
                ribbonText = "Ribbon with Long Text asd"
                variant='gray'/>
                <Ribbon title="Card" 
                ribbonText = "Success"
                variant='green'/>
                <Ribbon title="Any Color in the theme" 
                ribbonText = "Failure"
                variant='pink'/>
            </div>
        </>
    )
}
export default Card;