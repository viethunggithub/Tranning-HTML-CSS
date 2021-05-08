import styled from "styled-components";

const Div = styled.div`
    margin:100px 0 100px 200px;
    color:#452a7a;
    font-family:Knit, sans-serif;
    font-size:20px;
    font-weight:600;
    >div:nth-child(3){
        font-size:24px;
    };
    >div:nth-child(4){
        font-size:32px;
    };
    >div:nth-child(5){
        font-size:48px;
    }
`;

function Heading(){

    return(
        <Div>
            <div>Default</div>
            <div>Size md</div>
            <div>Size lg</div>
            <div>Size xl</div>
            <div>Size xxl</div>
            <hr/>
            <div>Default</div>
            <div>Tag h1</div>
            <div>Tag h2</div>
            <div>Tag h3</div>
            <div>Tag h4</div>
            <div>Tag h5</div>
            <div>Tag h6</div>
        </Div>
    )
}
export default Heading;