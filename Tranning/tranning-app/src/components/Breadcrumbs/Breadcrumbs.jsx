import styled from "styled-components";

const Div = styled.div`
    font-family: Kanit, sans-serif;
    font-weight:600;
    color:#c1c6c7;
    >span:nth-child(2), >span:nth-child(4) {
        font-size:24px;
        margin:0 15px;
    };
    >a{
        text-decoration:none;
        color: rgb(118, 69, 217);
        :hover{
            text-decoration:underline;
        }
    };
`;
const Div1 = styled(Div)`
    >span{
        color:#8775a9;
    };
    >span:nth-child(2){
        color:#c1c6c7;
    }
`;
const Divs = styled(Div)`
    display:flex;
    align-items:center;
    >div{
        position:relative;
        margin-right:50px;
        >img{
            position:absolute;
            right:-40px;
            top:-5px;
        };
        >a{
            text-decoration:none;
            :hover{
                text-decoration:underline;
            }
        }
    };
`;
const Divss = styled(Divs)`
    padding-bottom:100px;
    >div{
        margin-right:70px;
        >img{
            right:-60px;
            top:-15px
        }
    };
    >div:first-child{
        >a{
            color:#ed4b9e;
        }
    };
    >div:nth-child(2){
        >a{
            color:#1fc7d4;
        }
    }
`;

function Breadcrumbs() {

    return (
        <div style={{margin:"100px 0 0 200px" }}>
            <Div>
                <a href="https://pancakeswap.github.io/">Link</a>
                <span>&rsaquo;</span>
                <span>Crumb 1</span>
                <span>&rsaquo;</span>
                <span>Crumb 2</span>
            </Div>
            <Div1>
                <span href="https://pancakeswap.github.io/">PancakeSwap</span>
                <span>&rsaquo;</span>
                <span href="https://pancakeswap.github.io/">The #1 AMM and yield farm on Binance Smart Chain.</span>
            </Div1>
            <hr />
            <Divs>
                <div>
                    <a href="https://pancakeswap.github.io/">Link</a>
                    <img src="./Bread_gau.png" alt="" />
                </div>
                <div>
                    <span>Crumb 1</span>
                    <img src="./Bread_gau.png" alt="" />
                </div>
                <span>Crumb 2</span>
            </Divs>
            <br/><br/>
            <Divss>
                <div>
                    <a href="https://pancakeswap.github.io/">Link</a>
                    <img src="./Bread_qua.png" alt="" />
                </div>
                <div>
                    <a href="https://pancakeswap.github.io/">Link 2</a>
                    <img src="./Bread_qua.png" alt="" />
                </div>
                <span>Crumb 2</span>
            </Divss>
        </div>
    )
}
export default Breadcrumbs;