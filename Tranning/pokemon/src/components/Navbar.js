import styled from 'styled-components'


const Box = styled.a`
    color: #000000;
    text-decoration: none;
    position: relative;
    height: 87px;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 5px 0 0 0;
    background-color: ${props => props.background && props.bg};
    color:${props => props.color && "#ffffff"};
    :hover{
        background-color: ${props => props.bg};
        color:#ffffff;
        transition: all .4s ease;
    }
    ::after{
        content: "";
        position: absolute;
        background-color: ${props => props.bg};
        height: 6px;
        width: 100%;
        bottom: 0;
    }
    >i{
        font-size: 30px;
    }
`;
function Boxs(props) {
    return (
        <Box href={props.href} className="col l-1_7 m-1_7 c-0" bg={props.bg} background={props.background} color={props.color}>
            <i className="far fa-newspaper"></i>
            <span className="navbar-label">{props.label}</span>
        </Box>
    )
}

const Div = styled.div`
    margin-top: 4px;
    .row{
        border: 1px solid transparent;
        border-bottom-left-radius: 20px;
        overflow: hidden;
    }
`;
export default function Navbar(props) {
    return (
        <Div className="grid wide">
            <input type="checkbox" id="navbar-input-icon"/>
            <div className="row col l-12 m-12 navbar">
                <div className="row">
                    <Boxs href="" bg="#919191" label="Home" />
                    <Boxs href="/" bg="#e3350d" label="Pokédex" background="true" color="true" />
                    <Boxs href="" bg="#ee6b2f" label="Video Games & Apps" />
                    <Boxs href="" bg="#e6bc2f" label="Trading Card Game" />
                    <Boxs href="" bg="#4dad5b" label="Pokémon TV" />
                    <Boxs href="" bg="#30a7d7" label="Play! Pokémon Events" />
                    <Boxs href="" bg="#1b53ba" label="News" />
                </div>
            </div>
            <div className="col l-0 m-0 c-12 navbar-mobile">
                <label htmlFor="navbar-input-icon">
                    <i className="fas fa-bars"></i>
                </label>
                <i className="fas fa-user-circle"></i>
            </div>
        </Div>
    )
}