import styled, { keyframes } from "styled-components";

const Keyframes = keyframes`
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
`;
const Keyframe = keyframes`
    0%{
        transform:translateY(0px)
    }
    50%{
        transform:translateY(10px)
    }
    100%{
        transform:translateY(0px)
    }
`;

const Div = styled.div`
    margin:100px 0 0 200px;
    display:flex;
    flex-direction:column;
    >img:first-child{
        height:31px;
        width:63px;
        animation:${Keyframes} 2s linear infinite;
    };
    >img:last-child{
        height:67px;
        width:116px;
        margin-top:15px;
        padding-left:10px;
        animation: ${Keyframe} 5s linear infinite;
    }
`;

function Spinner(){

    return(
        <Div>
            <img src="./cong.png" alt=""/>
            <img src="./chao.png" alt=""/>
        </Div>
    )
}
export default Spinner;