import Main from './Main'


const Tag01={
    text:"Primary",
    color:"#1fc7d4"
}
const Tag02={
    text:"Secondary",
    color:"#7645d9"
}
const Tag03={
    text:"Success",
    color:"#31d0aa"
}
const Tag04={
    text:"Textdisabled",
    color:"#bdc2c4"
}
const Tag05={
    text:"Textsubtle",
    color:"#8f80ba"
}
const Tag06={
    text:"Binance",
    color:"#f0b90b"
}
const Tag07={
    text:"Failure",
    color:"#ed4b9e"
}

function Tag() {
    return (
        <div style={{margin:"100px 0 0 200px"}}>
            <Main Tag={Tag01} />
            <Main Tag={Tag02} />
            <Main Tag={Tag03} />
            <Main Tag={Tag04} />
            <Main Tag={Tag05} />
            <Main Tag={Tag06} />
            <Main Tag={Tag07} />
        </div>
    )
}
export default Tag;