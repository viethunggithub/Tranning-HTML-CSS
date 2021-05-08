import styled, { keyframes } from "styled-components";

const KeysFrams = keyframes`
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
`;

const Div = styled.div`
    margin:100px 0 100px 200px;
    >img{
        height:30px;
        animation: ${KeysFrams} 4s linear infinite;
        position:absolute;
    }
`;

const randomLeft = () => {
    return Math.floor(Math.random() * (1200 - 200)) + 200;
}

for (var i = 0; i <= 6; i++) {
    // setInterval(function () {
    //     var img = document.createElement("img");
    //     img.src = "./Bread_gau.png";
    //     img.style.left = `${randomLeft()}px`;
    //     var parent = document.getElementById("demo");
    //     parent.appendChild(img)

    //     setInterval(function () {
    //         img.style.top = `${img.offsetTop + 2}px`;
    //         img.style.left = `${img.offsetLeft + 0.5}px`;
    //         if (img.offsetTop >= 500) {
    //             img.style.opacity = 0.5;
    //         };
    //         if (img.offsetTop >= 570) {
    //             img.remove()
    //         }
    //     }, 30)
    // }, 3000)
}

function FallingBunnies() {


    return (
        <Div id="demo">Vào code mở ra
            {/* <img src="./Bread_gau.png" alt=""/> */}
        </Div>
    )
}
export default FallingBunnies;