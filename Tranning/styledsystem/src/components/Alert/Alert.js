import styled from 'styled-components'
import { variant } from 'styled-system'

const svgs = {
    Info: <svg viewBox="0 0 24 24" color="currentColor" width="24px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 kAqIdL"><path d="M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"></path></svg>,
    Success: <svg viewBox="0 0 24 24" color="currentColor" width="24px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 kAqIdL"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"></path></svg>,
    Warning: <svg viewBox="0 0 24 24" color="currentColor" width="24px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 kAqIdL"><path d="M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z"></path></svg>,
    Danger: <svg viewBox="0 0 24 24" color="currentColor" width="24px" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 kAqIdL"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"></path></svg>,
    Close: <svg viewBox="0 0 24 24" width="24px" color="currentColor" xmlns="http://www.w3.org/2000/svg" className="Svg-sc-1u73sal-0 kAqIdL"><path d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path></svg>
}

const Wrap = styled.div`
    display: flex;
    margin:50px;
    border-radius: 16px;
    overflow: hidden;
    width:calc(288px + 48px);
    box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px, rgb(0 0 0 / 5%) 0px 1px 1px;
`;
const Icon = styled.div`
    padding: 12px;
    svg{
        fill: #ffffff;
    }
    ${variant({
    variants: {
        Info: {
            bg: "#7645d9"
        },
        Success: {
            bg: "#31d0aa"
        },
        Warning: {
            bg: "#ffb237"
        },
        Danger: {
            bg: "#ed4b9e"
        }
    }
})}
        `;
const Text = styled.div`
    width: 288px;
    padding: 12px;
    color: #452a7a;
    position: relative;
    h3, p{
        margin: 0;
    }
    h3{
        padding: 1px 0;
    }
    p{
        max-width: 230px;
    }
    svg{
        fill: #31d0aa;
        position: absolute;
        top: 15px;
        right:15px;
    }
`;


function Sub(props) {
    return (
        <Wrap>
            <Icon variant={props.variant}>
                {svgs[props.svg]}
            </Icon>
            <Text>
                <h3>{props.title}</h3>
                <p>{props.text != null ? props.text : "This is a description"}</p>
                {props.hasClose !=null && svgs['Close']}
            </Text>
        </Wrap>
    )
}

function Alert() {
    return (
        <>
            <>
                <Sub variant="Info" svg="Info" title="Info" />
                <Sub variant="Success" svg="Success" title="Success" />
                <Sub variant="Warning" svg="Warning" title="Warning" />
                <Sub variant="Danger" svg="Danger" title="Danger" />
            </>
            <hr/>
            <>
                <Sub variant="Info" svg="Info" title="Info" text="" hasClose/>
                <Sub variant="Success" svg="Success"title="Success" text="A description of the success alert" hasClose/>
                <Sub variant="Danger" svg="Danger"title="Danger A Long Title" text="" hasClose/>
                <Sub variant="Warning" svg="Warning" title="Warning" text="" hasClose/>
            </>
        </>
    )
}
export default Alert;