import styled, { keyframes } from "styled-components";

const Keyframe = keyframes`
    0%{
        opacity:1
    }
    50%{
        opacity:0.4
    }
    100%{
        opacity:1
    }
`;

const Div = styled.div`
    margin:100px 0 0 200px;
    background:#faf9fa;
    padding:10px;
   >div{
        height:20px;
        background:rgb(233, 234, 235);
        border-radius:4px;
        animation:${Keyframe} 2s ease-out 0s infinite;
        margin:30px;
   };
   >div:nth-child(2){
     width:40px;
     height:40px;
     border-radius:50%;
   };
   >div:nth-child(3){
       width:100px;
       height:200px;
   };
   >div:last-child{
       height:20px;
       width:200px;
   }

`;
function Skeleton() {

    return (
        <Div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Div>
    )
}
export default Skeleton;