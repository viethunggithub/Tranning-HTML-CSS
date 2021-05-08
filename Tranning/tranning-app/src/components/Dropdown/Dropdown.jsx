import styled from "styled-components";

const Div = styled.div`
    margin-bottom:600px;
    >button{
        align-items: center;
        border: 0px;
        border-radius: 16px;
        box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
        cursor: pointer;
        display: inline-flex;
        font-family: Knit, sans-serif;
        font-size: 16px;
        font-weight: 600;
        -webkit-box-pack: center;
        justify-content: center;
        letter-spacing: 0.03em;
        line-height: 1;
        opacity: 1;
        outline: 0px;
        transition: background-color 0.2s ease 0s;
        height: 48px;
        padding: 0px 24px;
        background-color: rgb(31, 199, 212);
        color: white;
        :hover{
            opacity:0.6;
        };
        :hover + div{
            display:inline-flex;
        };
    };
    >div{
        display:inline-flex;
        flex-direction:column;
        background:#ffffff;
        padding:20px 20px 0px 20px;
        position:relative;
        left:400px;
        top:100px;
        display:none;
        :after{
            content:"";
            position:absolute;
            background:rgb(135, 113, 194);
            height:100%;
            top:0px;
            right:0px;
            width:8px;
            border-radius:10px;
        };
        >p{
            margin:0px;
            font-weight:600;
        }
    }
`;
const Divs = styled(Div)`
    >div{
        left:-50px;
        top:-595px;
        :after{
            display:none;
        }
    }
`;
const Divss = styled(Divs)`
    >div{
        left:-80px
    }
`;

function Dropdown() {

    return (
        <div style={{margin:"100px 0 0 200px"}}>
            <Div>
                <button>Hover</button>
                <div>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
            </Div>
            <Divs>
                <button>Top right</button>
                <div>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
            </Divs>
            <Divss>
                <button>Top</button>
                <div>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
            </Divss>
        </div>
    )
}
export default Dropdown;

