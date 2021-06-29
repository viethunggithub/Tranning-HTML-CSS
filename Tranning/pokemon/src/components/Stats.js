import styled from 'styled-components'
import Constant from '../exam/constant'

const UL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    li{
        background-color: #ffffff;
        height: 8px;
        width: 60px;
        list-style: none;
        margin: 3px 0;
    }
    span{
        font-weight: 600;
        font-size: 12px;
    }
`;
export default function Stats(props) {
    var { number } = props
    return (
        <UL>
            {
                Constant.toAddTagLi(Math.round(number / 15))
            }
            <span>{props.label}</span>
        </UL>
    )
}