
import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
    position: relative;
    margin:15px 0;
    cursor:pointer;
    >span{
        height:${props => props.data.height};
        width:${props => props.data.width};
        background:#eeeaf4;
        display:inline-block;
        border-radius:24px;
        position:relative;
        padding:${props => props.data.padding};
        :hover{
            :after{
                box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
            }
        };
        :after{
            content:"";
            height:${props => props.data.left};
            width:${props => props.data.left};
            background:#ffffff;
            position:absolute;
            border-radius:100%;
            transition:.3s;
        }
    };
    >input{
        position:absolute;
        top:2px;
        left:10px;
    };
    >input:checked + span {
        background:#31d0aa;
    };
    >input:checked + span:after{
        transform:translateX(${props => props.data.left});
            
    };
    >input:focus + span:after {
        box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
    }
`;

function Toogle() {
    const [data, setData] = useState({
        data1: {
            padding: "4px",
            height: "40px",
            width: "72px",
            left: "32px"
        },
        data2: {
            padding: "2px",
            height: "20px",
            width: "36px",
            left: "16px"
        },
        checked:false
    })

    const onToogle = () => {
        setData({
            ...data,
            checked:!data.checked
        })
    }

    return (
        <div style={{ display: "inline-flex", flexDirection: "column", margin:"100px 0 0 200px"}}>
            <Label htmlFor="input" data={data.data1}>
                <input id="input" type="checkbox" onChange={onToogle} checked={data.checked} />
                <span></span>
            </Label>
            <Label htmlFor="inputs" data={data.data2} >
                <input id="inputs" type="checkbox" onChange={onToogle} checked={data.checked} />
                <span></span>
            </Label>
        </div>
    )
}
export default Toogle;