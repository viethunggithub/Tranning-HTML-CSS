import styled from "styled-components";

const Div = styled.div`
    display:flex;
    flex-direction:column;
    >h3{
        color:#452a7a;
        font-family: Kanit, sans-serif;
        font-weight:600;
        font-size:20px;
    };
    >div{
        display:flex;
        justify-content:flex-start;
        >input{
            margin-right:10px;
            background:#eeeaf4;
            padding:0 16px;
            height:${props => props.width ? props.width === "2" ? "40px" : "48px" : "32px" };
            border-radius:16px;
            font-family: Kanit, sans-serif;
            font-weight:bold;
            color: rgb(69, 42, 122);
            border:0px;
            outline:none;
            :focus{
                border:4px solid #ab8de6;
            };
            ::placeholder{
                color:rgb(69, 42, 122);
            }
        };
        >input:nth-child(3){
            opacity:0.5;
            :hover{
                cursor:not-allowed
            }
        };
        >input:nth-child(4){
            box-shadow:  rgb(69, 42, 122) 0px 0px 0px 1px, rgb(49 208 170 / 20%) 0px 0px 0px 4px;
            :focus{
                box-shadow:none;
            }
        };
        >input:nth-child(5){
            box-shadow: rgb(237 75 158) 0px 0px 0px 1px, rgb(237 75 158 / 20%) 0px 0px 0px 4px;
            :focus{
                box-shadow:none;
            }
        }
    }
`;

function Input() {

    return (
        <div style={{margin:"100px 0 0 200px"}}>
            <Div>
                <h3>SM</h3>
                <div>
                    <input type="text" value="Value" readOnly />
                    <input type="text" placeholder="Placeholder..." />
                    <input type="text" placeholder="Disable" disabled />
                    <input type="text" value="Success" readOnly />
                    <input type="text" value="Warning" readOnly />
                </div>
            </Div>
            <Div width="2">
                <h3>MD</h3>
                <div>
                    <input type="text" value="Value" readOnly />
                    <input type="text" placeholder="Placeholder..." />
                    <input type="text" placeholder="Disable" disabled />
                    <input type="text" value="Success" readOnly />
                    <input type="text" value="Warning" readOnly />
                </div>
            </Div>
            <Div width="3">
                <h3>LG</h3>
                <div>
                    <input type="text" value="Value" readOnly />
                    <input type="text" placeholder="Placeholder..." />
                    <input type="text" placeholder="Disable" disabled />
                    <input type="text" value="Success" readOnly />
                    <input type="text" value="Warning" readOnly />
                </div>
            </Div>

        </div>
    )
}
export default Input;