$(function() {
    var bird = setInterval(function() {
        var Top = $(".bird").offset().top;
        $(".bird").offset({
            top: Top + 5
        })
        var score = Number($(".score").find("b").text()) + 1;
        $(".score").find("b").text(score);
        var life = Number($(".total").attr("life"));
        if (life <= 0) {
            clearInterval(bird)
        }
    }, 100);

    $(document).keypress(function(e) {
        var topBird = $(".bird").offset().top;
        var leftBird = $(".bird").offset().left;
        var key = e.keyCode;
        if (!lanhCong) {
            if (key == 119) {
                $(".bird").offset({
                    top: topBird - 15
                })
            }
            if (key == 115) {
                $(".bird").offset({
                    top: topBird + 15
                })
            }
            if (key == 97) {
                $(".bird").offset({
                    left: leftBird - 15
                })
            }
            if (key == 100) {
                $(".bird").offset({
                    left: leftBird + 15
                })
            }
        }
    })
    saveUsers()

    // tạo xương rồng chạy ngẫu nhiên sang trái
    var xuongRong = setInterval(function() {
            var lop_XR = generateID();
            var ranDTop = ranDomTop();
            taoVat("<img/>", "chung", lop_XR, ranDTop, 1200, `./imgs/${arraysPNG[ranDomPNG()]}.gif`)
            var hasClass = $(".chung").hasClass(`${lop_XR}`);
            if (hasClass) {
                vatChay(lop_XR, 0, -3, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, gameOver)
            }
        }, 6000)
        // tạo đá rơi ngẫu nhiên từ trên xuống
    var daRoi = setInterval(function() {
            var lopMoi_Da = generateID();
            var ranDLeft = ranDomLeft();
            taoVat("<img/>", "daRoi", lopMoi_Da, 80, ranDLeft, "./imgs/D01.png")
            var hasClass = $(".daRoi").hasClass(`${lopMoi_Da}`);
            if (hasClass) {
                vatChay(lopMoi_Da, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, gameOver)
            }
        }, 8000)
        // tạo sét đánh
    var setDanh = setInterval(function() {
            var lopMoi_set = generateID();
            var ranDLeft = ranDomLeft();
            taoVat("<img/>", "setDanh", lopMoi_set, 50, ranDLeft, `./imgs/${setArrayPNG[ranDom_SET_PNG()]}.png`)
            var hasClass = $(".setDanh").hasClass(`${lopMoi_set}`);
            if (hasClass) {
                setTimeout(function() {
                    $(`.${lopMoi_set}`).remove()
                }, 500)
            }
        }, 5000)
        // tạo trái tim rơi để tăng máu
    var heartRoi = setInterval(function() {
            var lopMoi_tim = generateID();
            var ranDLeft = ranDomLeft();
            taoVat("<i></i>", "heartDrop fas fa-heart", lopMoi_tim, 80, ranDLeft, "")
            var hasClass = $(".heartDrop").hasClass(`${lopMoi_tim}`);
            if (hasClass) {
                vatChay(lopMoi_tim, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, tangMau)
            }
        }, 20000)
        // tạo súng rơi xuống
    var sungRoi = setInterval(function() {
            var lopMoi_sung = generateID();
            var ranDLeft = ranDomLeft();
            taoVat("<img/>", "sung", lopMoi_sung, 80, ranDLeft, "./imgs/SUNG01.png")
            var hasClass = $(".sung").hasClass(`${lopMoi_sung}`);
            if (hasClass) {
                vatChay(lopMoi_sung, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, nhanSung)
            }
        }, 10000)
        // tạo zoobies bắn virus
    var zoobieBanDan = setInterval(function() {
            var lopMoi_ZB_BD = generateID();
            var ranDTop = ranDomTop();
            taoVat("<img/>", "zoobie", lopMoi_ZB_BD, ranDTop, 1150, `./imgs/ZOOBIE05.gif`)
            var hasClass = $(".zoobie").hasClass(`${lopMoi_ZB_BD}`);
            if (hasClass) {
                vatChay(lopMoi_ZB_BD, 0, -1, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, gameOver)
                ban_Virus(lopMoi_ZB_BD, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan)
            }
        }, 20000)
        // tạo đá lạnh rơi xuống
    var daLanh = setInterval(function() {
            var lopMoi_DL = generateID();
            var ranDLeft = ranDomLeft();
            taoVat("<img/>", "daLanh", lopMoi_DL, 80, ranDLeft, "./imgs/DALANH01.png")
            var hasClass = $(".daLanh").hasClass(`${lopMoi_DL}`);
            if (hasClass) {
                vatChay(lopMoi_DL, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, birdCong)
            }
        }, 9000)
        // clearInterval(xuongRong)
    clearInterval(daRoi)
    clearInterval(setDanh)
    clearInterval(heartRoi)
    clearInterval(sungRoi)
    clearInterval(zoobieBanDan)
    clearInterval(daLanh)

    setTimeout(function() {
            $(".roundNumber").find("h1").text("ROUND 2")
            $(".mainGame").css("background-image", "url(./imgs/NUIDA01.png)")
            var daRoi = setInterval(function() {
                var lopMoi_Da = generateID();
                var ranDLeft = ranDomLeft();
                taoVat("<img/>", "daRoi", lopMoi_Da, 80, ranDLeft, "./imgs/D01.png")
                var hasClass = $(".daRoi").hasClass(`${lopMoi_Da}`);
                if (hasClass) {
                    vatChay(lopMoi_Da, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, gameOver)
                }
            }, 9000)
            setTimeout(function() {
                $(".roundNumber").find("h1").text("ROUND 3")
                $(".mainGame").css("background-image", "url(./imgs/NUIDA02.jpg)")
                var heartRoi = setInterval(function() {
                    var lopMoi_tim = generateID();
                    var ranDLeft = ranDomLeft();
                    taoVat("<i></i>", "heartDrop fas fa-heart", lopMoi_tim, 80, ranDLeft, "")
                    var hasClass = $(".heartDrop").hasClass(`${lopMoi_tim}`);
                    if (hasClass) {
                        vatChay(lopMoi_tim, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, tangMau)
                    }
                }, 20000)
                var daLanh = setInterval(function() {
                    var lopMoi_DL = generateID();
                    var ranDLeft = ranDomLeft();
                    taoVat("<img/>", "daLanh", lopMoi_DL, 80, ranDLeft, "./imgs/DALANH01.png")
                    var hasClass = $(".daLanh").hasClass(`${lopMoi_DL}`);
                    if (hasClass) {
                        vatChay(lopMoi_DL, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, birdCong)
                    }
                }, 9000)
                setTimeout(function() {
                    $(".roundNumber").find("h1").text("ROUND 4")
                    $(".mainGame").css("background-image", "url(./imgs/BIEN01.jpg)")
                    var sungRoi = setInterval(function() {
                        var lopMoi_sung = generateID();
                        var ranDLeft = ranDomLeft();
                        taoVat("<img/>", "sung", lopMoi_sung, 80, ranDLeft, "./imgs/SUNG01.png")
                        var hasClass = $(".sung").hasClass(`${lopMoi_sung}`);
                        if (hasClass) {
                            vatChay(lopMoi_sung, 1, 0, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, nhanSung)
                        }
                    }, 12000)
                    setTimeout(function() {
                        $(".roundNumber").find("h1").text("ROUND 5")
                        $(".mainGame").css("background-image", "url(./imgs/TUYET03.gif)")
                        var zoobieBanDan = setInterval(function() {
                            var lopMoi_ZB_BD = generateID();
                            var ranDTop = ranDomTop();
                            taoVat("<img/>", "zoobie", lopMoi_ZB_BD, ranDTop, 1150, `./imgs/ZOOBIE05.gif`)
                            var hasClass = $(".zoobie").hasClass(`${lopMoi_ZB_BD}`);
                            if (hasClass) {
                                vatChay(lopMoi_ZB_BD, 0, -1, 50, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan, gameOver)
                                ban_Virus(lopMoi_ZB_BD, daRoi, xuongRong, setDanh, heartRoi, sungRoi, daLanh, zoobieBanDan)
                            }
                        }, 20000)
                        setTimeout(function() {
                            $(".roundNumber").find("h1").text("ROUND FILNAL")
                            $(".mainGame").css("background-image", "url(./imgs/DM01.gif)")
                            var setDanh = setInterval(function() {
                                var lopMoi_set = generateID();
                                var ranDLeft = ranDomLeft();
                                taoVat("<img/>", "setDanh", lopMoi_set, 50, ranDLeft, `./imgs/${setArrayPNG[ranDom_SET_PNG()]}.png`)
                                var hasClass = $(".setDanh").hasClass(`${lopMoi_set}`);
                                if (hasClass) {
                                    setTimeout(function() {
                                        $(`.${lopMoi_set}`).remove()
                                    }, 500)
                                }
                            }, 5000)
                            setTimeout(function() {
                                $(".alertTheEnd").show();
                                $(".alertTheEnd").find("h2").text("YOU WIN")
                                clearInterval(daRoi)
                                clearInterval(xuongRong)
                                clearInterval(setDanh)
                                clearInterval(heartRoi)
                                clearInterval(sungRoi)
                                clearInterval(zoobieBanDan)
                                clearInterval(daLanh)
                                clearInterval(bird)
                            }, 240000)
                        }, 200000)
                    }, 160000)
                }, 120000)
            }, 80000)
        }, 40000)
        //     // Khi bird bay chéo
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
})