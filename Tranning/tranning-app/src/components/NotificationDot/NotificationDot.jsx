import { useState } from "react";
import styled from "styled-components";


const Div = styled.div`
    margin: 0 0 100px 20px;
    height:48px;
    font-size:16px;
    font-family:Kanit, sans-serif;
    line-height:48px;

    align-items: center;
    border: 0px;
    border-radius: 16px;
    box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
    cursor: pointer;

    display: inline-flex;
    font-weight: 600;
    letter-spacing: 0.03em;
    transition: background-color 0.2s ease 0s;
    height: 48px;

    padding: 0px 24px;
    background-color: rgb(31, 199, 212);
    color: white;
    position:relative;

    :after{
        content:"";
        height:10px;
        width:10px;
        background:red;
        border:2px solid #ffffff;
        position:absolute;
        border-radius:100%;
        top:0px;
        right:0px;
    };
    :hover{
        opacity:0.6;
    }
`;
const Divs = styled.div`
    margin: 0 0 100px 20px;
    font-size:16px;
    font-family:Knit, sans-serif;
    background:#eff4f5;
    display:inline-flex;

    border-radius:16px;
    
    >button{
        align-items: center;
        border: 0px;
        border-radius: 16px;
        :hover{
            opacity:0.6;
        };
       
        cursor: pointer;
        display: inline-flex;
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.03em;
        height: 48px;
        padding: 0px 24px;
        background-color: #eff4f5;
        color: rgb(31, 199, 212);
    };
    >button{
        position:relative;
    };
    >button:nth-child(1){
        background-color:${props => props.data.data1.background};
        color: ${props => props.data.data1.color};
        box-shadow: ${props => props.data.data1.boxShadow};
        :after{
            content:"";
            height:10px;
            width:10px;
            background:${props => props.data.data1.after.background};
            border:2px solid ${props => props.data.data1.after.color};
            position:absolute;
            border-radius:100%;
            top:0px;
            right:0px;
        }
    };
    >button:nth-child(2){
        background-color:${props => props.data.data2.background};
        color: ${props => props.data.data2.color};
        box-shadow: ${props => props.data.data2.boxShadow};
        :after{
            content:"";
            height:10px;
            width:10px;
            background:${props => props.data.data2.after.background};
            border:2px solid ${props => props.data.data2.after.color};
            position:absolute;
            border-radius:100%;
            top:0px;
            right:0px;
        }
    };
    >button:nth-child(3){
        background-color:${props => props.data.data3.background};
        color: ${props => props.data.data3.color};
        box-shadow: ${props => props.data.data3.boxShadow};
        :after{
            content:"";
            height:10px;
            width:10px;
            background:${props => props.data.data3.after.background};
            border:2px solid ${props => props.data.data3.after.color};
            position:absolute;
            border-radius:100%;
            top:0px;
            right:0px;
        }
    };
    >button:nth-child(4){
        background-color:${props => props.data.data4.background};
        color: ${props => props.data.data4.color};
        box-shadow: ${props => props.data.data4.boxShadow};
        :after{
            content:"";
            height:10px;
            width:10px;
            background:${props => props.data.data4.after.background};
            border:2px solid ${props => props.data.data4.after.color};
            position:absolute;
            border-radius:100%;
            top:0px;
            right:0px;
        }
    };
`;

const dataBlank = {
    data1: {
        background: "",
        color: "",
        boxShadow: "",
        after: {
            color: "#eff4f5",
            background: "#eff4f5"
        }
    },
    data2: {
        background: "",
        color: "",
        boxShadow: "",
        after: {
            color: "#eff4f5",
            background: "#eff4f5"
        }
    },
    data3: {
        background: "",
        color: "",
        boxShadow: "",
        after: {
            color: "#eff4f5",
            background: "#eff4f5"
        }
    },
    data4: {
        background: "",
        color: "",
        boxShadow: "",
        after: {
            color: "#eff4f5",
            background: "#eff4f5"
        }
    }
}
function NotificationDot() {
    const [data, setData] = useState({
        data1: {
            background: "rgb(31, 199, 212)",
            color: " white",
            boxShadow: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
            after: {
                color: "#ffffff",
                background: "red"
            }
        },
        data2: {
            background: "",
            color: "",
            boxShadow: "",
            after: {
                color: "#eff4f5",
                background: "#eff4f5"
            }
        },
        data3: {
            background: "",
            color: "",
            boxShadow: "",
            after: {
                color: "#eff4f5",
                background: "#eff4f5"
            }
        },
        data4: {
            background: "",
            color: "",
            boxShadow: "",
            after: {
                color: "#eff4f5",
                background: "#eff4f5"
            }
        }
    })

    const onButton = (number) => {
        setData(dataBlank)
        if (number === 1) {
            setData({
                ...dataBlank,
                data1: {
                    background: "rgb(31, 199, 212)",
                    color: " white",
                    boxShadow: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
                    after: {
                        color: "#ffffff",
                        background: "red"
                    }
                }
            })
        } else if (number === 2) {
            setData({
                ...dataBlank,
                data2: {
                    background: "rgb(31, 199, 212)",
                    color: " white",
                    boxShadow: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
                    after: {
                        color: "#ffffff",
                        background: "red"
                    }
                }
            })
        } else if (number === 3) {
            setData({
                ...dataBlank,
                data3: {
                    background: "rgb(31, 199, 212)",
                    color: " white",
                    boxShadow: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
                    after: {
                        color: "#ffffff",
                        background: "red"
                    }
                }
            })
        } else {
            setData({
                ...dataBlank,
                data4: {
                    background: "rgb(31, 199, 212)",
                    color: " white",
                    boxShadow: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
                    after: {
                        color: "#ffffff",
                        background: "red"
                    }
                }
            })
        }
    }

    return (
        <div style={{margin:"100px 0 0 200px"}}>
            <Div>
                Hi
            </Div>
            <br />
            <Divs data={data}>
                <button onClick={() => onButton(1)}>Button 1</button>
                <button onClick={() => onButton(2)}>Button 2</button>
                <button onClick={() => onButton(3)}>Button 3</button>
                <button onClick={() => onButton(4)}>Button 4</button>
            </Divs>
        </div>
    )
}
export default NotificationDot;