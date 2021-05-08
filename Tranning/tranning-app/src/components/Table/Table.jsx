import styled from "styled-components";

const Div = styled.div`
    display:inline-flex;
    margin:100px 0 0 200px;
    border-radius:3px;
    font-size:11px;
    font-family:Kanit, sans-serif;
    color:#8f80ba;
    background:#eff4f5;
    font-weight:800;
    height:28px;
    text-transform:uppercase;
    -webkit-font-smoothing: antialiased;
    >p{
        margin:0px;
        text-align:center;
        padding:8px;
    };
    >p:first-child{
        padding-left:16px;
    };
    >p:last-child{
        padding-right:16px;
    }
`;

function Table(){


    return(
        <Div>
            <p>pool</p>
            <p>apy</p>
            <p>earned</p>
            <p>staked</p>
            <p>detaiks</p>
            <p>links</p>
            <p>tags</p>
        </Div>
    )
}
export default Table;