import styled, { keyframes } from 'styled-components'
import { variant, color, border, shadow, compose, layout, flexbox, space, compose } from 'styled-system'

const constants = {
    border: "2px solid #1fc7d4",
    boxShadow: "rgb(14 14 44 / 40%) 0px -1px 0px 0px inset",
    svgs: {
        loadding: <svg viewBox="0 0 24 24" color="currentColor" width="20px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 ciOxuY"><path d="M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"></path></svg>,
        bread: <svg viewBox="0 0 32 32" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 jJiqhL"><path fillRule="evenodd" clipRule="evenodd" d="M5.84199 5.00181C5.35647 2.40193 7.35138 0 9.9962 0C12.3302 0 14.2222 1.89206 14.2222 4.22603V9.43607C14.806 9.39487 15.3992 9.37374 16 9.37374C16.5772 9.37374 17.1474 9.39324 17.709 9.43131V4.22603C17.709 1.89206 19.601 0 21.935 0C24.5798 0 26.5747 2.40193 26.0892 5.00181L24.9456 11.1259C28.8705 12.8395 31.8384 15.8157 31.8384 19.5556V21.8182C31.8384 24.8936 29.8038 27.4686 26.9594 29.2068C24.0928 30.9586 20.2149 32 16 32C11.7851 32 7.90719 30.9586 5.04062 29.2068C2.19624 27.4686 0.161621 24.8936 0.161621 21.8182V19.5556C0.161621 15.8355 3.09899 12.8708 6.99084 11.1538L5.84199 5.00181ZM23.48 11.9305L24.8183 4.76446C25.1552 2.96 23.7707 1.29293 21.935 1.29293C20.3151 1.29293 19.0019 2.60612 19.0019 4.22603V10.8562C18.5774 10.8018 18.1462 10.7586 17.709 10.7274C17.1484 10.6873 16.5782 10.6667 16 10.6667C15.3982 10.6667 14.8049 10.689 14.2222 10.7324C13.785 10.765 13.3537 10.8094 12.9293 10.8651V4.22603C12.9293 2.60612 11.6161 1.29293 9.9962 1.29293C8.16055 1.29293 6.77597 2.96 7.11295 4.76446L8.45562 11.9543C4.25822 13.5135 1.45455 16.3344 1.45455 19.5556V21.8182C1.45455 26.7274 7.96677 30.7071 16 30.7071C24.0332 30.7071 30.5455 26.7274 30.5455 21.8182V19.5556C30.5455 16.318 27.7131 13.4847 23.48 11.9305Z" fill="#633001"></path><path d="M30.5455 21.8183C30.5455 26.7275 24.0333 30.7072 16 30.7072C7.96681 30.7072 1.45459 26.7275 1.45459 21.8183V19.5557H30.5455V21.8183Z" fill="#FEDC90"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.11298 4.7645C6.77601 2.96004 8.16058 1.29297 9.99624 1.29297C11.6161 1.29297 12.9293 2.60616 12.9293 4.22607V10.8652C13.9192 10.7351 14.9466 10.6667 16 10.6667C17.0291 10.6667 18.0333 10.732 19.0019 10.8562V4.22607C19.0019 2.60616 20.3151 1.29297 21.935 1.29297C23.7707 1.29297 25.1553 2.96004 24.8183 4.7645L23.4801 11.9306C27.7131 13.4847 30.5455 16.318 30.5455 19.5556C30.5455 24.4648 24.0333 28.4445 16 28.4445C7.96681 28.4445 1.45459 24.4648 1.45459 19.5556C1.45459 16.3345 4.25826 13.5135 8.45566 11.9543L7.11298 4.7645Z" fill="#D1884F"></path><path d="M11.9595 18.9091C11.9595 20.248 11.2359 21.3333 10.3433 21.3333C9.45075 21.3333 8.72717 20.248 8.72717 18.9091C8.72717 17.5702 9.45075 16.4849 10.3433 16.4849C11.2359 16.4849 11.9595 17.5702 11.9595 18.9091Z" fill="#633001"></path><path d="M23.1111 18.9091C23.1111 20.248 22.3875 21.3333 21.4949 21.3333C20.6024 21.3333 19.8788 20.248 19.8788 18.9091C19.8788 17.5702 20.6024 16.4849 21.4949 16.4849C22.3875 16.4849 23.1111 17.5702 23.1111 18.9091Z" fill="#633001"></path></svg>,
        sum: <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 iMwdMk"><path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path></svg>
    }
}
const loadding = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
`;

const Btn = styled.button`
    margin: 20px 8px 10px 0px;
    align-items: center;
    border-radius: 16px;
    box-shadow: ${({ hasBoxShadow }) => hasBoxShadow != null && constants.boxShadow};
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-weight: 600;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    outline: 0px;
    transition: background-color 0.2s ease 0s;
    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
    border: ${({ hasBorder }) => hasBorder != null ? constants.border : "0px"};
    :hover{
        opacity: 0.7;
    }
    ${variant({
    variants: {
        large: {
            fontSize: "16px",
            p: "0 24px",
            height: "48px"
        },
        medium: {
            fontSize: "16px",
            p: "0 16px",
            height: "32px"
        },
        small: {
            fontSize: "12px",
            p: "0 8px",
            height: "20px"
        }
    }
})}
`;
const Disable = styled(Btn)`
    padding: 0 24px;
    height: 48px;
    font-size: 16px;
    color: #bdc2c4;
    cursor: not-allowed;
    :hover{
        opacity: 1;
    };
    ${compose(color, border)}
`;
const ButtonVariant = styled(Btn)`
    height: 48px;
    font-weight: 600;
    font-size:16px;
    >span > svg{
        fill:#bdc2c4;
        margin-left:8px;
        animation:${loadding} 2s linear infinite;
    }
    >svg{
        margin-right:0.5rem;
    }
    >b > svg{
        fill:#ffffff;
    }
    ${compose(border, shadow, layout, flexbox, space)}
    ${variant({
    variants: {
        XT: {
            bg: "#1fc7d4",
            color: "#ffffff"
        },
        TX: {
            bg: "#ffffff",
            color: "#1fc7d4"
        }

    }
})}
`;

function Sub(props) {
    return (
        <Btn variant={props.variant} hasBorder={props.hasBorder} bg={props.bg} color={props.color} hasBoxShadow={props.hasBoxShadow} border={props.border}>
            {props.title}
        </Btn>
    )
}

function Button() {
    return (
        <>
            <>
                <div>
                    <button>Unstyle Button</button>
                </div>
                <div>
                    <Sub variant="large" title="Primary MD" bg="#1fc7d4" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary SM" bg="#1fc7d4" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary XS" bg="#1fc7d4" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Sub variant="large" title="Secondary MD" hasBorder bg="transparent" color="#1fc7d4" />
                    <Sub variant="medium" title="Secondary SM" hasBorder bg="transparent" color="#1fc7d4" />
                    <Sub variant="small" title="Secondary XS" hasBorder bg="transparent" color="#1fc7d4" />
                </div>
                <div>
                    <Sub variant="large" title="Tertiary MD" bg="eff4f5" color="#1fc7d4" />
                    <Sub variant="medium" title="Tertiary SM" bg="eff4f5" color="#1fc7d4" />
                    <Sub variant="small" title="Tertiary XS" bg="eff4f5" color="#1fc7d4" />
                </div>
                <div>
                    <Sub variant="large" title="Text MD" bg="transparent" color="#1fc7d4" />
                    <Sub variant="medium" title="Text SM" bg="transparent" color="#1fc7d4" />
                    <Sub variant="small" title="Text XS" bg="transparent" color="#1fc7d4" />
                </div>
                <div>
                    <Sub variant="large" title="Primary MD" bg="#ed4b9e" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary SM" bg="#ed4b9e" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary XS" bg="#ed4b9e" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Sub variant="large" title="Primary MD" bg="#8f80ba" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary SM" bg="#8f80ba" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary XS" bg="#8f80ba" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Sub variant="large" title="Primary MD" bg="#31d0aa" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary SM" bg="#31d0aa" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary XS" bg="#31d0aa" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Disable>Disable</Disable>
                    <Disable bg="transparent" border="2px solid #bdc2c4">Disable</Disable>
                </div>
            </>
            <hr />
            <>
                <div>
                    <Sub variant="large" title="Primary anchor MD" bg="#1fc7d4" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary anchor SM" bg="#1fc7d4" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary anchor XS" bg="#1fc7d4" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Sub variant="large" title="Secondary anchor MD" hasBorder bg="transparent" color="#1fc7d4" />
                    <Sub variant="medium" title="Secondary anchor SM" hasBorder bg="transparent" color="#1fc7d4" />
                    <Sub variant="small" title="Secondary anchor XS" hasBorder bg="transparent" color="#1fc7d4" />
                </div>
                <div>
                    <Sub variant="large" title="Tertiary anchor MD" bg="eff4f5" color="#1fc7d4" />
                    <Sub variant="medium" title="Tertiary anchor SM" bg="eff4f5" color="#1fc7d4" />
                    <Sub variant="small" title="Tertiary anchor XS" bg="eff4f5" color="#1fc7d4" />
                </div>
                <div>
                    <Sub variant="large" title="Text anchor MD" bg="transparent" color="#1fc7d4" />
                    <Sub variant="medium" title="Text anchor SM" bg="transparent" color="#1fc7d4" />
                    <Sub variant="small" title="Text anchor XS" bg="transparent" color="#1fc7d4" />
                </div>
                <div>
                    <Sub variant="large" title="Primary anchor MD" bg="#ed4b9e" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary anchor SM" bg="#ed4b9e" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary anchor XS" bg="#ed4b9e" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Sub variant="large" title="Primary anchor MD" bg="#8f80ba" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary anchor SM" bg="#8f80ba" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary anchor XS" bg="#8f80ba" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Sub variant="large" title="Primary anchor MD" bg="#31d0aa" color="#ffffff" hasBoxShadow />
                    <Sub variant="medium" title="Primary anchor SM" bg="#31d0aa" color="#ffffff" hasBoxShadow />
                    <Sub variant="small" title="Primary anchor XS" bg="#31d0aa" color="#ffffff" hasBoxShadow />
                </div>
                <div>
                    <Disable>Disable</Disable>
                    <Disable>Disable</Disable>
                </div>
            </>
            <hr />
            <>
                <ButtonVariant p="0 24px" variant="TX" border="2px solid #1fc7d4">As a React Router link</ButtonVariant>
                <ButtonVariant p="0 24px" variant="XT" boxShadow={constants.boxShadow} width="640px">Full size</ButtonVariant>
                <div style={{ display: "flex" }}>
                    <ButtonVariant p="0 24px" color="#bdc2c4" bg="#e9eaeb" display="flex" alignItem="center">
                        Approving
                        <span>{constants.svgs.loadding}</span>
                    </ButtonVariant>
                    <ButtonVariant p="0 24px" color="#bdc2c4" bg="#e9eaeb" >Approving</ButtonVariant>
                </div>
                <div style={{ display: "flex" }}>
                    <ButtonVariant p="0 24px" variant="XT" display="flex" alignItem="center">
                        {constants.svgs.bread}
                            Start Icon
                            </ButtonVariant>
                    <ButtonVariant p="0 24px" variant="XT" display="flex" alignItem="center">
                        End Icon &ensp;
                        {constants.svgs.bread}
                    </ButtonVariant>
                    <ButtonVariant p="0 24px" variant="XT" display="flex" alignItem="center">
                        {constants.svgs.bread}
                        Start & End Icon &ensp;
                        {constants.svgs.bread}
                    </ButtonVariant>
                </div>
                <div style={{ display: "flex" }}>
                    <ButtonVariant p="0 24px" width="48px" variant="XT">
                        <i>{constants.svgs.bread}</i>
                    </ButtonVariant>
                    <ButtonVariant p="0 24px" width="48px" variant="TX" border="2px solid #1fc7d4">
                        <i>{constants.svgs.sum}</i>
                    </ButtonVariant>
                </div>
                <div style={{ display: "flex" }}>
                    <ButtonVariant p="0" width="32px" height="32px" bg="#ed4b9e">
                        <i>{constants.svgs.bread}</i>
                    </ButtonVariant>
                    <ButtonVariant p="0" width="32px" height="32px" bg="#31d0aa">
                        <b>{constants.svgs.sum}</b>
                    </ButtonVariant>
                </div>
            </>
        </>
    )
}
export default Button;