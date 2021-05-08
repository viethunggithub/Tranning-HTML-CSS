import styled from "styled-components";

const Div = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    >div{
        height:300px;
        background:#1fc7d4;
        width:5%;
        margin:16px;
    }
`;
const Divs = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    >div{
        height:300px;
        width:30%;
        background:#1fc7d4;
        margin:15px;
    }
`;
function Layouts() {


    return (
        <div style={{margin:"100px 0 0 200px"}}>
            <Div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Divs>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Divs>
        </div>
    )
}
export default Layouts;