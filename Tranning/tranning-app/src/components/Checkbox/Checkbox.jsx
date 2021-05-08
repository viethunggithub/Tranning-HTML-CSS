import styled from 'styled-components'

const Label = styled.label`
    margin:0 0 30px 10px;
    >span{
        height:${props => props.mini ? "24px" : "32px"};
        width:${props => props.mini ? "24px" : "32px"};
        display:inline-block;
        border-radius:8px;
        background:#eeeaf4;
        position:relative;
        cursor: pointer;
        :hover{
            box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
        };
        :after{
            content:"";
            position:absolute;
            height:2px;
            width:6px;
            background:#eeeaf4;
            transform:rotate(45deg);
            top:${props => props.mini ? "12px" : "16px"};
            left:${props => props.mini ? "5px" : "7px"};
        };
        :before{
            content:"";
            position:absolute;
            height:2px;
            width:15px;
            background:#eeeaf4;
            transform:rotate(135deg);
            top:${props => props.mini ? "10px" : "13px"};
            left:${props => props.mini ? "8px" : "10px"};
        }
    };
    >input:checked + span{
        transition:.5s;
        background:rgb(49, 208, 170);
    };
    >input:focus + span{
        box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
    };
    >input{
        position:absolute;
        top:0px;
    }
`;

function Checkbox() {


    return (
        <div style={{display:"inline-flex", flexDirection:"column", margin:"100px 0 0 200px"}}>
            <Label htmlFor="checkbos">
                <input type="checkbox" id="checkbos" />
                <span></span>
            </Label>
            <Label htmlFor="checkboss" mini>
                <input type="checkbox" id="checkboss" />
                <span></span>
            </Label>
        </div>
    )
}
export default Checkbox;