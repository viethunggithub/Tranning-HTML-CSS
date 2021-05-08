import styled from 'styled-components'
import useAlert from './useAlert';


const Alert_Tag = styled.div`
    margin:0px 100px;
    display:flex;
    height:${props => props.max ? '96px' : props.min ? '50px' : '72px'};
    width:336px;
    border-radius:18px;
    box-shadow: 0 10px 30px rgb(50 50 93 / 11%), 0 1px 50px rgb(0 0 0 / 8%);
    margin:30px;
`;
const Alert_Left = styled.div`
    background:${props => props.alert.background};
    text-align:center;
    padding:12px;
    border-top-left-radius:18px;
    border-bottom-left-radius:18px;
    >i{
        color:white;
        font-size:20px;
        border-radius:100%;
    }
    `;
const Alert_right = styled.div`
    background:white;
    width:288px;
    padding:15px 12px 12px 12px;
    font-size:16px;
    color:#452a7a;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    font-family: Kanit, sans-serif;
    position:relative;
    >b{
        font-weight:600;
    };
    >p{
        margin:0px;
        font-weight:300;
        width:224px;
        font-weight:400;
    };
    >img{
        position:absolute;
        top:15px;
        right:10px;
        :hover{
            cursor: pointer;
            opacity:0.7;
        }
    }
`;

const Alert = (props) => {
    let { alert, max, min, text, exit } = props;
    const [c, d] = useAlert(props)
    return (
        <Alert_Tag max={max} min={min}>
            <Alert_Left alert={alert}>
                {c}
            </Alert_Left>
            <Alert_right>
                <b>{text ? "Danger A Long Title" : alert.text}</b>
                {d}
                {exit ? <img src="./alert_exit.png" /> : ""}
            </Alert_right>
        </Alert_Tag>
    )
}
export default Alert