import styled from "styled-components";



const Div = styled.div`
    margin:0 0 30px 10px;
    align-items:center;
    display:flex;
    font-size:14px;
    font-family:Knit, sans-serif;
    >div{
        margin:0 8px 0 0;
        padding:0 8px;
        align-items:center;
        font-weight:bold;
        white-space: nowrap;
        border-radius: 15px;
        height:28px;
        line-height:24px;
        border:2px solid ${props => props.Tag.color};
        color:${props => props.Tag.color};
        >i{
            padding-right:7px;
        };
        
    };
    >div:nth-child(1){
        background:${props => props.Tag.color};
        color:#ffffff;
    };
    >div:nth-child(2){
        background:${props => props.Tag.color};
        color:#ffffff;
        height:24px;
        font-size:12px;
        line-height:20px;
    };
    >div:nth-child(5), > div:last-child{
        >i:last-child{
            border:2px solid ${props => props.Tag.color};
            border-radius:100%;
            text-align:center;
            padding:1px 2px;
            margin-left:10px;
        }
    }
`;

function Main(props) {
    console.log(props);
    return (
        <Div Tag={props.Tag}>
            <div>{props.Tag.text}: MD</div>
            <div>{props.Tag.text}: SM</div>
            <div>{props.Tag.text} Outline</div>
            <div>
                <i className="fas fa-users"></i>
                {props.Tag.text} Icon Left</div>
            <div>{props.Tag.text} Icon Right
                <i className="fas fa-minus"></i>
            </div>
            <div>
                <i className="fas fa-users"></i>
                {props.Tag.text} Both
                <i className="fas fa-minus"></i>
            </div>
        </Div>
    )
}
export default Main;