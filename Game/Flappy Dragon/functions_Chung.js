function mana_Rest(LM_Ngoai, LM_Trong, rest, mana_Total) {
    $(`.${LM_Ngoai}`).attr("mana", rest)
    $(`.${LM_Trong}`).css({ "width": `${rest*100/mana_Total}%` })
}

function vaCham(xy1, HW1, xy2, HW2) {
    if (xy1.left + HW1.width() >= xy2.left && xy1.left <= xy2.left + HW2.width() && xy1.top + HW1.height() >= xy2.top && xy1.top <= xy2.top + HW2.height()) {
        return true
    }
}

function banTrung(class_vuKhi, class_quai, mana_Total, soMau_mat) {
    $(`.${class_vuKhi}`).remove() //chỉ xác định viên đạn bay thẳng nên lúc trúng đích đã mất, do đó k sét lúc viên đạn đi ngang qua vật thể
    var dich_Mana = Number($(`.mana_${class_quai}`).attr("mana")) - soMau_mat;
    var dich_Rest = dich_Mana * 100 / mana_Total;
    $(`.mana_${class_quai}`).attr("mana", dich_Mana)
    $(`.mana_${class_quai}`).find(".mana_Rest").css("background", "red")
    $(`.mana_${class_quai}`).css("background", "transparent")
    $(`.mana_${class_quai}`).find(".mana_Rest").css("width", `${dich_Rest}%`)
    if (dich_Mana <= 0) {
        $(`.${class_quai},.mana_${class_quai}`).remove();
        $(".score").find("b").text(Number($(".score").find("b").text()) + 1);
    }
}

function mana_Ta_Rest(lopMoi, soMau_mat, mana_Total) {
    var mana_Drop = Number($(`.mana_${lopMoi}`).attr("mana")) - soMau_mat;
    $(`.mana_${lopMoi}`).attr("mana", mana_Drop)
    $(`.mana_${lopMoi}`).css("background", "transparent")
    $(`.mana_${lopMoi}`).find(".mana_Rest").css({
        "width": `${mana_Drop * 100 / mana_Total}%`,
        "background": "red"
    })
    if (mana_Drop <= 0) {
        $(`.${lopMoi}, .mana_${lopMoi}`).remove()
    }
}

function nhanVuKhi(lop_VK, noiDat_VK, number, loai_VK, MANA) {
    var xy = $(`.${lop_VK}`).offset();
    var HW = $(`.${lop_VK}`)
    var xyBird = $(`.bird`).offset();
    var bird = $(`.bird`)
    if (xy != undefined && HW != undefined) {
        if (vaCham(xyBird, bird, xy, HW)) {
            $(`.${lop_VK}`).remove()
            if (MANA) {
                var rest = Number($(".total").attr("mana")) + 1000;
                mana_Rest("total", "detail", rest, 9000)
            } else {
                var data = Number($(`.${noiDat_VK}`).attr("data")) + number;
                $(`.${noiDat_VK}`).attr("data", data)
                $(`.${noiDat_VK}`).text(`${data} ${loai_VK}`)
            }
        }
    }
}

function showBullet(class_noiDat, class_New, url_image, number) {
    $(`.${class_noiDat}`).html("");
    for (var i = 1; i <= number; i++) {
        $("<img/>", {
            "class": `${class_New}`,
            "src": `${url_image}.png`
        }).appendTo(`.${class_noiDat}`)
    }
}