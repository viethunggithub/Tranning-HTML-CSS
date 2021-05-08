import styled from "styled-components";


const Div = styled.div`
    margin:100px 0 0 200px;
    display:flex;
    flex-direction:column;
    font-size:16px;
    font-family:Kanit, sans-serif;
    color:#452a7a;
    line-height:1.5;
    font-weight:550;
    >div:nth-child(2){
        font-weight:600;
    };
    >div:nth-child(3){
        font-size:14px;
    };
    >div:nth-child(4){
        font-size:24px;
    };
    >div:nth-child(5){
        color:#ff1718;
    };
    >div:nth-child(6){
        color:#2fcbd7;
    };
    >div:nth-child(7){
        color:#7645d9;
    };
    >div:nth-child(8){
        text-align:center
    };
`;

function Text() {

    return (
        <Div>
            <div>Default</div>
            <div>Bold text</div>
            <div>Small text</div>
            <div>Custom fontsize</div>
            <div>Custom color</div>
            <div>Custom color from theme</div>
            <div>WITH TEXT TRANSFORM</div>
            <div>center</div>
        </Div>
    )
}
export default Text;