import styled from "styled-components";

const Div = styled.div`
    margin:100px 0 0 200px;
    display:inline-flex;
    align-items:flex-end;
    >span:first-child{
        position:relative;
        :after{
            content:"";
            position:absolute;
            height:2px;
            width:10px;
            background:rgb(69, 42, 122);;
            border-radius:55px;
            transform:rotate(45deg);
            right:-15px;
            top:4px;
        };
        :before{
            content:"";
            position:absolute;
            height:2px;
            width:20px;
            background:rgb(69, 42, 122);;
            border-radius:55px;
            transform:rotate(135deg);
            top:0px;
            right:-30px;
        }
    };
    >span:nth-child(2){
        position:relative;
        :after{
            content:"";
            position:absolute;
            height:2px;
            width:10px;
            background:#ff0000;
            border-radius:55px;
            transform:rotate(45deg);
            right:-40px;
            top:4px;
        };
        :before{
            content:"";
            position:absolute;
            height:2px;
            width:20px;
            background:#ff0000;
            border-radius:55px;
            transform:rotate(135deg);
            top:0px;
            right:-55px;
        }
    };
    >span:last-child{
        position:relative;
        :after{
            content:"";
            position:absolute;
            height:5px;
            width:20px;
            background:#71dae2;
            border-radius:55px;
            transform:rotate(45deg);
            right:-80px;
            top:0px;
        };
        :before{
            content:"";
            position:absolute;
            height:5px;
            width:45px;
            background:#71dae2;
            border-radius:55px;
            transform:rotate(135deg);
            top:-8px;
            right:-113px;
        }
    };
`;

function SVG_Icons(){

    return(
        <Div>
           <span></span>
           <span></span>
           <span></span>
        </Div>
    )
}
export default SVG_Icons;