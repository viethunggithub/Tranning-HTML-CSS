function taoVat(tag, lopCu, lopMoi, xyTop, xyLeft, urlIMG) {
    $(`${tag}`, {
        "class": `${lopCu} ${lopMoi}`,
        "style": `top: ${xyTop}px;left:${xyLeft}px`,
        "src": `${urlIMG}`
    }).appendTo("body")
}

function vatChay(lopMoi, speedMini_top, speedMini_left, speedMax, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, myFunction) {
    var vatChay = setInterval(function() {
        DK_to_Running(lopMoi, speedMini_top, speedMini_left, vatChay)
        myFunction(lopMoi, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan)
    }, speedMax)
}

function ban_Virus(lop, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan) {
    setInterval(function() {
        var lopVirus = generateID();
        var xyLop = $(`.${lop}`).offset()
        if (xyLop != undefined) {
            taoVat("<img/>", "virus", lopVirus, xyLop.top + 60, xyLop.left + 50, `./imgs/VIRUS01.png`)
        }
        var hasClass = $(".virus").hasClass(`${lopVirus}`);
        if (hasClass) {
            vatChay(lopVirus, 0, -7, 30, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, gameOver)
        }
    }, 3000)
}

function birdCong(lopMoi) {
    var vatCanXY = $(`.${lopMoi}`).offset();
    var vatCanWiHe = $(`.${lopMoi}`)
    var birdXY = $(`.bird`).offset();
    var birdWiHe = $(`.bird`)

    if (vatCanXY != undefined) {
        if (vatCanXY != undefined) {
            if (vatCanXY.left <= birdXY.left + birdWiHe.width() && vatCanXY.left + vatCanWiHe.width() >= birdXY.left &&
                vatCanXY.top + vatCanWiHe.height() >= birdXY.top && vatCanXY.top <= birdXY.top + birdWiHe.height()) {
                lanhCong = true;
                $(`.${lopMoi}`).remove()
                $(".bird").css("filter", "saturate(3)")
                setTimeout(function() {
                    $(".bird").css("filter", "none")
                    lanhCong = false;
                }, 2000)
            }
        }
    }
}

function DK_to_Running(lopMoi, speedMini_top, speedMini_left, vatChay) {
    var xyVatCan = $(`.${lopMoi}`).offset();
    if (xyVatCan != undefined) {
        $(`.${lopMoi}`).offset({
            top: xyVatCan.top + speedMini_top,
            left: xyVatCan.left + speedMini_left
        })
        if (speedMini_left < 0) {
            if (xyVatCan.left <= 50) {
                clearInterval(vatChay);
                $(`.${lopMoi}`).remove();
            }
        } else {
            if (xyVatCan.top >= 560) {
                clearInterval(vatChay);
                $(`.${lopMoi}`).remove();
            }
        }
    }
}

function nhanSung(lopMoi) {
    var vatCanXY = $(`.${lopMoi}`).offset();
    var vatCanWiHe = $(`.${lopMoi}`)
    var birdXY = $(`.bird`).offset();
    var birdWiHe = $(`.bird`)
    if (vatCanXY != undefined) {
        if (vatCanXY.left <= birdXY.left + birdWiHe.width() && vatCanXY.left + vatCanWiHe.width() >= birdXY.left && vatCanXY.top <= birdXY.top + 40 && vatCanXY.top + vatCanWiHe.height() >= birdXY.top) {
            $(`.${lopMoi}`).remove()
            var data = Number($(".bulletGun").attr("data")) + 3;
            $(".bulletGun").attr("data", data)
            showBullet(data)
        }
    }
}

function showBullet(number) {
    $(".bulletGun").html("");
    for (var i = 1; i <= number; i++) {
        $("<img/>", {
            "class": "bullet",
            "src": "./imgs/DAN02.png"
        }).appendTo(".bulletGun")
    }
}

var gameOver = (lopMoi, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan) => {
    var vatCanXY = $(`.${lopMoi}`).offset();
    var vatCanWiHe = $(`.${lopMoi}`)
    var birdXY = $(`.bird`).offset();
    var birdWiHe = $(`.bird`)
        // điều kiện khi bird chạm vật cản
    if (vatCanXY != undefined) {
        if (vatCanXY.left <= birdXY.left + birdWiHe.width() && vatCanXY.left + vatCanWiHe.width() >= birdXY.left &&
            vatCanXY.top + vatCanWiHe.height() >= birdXY.top && vatCanXY.top <= birdXY.top + birdWiHe.height()) {
            var life = Number($(".total").attr("life")) - 20;
            heart(life, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan)
        }
    }
    //khi chim bay ra khỏi giao diện
    if (birdXY.top <= 50 || birdXY.top + birdWiHe.height() >= 600 || birdXY.left <= 50 || birdXY.left + birdWiHe.width() >= $(window).width() - 50) {
        var life = Number($(".total").attr("life")) - 20;
        heart(life, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan)
    }
    // xử lý khi đạn bay vào đối tượng
    var xyDanBay = $(".danBay").offset();
    var danBay = $(".danBay")
    if (xyDanBay != undefined && vatCanXY != undefined && vatCanWiHe != undefined) {
        if (vatCanXY.left <= xyDanBay.left + danBay.width() && xyDanBay.top + danBay.height() >= vatCanXY.top && xyDanBay.top <= vatCanXY.top + vatCanWiHe.height()) {
            $(`.${lopMoi}`).remove()
            $(".danBay").remove() //chỉ xác định viên đạn bay thẳng nên lúc trúng đích đã mất, do đó k sét lúc viên đạn đi ngang qua vật thể
        }
    }
}

function heart(life, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan) {
    $(".total").attr("life", life)
    $(".detail").css({ "width": `${life*100/9000}%` })
    if (life <= 0) {
        var score = $(".score").find("b").text();
        $(".alertTheEnd").find("span").text(Number(score));
        alertTheEnd();
        clearInterval(daRoi)
        clearInterval(xuongRong)
        clearInterval(setDanh)
        clearInterval(heartRoi)
        clearInterval(sungRoi)
        clearInterval(zoobieBanDan)
        clearInterval(daLanh)
    }
}

var tangMau = (lopMoi, daRoi, xuongRong) => {
    var vatCanXY = $(`.${lopMoi}`).offset();
    var vatCanWiHe = $(`.${lopMoi}`)
    var birdXY = $(`.bird`).offset();
    var birdWiHe = $(`.bird`)

    if (vatCanXY != undefined) {
        if (vatCanXY != undefined) {
            if (vatCanXY.left <= birdXY.left + birdWiHe.width() && vatCanXY.left + vatCanWiHe.width() >= birdXY.left &&
                vatCanXY.top + vatCanWiHe.height() >= birdXY.top && vatCanXY.top <= birdXY.top + birdWiHe.height()) {
                var life = Number($(".total").attr("life")) + 1000;
                heart(life, daRoi, xuongRong)
                $(`.${lopMoi}`).remove()
            }
        }
    }
}