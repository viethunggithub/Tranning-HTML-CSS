function callback_dich(Property) {
    var xy = $(`.${Property.lopMoi}`).offset()
    var HW = $(`.${Property.lopMoi}`)
    var xyBird = $(".bird").offset()
    var bird = $(".bird")
    var xy_danBay = $(".danBay").offset()
    var danBay = $(".danBay")
    var xy_tenLua_right = $(".TL_FLY_RIGHT").offset()
    var tenLua_right = $(".TL_FLY_RIGHT")
    var xy_tenLua_top = $(".TL_FLY_TOP").offset()
    var tenLua_top = $(".TL_FLY_TOP")
    var xy_nemBom = $(".LD_nem").offset()
    var nemBom = $(".nemBom")
    var xy_tenLua_XT = $(".tenLua_XT").offset()
    var tenLua_XT = $(".tenLua_XT")
    var xy_daoChem = $(".daoChem").offset()
    var daoChem = $(".daoChem")

    if (xy != undefined && HW != undefined & xyBird != undefined && bird != undefined) {

        //Khi phe ta chạm quái
        PHETAs.forEach((ele, index) => {
                if ($(`.${ele}`).offset() != undefined && $(`.${ele}`) != undefined && vaCham($(`.${ele}`).offset(), $(`.${ele}`), xy, HW)) {
                    if (ele === XeTang_Ta) {
                        mana_Ta_Rest(`${PHETAs[index]}`, 5, 9000)
                    } else if (ele === "bird") {
                        let rest = Number($(".total").attr("mana")) - 20;
                        mana_Rest("total", "detail", rest, 9000)
                    } else {
                        mana_Ta_Rest(`${PHETAs[index]}`, 5, 5000)
                    }
                }
            })
            // Khi đạn bắn trúng quái
        if (xy_danBay != undefined && danBay != undefined && vaCham(xy_danBay, danBay, xy, HW)) {
            banTrung("danBay", `${Property.lopMoi}`, Property.mana_Total, 10)
        }
        // Khi tên lửa bắn trúng quái
        if (xy_tenLua_right != undefined && tenLua_right != undefined && vaCham(xy_tenLua_right, tenLua_right, xy, HW)) {
            banTrung("TL_FLY_RIGHT", `${Property.lopMoi}`, Property.mana_Total, 100)
            var TL_No = new NhanVat("<img/>", "TL_No", generateID(), xy_tenLua_right.top - 100, xy_tenLua_right.left, "./imgs/BOMNO01.png")
            TL_No.Create()
            setTimeout(function() {
                $(`.${TL_No.Property.lopMoi}`).remove()
            }, 500)
        }
        if (xy_tenLua_top != undefined && tenLua_top != undefined && vaCham(xy_tenLua_top, tenLua_top, xy, HW)) {
            banTrung("TL_FLY_TOP", `${Property.lopMoi}`, Property.mana_Total, 100)
            var TL_No = new NhanVat("<img/>", "TL_No", generateID(), xy_tenLua_top.top - 150, xy_tenLua_top.left - 100, "./imgs/BOMNO01.png")
            TL_No.Create()
            setTimeout(function() {
                $(`.${TL_No.Property.lopMoi}`).remove()
            }, 500)
        }
        // Khi quái bị ném bom thì những quái ở gần cũng bị ảnh hưởng
        if (xy_nemBom != undefined && nemBom != undefined) {
            if (xy.left >= xy_nemBom.left - 100 && xy.left <= xy_nemBom.left + nemBom.width() + 100 && xy_nemBom.top + nemBom.height() + 100 >= xy.top && xy_nemBom.top <= xy.top + HW.height() + 100) {
                $(`.${Property.lopMoi}`).addClass("chetChum")
            } else {
                $(`.${Property.lopMoi}`).removeClass("chetChum")
            }
            var xy_chetChum = $(`.chetChum`).offset()
            var chetChum = $(`.chetChum`)
            if (xy_chetChum != undefined && chetChum != undefined && vaCham(xy_nemBom, nemBom, xy, HW)) {
                for (var i = 0; i < chetChum.length; i++) {
                    var class_Quai = chetChum.eq(i).attr("class").substr(0, 35)
                    banTrung("LD_nem", class_Quai, Property.mana_Total, 50)
                }
                var NemB_No = new NhanVat("<img/>", "NemB_No", generateID(), xy_nemBom.top - 100, xy_nemBom.left - 80, "./imgs/BOMNO010.png")
                NemB_No.Create()
                setTimeout(function() {
                    $(`.${NemB_No.Property.lopMoi}`).remove()
                }, 500)
            }
        }
        // khi xe tăng bắn tên lửa trúng
        if (xy_tenLua_XT != undefined && tenLua_XT != undefined && vaCham(xy_tenLua_XT, tenLua_XT, xy, HW)) {
            banTrung("tenLua_XT", `${Property.lopMoi}`, Property.mana_Total, 150)
            var No_TL_XT = new NhanVat("<img/>", "No_TL_XT", generateID(), xy_tenLua_XT.top - 100, xy_tenLua_XT.left, "./imgs/BOMNO0101.png")
            No_TL_XT.Create()
            setTimeout(function() {
                $(`.${No_TL_XT.Property.lopMoi}`).remove()
            }, 300)
        }
        // Khi bị bird chém
        if (xy_daoChem != undefined && daoChem != undefined && vaCham(xy_daoChem, daoChem, xy, HW)) {
            banTrung("daoChem", `${Property.lopMoi}`, `${Property.mana_Total}`, 5)
        }
    }
}

//Phe ta
function callback_PHETA(lopMoi, loaiVuKhi, ZB) {
    var xy = $(`.${lopMoi}`).offset();
    var HW = $(`.${lopMoi}`)
    var xy_bird = $(`.bird`).offset();
    var bird = $(`.bird`)

    switch (loaiVuKhi) {
        case "SUNG":
            nhanVuKhi(lopMoi, "bulletGun", 3, "bullets")
            break;
        case "LUUDAN":
            nhanVuKhi(lopMoi, "luuDan_SL", 1, "grenades");
            break;
        case "TENLUA":
            nhanVuKhi(lopMoi, "tenLua_SL", 1, "rockets");
            break;
        case "MANA":
            nhanVuKhi(lopMoi, null, null, null, `MANA`)
            break;
        case "XETANG":
            if (xy != undefined && HW != undefined && vaCham(xy_bird, bird, xy, HW)) {
                $(`.${lopMoi}`).remove()
                xeTang = true
            }
            break;
        case "DACHAN":
            if (xy != undefined && HW != undefined && vaCham(xy_bird, bird, xy, HW)) {
                $(`.${lopMoi}`).remove()
                setTimeout(function() {
                    var VC = new NhanVat("<img/>", "vatCan", generateID(), ranDomTop(), 1000, "./imgs/VATCAN01.png", 5000)
                    VC.Create()
                    VC.Create_Thanh_Mau()
                    PHETAs.push(VC.Property.lopMoi)
                }, 1)
            }
            break;

            // Phe địch
        case "MB_NB":
            if (xy != undefined && HW != undefined) {
                var B = new NhanVat("<img/>", "B", generateID(), xy.top + 50, xy.left + 90, `./imgs/${bom[ranDomBom()]}.png`)
                B.Create()
                setInterval(function() {
                    if (B.Hide_Bottom()) {
                        $(`.${B.Property.lopMoi}`).remove()
                    } else {
                        B.Run_Doc(3)

                        if ($(`.${B.Property.lopMoi}`).offset() != undefined && $(`.${B.Property.lopMoi}`) != undefined) {
                            if ($(`.${B.Property.lopMoi}`).offset().top + $(`.${B.Property.lopMoi}`).height() >= 600) {
                                $(`.${lopMoi}`).remove()
                                var BN = new NhanVat("<img/>", "BN", generateID(), 400, xy.left - 50, "./imgs/BOMNO05.png")
                                BN.Create()
                                setInterval(function() {
                                    var xy_bom_no = $(`.${BN.Property.lopMoi}`).offset()
                                    var bom_no = $(`.${BN.Property.lopMoi}`)
                                    var xyBird = $(".bird").offset()
                                    var bird = $(".bird")
                                    var xy_xeTang_ta = $(`.${XeTang_Ta}`).offset()
                                    var xeTang_ta = $(`.${XeTang_Ta}`)
                                    if (xy_bom_no != undefined && bom_no != undefined) {
                                        if (vaCham(xyBird, bird, xy_bom_no, bom_no)) {
                                            var rest = Number($(".total").attr("mana")) - 100;
                                            $(".total").attr("mana", rest)
                                            mana_Rest("total", "detail", rest, 9000)
                                        }
                                        if (xy_xeTang_ta != undefined && xeTang_ta != undefined && vaCham(xy_xeTang_ta, xeTang_ta, xy_bom_no, bom_no)) {
                                            mana_Ta_Rest(XeTang_Ta, 100, 9000)
                                        }
                                    }

                                }, 50)
                                setTimeout(function() {
                                    $(`.${BN.Property.lopMoi}`).remove()
                                }, 700)
                            }
                        }
                    }
                }, 50)
            }
            break;
        case "ZB":
            if (xy != undefined && HW != undefined) {
                var var_True = false;
                PHETAs.forEach((ele, index) => {
                    if ($(`.${ele}`).offset() != undefined && $(`.${ele}`) != undefined && vaCham($(`.${ele}`).offset(), $(`.${ele}`), xy, HW)) {
                        var_True = true;
                    }
                })
                if (var_True) {
                    return false
                } else {
                    ZB.Run_Ngang(3)
                }
            }
            break;
        case "MB_TL":
            if (xy != undefined && HW != undefined) {
                var TL = new NhanVat("<img/>", "dich_TL", generateID(), xy.top + 110, xy.left + 120, "./imgs/MAYBAY04.gif")
                TL.Create()
                setInterval(function() {
                    if (TL.Hide_Left()) {
                        $(`.${TL.Property.lopMoi}`).remove()
                    } else {
                        TL.Run_Ngang(50)
                        if ($(`.${TL.Property.lopMoi}`).offset() != undefined && $(`.${TL.Property.lopMoi}`) != undefined && xy_bird != undefined && bird != undefined) {
                            if (vaCham(xy_bird, bird, $(`.${TL.Property.lopMoi}`).offset(), $(`.${TL.Property.lopMoi}`))) {
                                $(`.${TL.Property.lopMoi}`).remove()
                                var rest = Number($(".total").attr("mana")) - 500;
                                mana_Rest("total", "detail", rest, 9000)
                            }
                        }
                    }
                }, 100)
            }
            break;
        case "MB_MAX":
            if ($(`.mana_${lopMoi}`).attr("mana") === undefined) {
                clearInterval(ZB)
                var XT = new NhanVat("<img/>", "icon_XT", generateID(), 120, 500, "./imgs/XETANG03.png")
                XT.Create()
                setInterval(function() {
                    if (XT.Hide_Bottom()) {
                        $(`.${XT.Property.lopMoi}`).remove()
                    } else {
                        XT.Run_Doc(1)
                        callback_PHETA(XT.Property.lopMoi, "XETANG")
                    }
                    if (xeTang) {
                        setTimeout(function() {
                            var XT_TA = new NhanVat("<img/>", "XT_TA", generateID(), 480, 80, "./imgs/XETANG01.png", 9000)
                            XT_TA.Create()
                            XT_TA.Create_Thanh_Mau()
                            xeTang = false
                            XeTang_Ta = XT_TA.Property.lopMoi
                            PHETAs.push(`${XT_TA.Property.lopMoi}`)
                            setInterval(function() {
                                if (mayBay_tenLua && $(".XT_TA").offset() != undefined) {
                                    var tenLua_XT = new NhanVat("<img/>", "tenLua_XT", generateID(), 502, 300, "./imgs/TENLUA08_08.PNG")
                                    tenLua_XT.Create()
                                    setInterval(function() {
                                        if (tenLua_XT.Hide_Right()) {
                                            $(`.${tenLua_XT.Property.lopMoi}`).remove()
                                        } else {
                                            tenLua_XT.Run_Ngang_Right(10)
                                        }
                                    }, 10)
                                    var tenLua_XT_No = new NhanVat("<img/>", "tenLua_XT_No", generateID(), 455, 300, "./imgs/TenLuaNo.png")
                                    tenLua_XT_No.Create()
                                    setTimeout(function() {
                                        $(`.${tenLua_XT_No.Property.lopMoi}`).remove()
                                    }, 300)
                                }
                            }, 3000)
                        }, 1)
                    }
                }, 50)
            }
            break;
        case "DALANH":
            if (xy != undefined && HW != undefined && xy_bird != undefined && bird != undefined) {
                if (vaCham(xy_bird, bird, xy, HW)) {
                    lanhCong = true;
                    $(`.${lopMoi}`).remove()
                    $(".bird").css("filter", "saturate(3)")
                    setTimeout(function() {
                        $(".bird").css("filter", "none")
                        lanhCong = false;
                    }, 3000)
                }
            }
            break;
        case "VIRUS":
            if (xy != undefined && HW != undefined) {
                var VR = new NhanVat("<img/>", "VR", generateID(), xy.top + 60, xy.left + 50, `./imgs/VIRUS01.png`)
                VR.Create()
                setInterval(function() {
                    if (VR.Hide_Left()) {
                        $(`.${VR.Property.lopMoi}`).remove()
                    } else {
                        VR.Run_Ngang(7)
                        callback_dich(VR.Property)
                    }
                }, 30)
            }
            break;
        case "DIABAY":
            if (xy != undefined && HW != undefined) {
                NHT = new NhanVat("<img/>", "NHT", generateID(), xy.top + 50, xy.left + 30, `./imgs/${NHTs[ranDom_NHTs()]}.gif`, 10)
                NHT.Create()
                NHT.Create_Thanh_Mau()
                setInterval(function() {
                    var xy_Bird = $(".bird").offset();
                    var xy_NHT = $(`.${NHT.Property.lopMoi}`).offset()
                    if (xy_NHT != undefined) {
                        if (xy_Bird.top > xy_NHT.top) {
                            NHT.Run_Doc(3)
                        }
                        if (xy_Bird.top < xy_NHT.top) {
                            NHT.Run_Doc_Top(3)
                        }
                        if (xy_Bird.left > xy_NHT.left) {
                            NHT.Run_Ngang_Right(3)
                        }
                        if (xy_Bird.left < xy_NHT.left) {
                            NHT.Run_Ngang(3)
                        }
                        callback_dich(NHT.Property)
                    }
                }, 50)
            }
            break;
    }
}