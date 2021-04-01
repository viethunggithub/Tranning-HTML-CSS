$(document).keypress(function(e) {
    var soDan = Number($(".bulletGun").attr("data"))
    if (e.keyCode == 107 && soDan > 0) {
        var number = Number($(".bulletGun").attr("data")) - 1
        $(".bulletGun").attr("data", number)
        showBullet(number)
        setTimeout(function() {
            var lop = generateID();
            var xyBird = $(".bird").offset()
            var bird = $(".bird")
            var bird_Top = xyBird.top + (bird.height()) / 2
            $("<img />", {
                "class": `danBay ${lop}`,
                "style": `top:${bird_Top}px;left:${xyBird.left+bird.width()}px`,
                "src": "./imgs/DAN01.png"
            }).appendTo("body")
            var hasClass = $(".danBay").hasClass(`${lop}`);
            if (hasClass) {
                var danBay = setInterval(function() {
                    var xyDan = $(`.${lop}`).offset()
                    if (xyDan != undefined) {
                        $(`.${lop}`).offset({
                            left: xyDan.left + 50
                        })
                        if (xyDan.left >= 1250) {
                            $(`.${lop}`).remove()
                            clearInterval(danBay)
                        }
                    }
                }, 100)
            }
        }, 1)
    }
})