import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    margin:20px 0 0 10px;
    >label>span{
        height:${props => props.data ? "24px" : "32px"};
        width:${props => props.data ? "24px" : "32px"};
        background:#eeeaf4;
        display:inline-block;
        border-radius:100%;
        padding:4px;
        position:relative;
        transition:.2s;
        :after{
            content:"";
            height:${props => props.data ? "12px" : "20px"};
            width:${props => props.data ? "12px" : "20px"};
            background:#ffffff;
            border-radius:100%;
            display:inline-block;
            position:absolute;
            top:6px;
            left:6px;
            cursor: pointer;
        };
        :hover{
            box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
        };   
    };
    >label > input:checked + span{
        background:#31d0aa;
    };
    >label >input:focus + span{
        box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
    };
    >label>input{
        position:absolute;
        top:0px;
    }

`;

function Radio() {
    const [checked, setChecked] = useState(true)

    return (
        <div style={{margin:"100px 0 0 200px"}}>
            <Div>
                <label htmlFor="radio1">
                    <input type="radio" id="radio1" name="radio" value="" checked={checked} />
                    <span></span>
                </label>
                <label htmlFor="radio2">
                    <input type="radio" id="radio2" name="radio" value="" />
                    <span></span>
                </label>
            </Div>
            <Div data>
                <label htmlFor="radio3">
                    <input type="radio" id="radio3" name="radioo" value="" checked={checked} />
                    <span></span>
                </label>
                <label htmlFor="radio4">
                    <input type="radio" id="radio4" name="radioo" value="" />
                    <span></span>
                </label>
            </Div>
        </div>
    )
}
export default Radio;