import styled from 'styled-components'

const DivPrev = styled.div`
    ::before{
        background-position: -100px 0;
        transform: rotateY(180deg);
        content:'';
        height: 100px;
        width: 100px;
        position: absolute;
        right: 100%;
    background: url('https://assets.pokemon.com/static2/_ui/img/chrome/slider-btns.png') no-repeat 0 0;
    }
    height:100px;
    width:100px;
    z-index: 10;
`;
export default function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <DivPrev
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}