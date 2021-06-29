import styled, { keyframes } from 'styled-components'

const Proframe = keyframes`
    0%{
        transform:translateY(0px)
    }
    50%{
        transform:translateY(-4px)
    }
    75%{
        transform:translateY(0px)
    }
    100%{
        transform:translateY(-2px)
    }
`;
const Div = styled.div`
    .cartoon-pro-item{
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
        margin-bottom: 15px;
        img{
            width: 100%;
            margin-bottom: -4px;
        }
        h3{
            padding: 16px 10px 0 10px;
            color: #ffffff;
        }
        p{
            padding: 16px 10px 12px 10px;
            color: ${props => props.color};
        }
        .text-wrap{
            background-color: ${props => props.bg};
            opacity: 0.9;
            transition: all .3s;
            :hover{
                opacity: 1;
            }
        }
        :hover{
            animation:${Proframe} .5s ease;
        }
    }
`;

export default function ProCartoon(props) {
    return (
        <Div className="col l-4 m-4 c-12" bg={props.bg} color={props.color}>
            <div className="cartoon-pro-item">
                <div className="image-wrap">
                    <img src={`${props.image}`} alt="" />
                </div>
                <div className="text-wrap">
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                </div>
            </div>
        </Div>
    )
}