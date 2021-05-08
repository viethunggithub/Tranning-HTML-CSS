import styled from "styled-components";

const Div = styled.div`
    display:flex;
    flex-direction:column;
    margin:100px 0 0 200px;
    >a{
        display:inline;
        font-size:16px;
        position:relative;
        font-family:Knit, sans-serif;
        color:#1fc7d4;
        font-weight:600;
        text-decoration:none;
        margin:4px;
        :hover{
            text-decoration:underline
        };
        >img{
            position:absolute;
            left:72px;
            top:-5px;
        }
    };
    >a:nth-child(2){
        color:#452a7a;
    };
    >a:last-child{
        >img{
            position:absolute;
            top:-4px;
            left:100px;
        }
    }
`;

function Links() {


    return (
        <Div>
            <a href="https://pancakeswap.github.io/">Default</a>
            <a href="https://pancakeswap.github.io/">Custom color</a>
            <a href="https://pancakeswap.github.io/">External</a>
            <a href="https://pancakeswap.github.io/">With icon
                <img src="./sit.png" alt="" />
            </a>
            <a href="https://pancakeswap.github.io/">LinkExternal
                <img src="./select.png" alt="" />
            </a>
        </Div>
    )
}
export default Links;