$(document).keypress(function(e) {
    var xyBird = $(".bird").offset();
    var soLuuDan = $(".luuDan_SL").attr("data")
    var soTenLua = $(".tenLua_SL").attr("data")
    var soDan = Number($(".bulletGun").attr("data"))

    // Khi điều khiển bird di chuyển
    if (!lanhCong) {
        if (e.keyCode == 119) {
            if (xyBird.top > 50) {
                $(".bird").offset({
                    top: xyBird.top - 15
                })
            }
        }
        if (e.keyCode == 115) {
            if (xyBird.top < 550) {
                $(".bird").offset({
                    top: xyBird.top + 15
                })
            }
        }
        if (e.keyCode == 97) {
            if (xyBird.left > 50) {
                $(".bird").offset({
                    left: xyBird.left - 15
                })
            }
        }
        if (e.keyCode == 100) {
            if (xyBird.left < 1250) {
                $(".bird").offset({
                    left: xyBird.left + 15
                })
            }
        }
    }
    // Khi ném lựu đạn
    if (e.keyCode === 105 && Number(soLuuDan) > 0) {
        var LD_nem = new NhanVat("<img/>", "LD_nem", generateID(), xyBird.top + 10, xyBird.left + 50, "./imgs/LUUDAN01.png")
        LD_nem.Create()
        setInterval(function() {
            if (LD_nem.Hide_Right()) {
                $(`.${LD_nem.Property.lopMoi}`).remove()
            } else {
                LD_nem.Run_Ngang_Right(30)
            }
        }, 30)
        $(".luuDan_SL").attr("data", Number(soLuuDan) - 1)
        if (Number(soLuuDan) - 1 < 2) {
            $(".luuDan_SL").text(`${Number(soLuuDan) - 1} grenade`)
        } else {
            $(".luuDan_SL").text(`${Number(soLuuDan) - 1} grenades`)
        }
    }
    // Khi phóng tên lửa sang ngang
    if (e.keyCode === 117 && Number(soTenLua) > 0) {
        var TL_FLY_RIGHT = new NhanVat("<img/>", "TL_FLY_RIGHT", generateID(), xyBird.top + 35, xyBird.left, "./imgs/TENLUA00.png")
        TL_FLY_RIGHT.Create()
        setInterval(function() {
            if (TL_FLY_RIGHT.Hide_Right()) {
                $(`.${TL_FLY_RIGHT.Property.lopMoi}`).remove()
            } else {
                TL_FLY_RIGHT.Run_Ngang_Right(50)
            }
        }, 50)
        $(".tenLua_SL").attr("data", Number(soTenLua) - 1)
        if (Number(soTenLua) - 1 < 2) {
            $(".tenLua_SL").text(`${Number(soTenLua) - 1} rocket`)
        } else {
            $(".tenLua_SL").text(`${Number(soTenLua) - 1} rockets`)
        }
    }
    // Khi phóng tên lửa lên trời
    if (e.keyCode === 111 && Number(soTenLua) > 0) {
        var TL_FLY_TOP = new NhanVat("<img/>", "TL_FLY_TOP", generateID(), xyBird.top + 10, xyBird.left + 55, "./imgs/TENLUA11.png")
        TL_FLY_TOP.Create()
        setInterval(function() {
            if (TL_FLY_TOP.Hide_Bottom()) {
                $(`.${TL_FLY_TOP.Property.lopMoi}`).remove()
            } else {
                TL_FLY_TOP.Run_Doc_Top(50)
            }
        }, 50)
        $(".tenLua_SL").attr("data", Number(soTenLua) - 1)
        if (Number(soTenLua) - 1 < 2) {
            $(".tenLua_SL").text(`${Number(soTenLua) - 1} rocket`)
        } else {
            $(".tenLua_SL").text(`${Number(soTenLua) - 1} rockets`)
        }
    }
    // Khi bắn đạn
    if (e.keyCode == 107 && soDan > 0) {
        var number = Number($(".bulletGun").attr("data")) - 1
        $(".bulletGun").attr("data", number)
        if (number < 2) {
            $(`.bulletGun`).text(`${number} bullet`)
        } else {
            $(`.bulletGun`).text(`${number} bullets`)
        }
        setTimeout(function() {
            var xyBird = $(".bird").offset()
            var bird = $(".bird")
            var VD = new NhanVat("<img/>", "danBay", generateID(), xyBird.top + (bird.height()) / 2, xyBird.left + bird.width(), "./imgs/DAN01.png")
            VD.Create()
            setInterval(function() {
                if (VD.Hide_Right()) {
                    $(`.${VD.Property.lopMoi}`).remove()
                } else {
                    VD.Run_Ngang_Right(30)
                }
            }, 30)
        })
    }
    // Khi chém bằng dao
    if (e.keyCode === 108) {
        var xy = $(".bird").offset()
        var HW = $(".bird")
        var DAOCHEM = new NhanVat("<img/>", "daoChem", generateID(), xy.top - 50, xy.left + HW.width() - 10, "./imgs/DAOCHEM.gif")
        DAOCHEM.Create()
        setTimeout(function() {
            $(".daoChem").remove()
        }, 100)
    }

})

// Khi bird bay chéo
$(document).keydown(function(e) {
    var topBird = $(".bird").offset().top;
    var leftBird = $(".bird").offset().left;
    var keycode = e.keyCode;
    if (keycode == 87) {
        key.w = true
    } else if (keycode == 83) {
        key.s = true
    } else if (keycode == 65) {
        key.a = true
    } else if (keycode == 68) {
        key.d = true
    }
    if (key.w && key.d) {
        $(".bird").offset({
            top: topBird - 10,
            left: leftBird + 10
        })
    }
    if (key.w && key.a) {
        $(".bird").offset({
            top: topBird - 10,
            left: leftBird - 10
        })
    }
    if (key.s && key.d) {
        $(".bird").offset({
            top: topBird + 10,
            left: leftBird + 10
        })
    }
    if (key.a && key.s) {
        $(".bird").offset({
            top: topBird + 15,
            left: leftBird - 15
        })
    }
})
$(document).keyup(function(e) {
    var keycode = e.keyCode;
    if (keycode == 87) {
        key.w = false
    } else if (keycode == 83) {
        key.s = false
    } else if (keycode == 65) {
        key.a = false
    } else if (keycode == 68) {
        key.d = false
    }
})

$(document).dblclick(function() {
    alert("Đang tạm dừng!")
})