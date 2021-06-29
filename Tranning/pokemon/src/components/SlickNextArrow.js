import styled from 'styled-components'

const DivNext = styled.div`
    ::before{
        content:'';
        height: 100px;
        width: 100px;
        position: absolute;
        left: 100%;
        background: url('https://assets.pokemon.com/static2/_ui/img/chrome/slider-btns.png') no-repeat 0 0;
    }
    height:100px;
    width:100px;
    z-index: 10;
`;
export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <DivNext
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}