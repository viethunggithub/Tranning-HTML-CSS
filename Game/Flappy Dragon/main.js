$(function() {
    PHETAs.push("bird")
    var ZOOBIE_MAX, DALANH, LUUDAN, MANA, MAYBAY_TENLUA, MAYBAY_NEMBOM, TA_TENLUA, MAYBAY_MAX, SETDANH, DIABAY, NHT, DACHAN, LEVEL;
    saveUsers()

    var BiRD = setInterval(function() {
        const intervals = [BiRD, ZOOBIE, DACUOI, SUNG, ZOOBIE_MAX, DALANH, LUUDAN, MANA, MAYBAY_NEMBOM, MAYBAY_TENLUA, TA_TENLUA, SETDANH, NHT, DACHAN, LEVEL]
        const timeouts = [MAYBAY_MAX, DIABAY]
        var Top = $(".bird").offset().top;
        if (Top < 550) {
            $(".bird").offset({
                top: Top + 5
            })
        }
        var mana = Number($(".total").attr("mana"));
        if (mana <= 0) {
            alertTheEnd(intervals, timeouts)
        }
    }, 100);

    var ZOOBIE = setInterval(function() {
        var ZB = new NhanVat("<img/>", "ZB", generateID(), ranDomTop(), 1200, `./imgs/${arraysPNG[ranDomPNG()]}.gif`, 10)
        ZB.Create()
        ZB.Create_Thanh_Mau()
        setInterval(function() {
            if (ZB.Hide_Left()) {
                $(`.${ZB.Property.lopMoi},.mana_${ZB.Property.lopMoi}`).remove()
            } else {
                callback_PHETA(ZB.Property.lopMoi, "ZB", ZB)
                callback_dich(ZB.Property)
            }
        }, 50)
    }, 5000)

    var DACUOI = setInterval(function() {
        var DC = new NhanVat("<img/>", "DC", generateID(), 80, ranDomLeft(), "./imgs/D01.png")
        DC.Create()
        setInterval(function() {
            if (DC.Hide_Bottom()) {
                $(`.${DC.Property.lopMoi},.mana_${DC.Property.lopMoi}`).remove()
            } else {
                DC.Run_Doc(1)
                callback_dich(DC.Property)
            }
        }, 50)
    }, 20000)

    var SUNG = setInterval(function() {
        var S = new NhanVat("<img/>", "S", generateID(), 80, ranDomLeft(), "./imgs/SUNG01.png")
        S.Create()
        setInterval(function() {
            if (S.Hide_Bottom()) {
                $(`.${S.Property.lopMoi}`).remove()
            } else {
                S.Run_Doc(1)
                callback_PHETA(S.Property.lopMoi, "SUNG")
            }
        }, 50)
    }, 15000)



    //Main Game

    var EASE = setTimeout(function() {
            $(".mainGame").css('background-image', 'url("./imgs/RC02.jpg")')
            $(".roundNumber").find("b").text(`ROUND 2`)

            ZOOBIE_MAX = setInterval(function() {
                var ZB_MAX = new NhanVat("<img/>", "ZB_MAX", generateID(), ranDomTop(), 1150, `./imgs/ZOOBIE05.gif`, 50)
                ZB_MAX.Create()
                ZB_MAX.Create_Thanh_Mau()
                setInterval(function() {
                    if (ZB_MAX.Hide_Left()) {
                        $(`.${ZB_MAX.Property.lopMoi},.mana_${ZB_MAX.Property.lopMoi}`).remove()
                    } else {
                        callback_PHETA(ZB_MAX.Property.lopMoi, "ZB", ZB_MAX)
                        callback_dich(ZB_MAX.Property)
                    }
                }, 50)
                setInterval(function() {
                    callback_PHETA(ZB_MAX.Property.lopMoi, "VIRUS")
                }, 3000)
            }, 15000)

            DALANH = setInterval(function() {
                var DL = new NhanVat("<img/>", "DL", generateID(), 80, ranDomLeft(), "./imgs/DALANH01.png")
                DL.Create()
                setInterval(function() {
                    if (DL.Hide_Bottom()) {
                        $(`.${DL.Property.lopMoi}`).remove()
                    } else {
                        DL.Run_Doc(1)
                        callback_PHETA(DL.Property.lopMoi, "DALANH")
                    }
                }, 50)
            }, 20000)

            LUUDAN = setInterval(function() {
                var LD = new NhanVat("<img/>", "LD", generateID(), 80, ranDomLeft(), "./imgs/LUUDAN01.png")
                LD.Create()
                setInterval(function() {
                    if (LD.Hide_Bottom()) {
                        $(`.${LD.Property.lopMoi}`).remove()
                    } else {
                        LD.Run_Doc(1)
                        callback_PHETA(LD.Property.lopMoi, "LUUDAN")
                    }
                }, 50)
            }, 15000)

            MANA = setInterval(function() {
                var MN = new NhanVat("<i></i>", "heartDrop fas fa-heart", generateID(), 80, ranDomLeft())
                MN.Create()
                setInterval(function() {
                    if (MN.Hide_Bottom()) {
                        $(`.${MN.Property.lopMoi}`).remove()
                    } else {
                        MN.Run_Doc(1)
                        callback_PHETA(MN.Property.lopMoi, "MANA")
                    }
                }, 50)
            }, 40000)

            setTimeout(function() {
                    $(".mainGame").css('background-image', 'url("./imgs/TUYET03.gif")')
                    $(".roundNumber").find("b").text(`ROUND 3`)

                    MAYBAY_TENLUA = setInterval(function() {
                        var MB_TL = new NhanVat("<img/>", "MB_TL", generateID(), ranDomTop(), 1010, "./imgs/TRUCTHANG011.gif", 100)
                        MB_TL.Create()
                        MB_TL.Create_Thanh_Mau()
                        thanhMau_MB_TL.push(`mana_${MB_TL.Property.lopMoi}`)
                        setInterval(function() {
                            callback_PHETA(MB_TL.Property.lopMoi, "MB_TL")
                        }, 10000)
                        setInterval(function() {
                            callback_dich(MB_TL.Property)
                            var has = $(`.MB_TL`).hasClass(`MB_TL`)
                            if (has) {
                                mayBay_tenLua = true
                            } else {
                                mayBay_tenLua = false
                            }
                        }, 100)
                    }, 25000)

                    MAYBAY_NEMBOM = setInterval(function() {
                        var chonMayBay = mayBay_NemBom[ranDomMayBay()],
                            left_MB_NB, img_MB_NB;
                        if (chonMayBay === "TRUCTHANG03") {
                            left_MB_NB = 50
                            img_MB_NB = `./imgs/TRUCTHANG03.gif`
                        } else {
                            left_MB_NB = 1050
                            img_MB_NB = `./imgs/TRUCTHANG02.gif`
                        }
                        var MB_NB = new NhanVat("<img/>", "MB_NB", generateID(), 80, left_MB_NB, img_MB_NB, 100)
                        MB_NB.Create()
                        MB_NB.Create_Thanh_Mau()
                        setInterval(function() {
                            if (chonMayBay === "TRUCTHANG03") {
                                if (MB_NB.Hide_Right()) {
                                    $(`.${MB_NB.Property.lopMoi},.mana_${MB_NB.Property.lopMoi}`).remove()
                                } else {
                                    MB_NB.Run_Ngang_Right(3)
                                }
                            } else {
                                if (MB_NB.Hide_Left()) {
                                    $(`.${MB_NB.Property.lopMoi},.mana_${MB_NB.Property.lopMoi}`).remove()
                                } else {
                                    MB_NB.Run_Ngang(3)
                                }
                            }
                            callback_dich(MB_NB.Property)
                        }, 50)
                        setInterval(function() {
                            callback_PHETA(MB_NB.Property.lopMoi, "MB_NB")
                        }, 10000)
                    }, 25000)

                    TA_TENLUA = setInterval(function() {
                        var TA_TL = new NhanVat("<img/>", "TA_TL", generateID(), 80, ranDomLeft(), "./imgs/TENLUA00.png")
                        TA_TL.Create()
                        setInterval(function() {
                            if (TA_TL.Hide_Bottom()) {
                                $(`.${TA_TL.Property.lopMoi}`).remove()
                            } else {
                                TA_TL.Run_Doc(1)
                                callback_PHETA(TA_TL.Property.lopMoi, "TENLUA")
                            }
                        }, 50)
                    }, 10000)

                    DACHAN = setInterval(function() {
                        var DaChan = new NhanVat("<img/>", "icon_daChan", generateID(), 80, ranDomLeft(), './imgs/VATCAN01.png')
                        DaChan.Create()
                        setInterval(function() {
                            if (DaChan.Hide_Bottom()) {
                                $(`.${DaChan.Property.lopMoi}`).remove()
                            } else {
                                DaChan.Run_Doc(1)
                                callback_PHETA(DaChan.Property.lopMoi, "DACHAN")
                            }
                        }, 50)
                    }, 25000)

                    setTimeout(function() {
                            $(".mainGame").css('background-image', 'url("./imgs/TUYET02.gif")')
                            $(".roundNumber").find("b").text(`ROUND 4`)

                            MAYBAY_MAX = setTimeout(function() {
                                var MB_MAX = new NhanVat("<img/>", "MB_MAX", generateID(), 60, 30, "./imgs/MAYBAY_MAX.gif", 500)
                                MB_MAX.Create()
                                MB_MAX.Create_Thanh_Mau()
                                var MB_MAX_RUN = setInterval(function() {
                                    if (MB_MAX.Hide_Right()) {
                                        $(`.${MB_MAX.Property.lopMoi},.mana_${MB_MAX.Property.lopMoi}`).remove()
                                    } else {
                                        MB_MAX.Run_Ngang_Right(1)
                                        callback_dich(MB_MAX.Property)
                                        callback_PHETA(MB_MAX.Property.lopMoi, "MB_MAX", MB_MAX_RUN)
                                    }
                                }, 50)
                            }, 5000)

                            SETDANH = setInterval(function() {
                                var SD = new NhanVat("<img/>", "SD", generateID(), 50, ranDomLeft(), `./imgs/${setArrayPNG[ranDom_SET_PNG()]}.png`)
                                SD.Create()
                                setTimeout(function() {
                                    $(`.${SD.Property.lopMoi}`).remove()
                                }, 500)
                            }, 20000)

                            setTimeout(function() {
                                    $(".mainGame").css('background-image', 'url("./imgs/RC03.jpg")')
                                    $(".roundNumber").find("b").text(`ROUND 5`)

                                    clearInterval(SETDANH)
                                    DIABAY = setTimeout(function() {
                                        var DB = new NhanVat("<img/>", "DB", generateID(), 100, 1200, "./imgs/DIABAY01.gif", 300)
                                        DB.Create()
                                        DB.Create_Thanh_Mau()
                                        setInterval(function() {
                                            var xy_lopMoi = $(`.${DB.Property.lopMoi}`).offset()
                                            if (DB_run && xy_lopMoi != undefined) {
                                                if (DB_run_right) {
                                                    if (DB.Hide_Right()) {
                                                        $(`.${DB.Property.lopMoi},.mana_${DB.Property.lopMoi}`).remove()
                                                    } else {
                                                        DB.Run_Ngang_Right(3)
                                                    }
                                                } else {
                                                    if (DB.Hide_Left()) {
                                                        $(`.${DB.Property.lopMoi},.mana_${DB.Property.lopMoi}`).remove()
                                                    } else {
                                                        DB.Run_Ngang(3)
                                                    }
                                                }
                                            }
                                            if (xy_lopMoi != undefined && xy_lopMoi.left <= 300) {
                                                DB_run = false
                                                setTimeout(function() {
                                                    DB_run = true
                                                    DB_run_right = true
                                                }, 50000)
                                            }
                                            callback_dich(DB.Property)
                                        }, 10)
                                        setInterval(function() {
                                            callback_PHETA(DB.Property.lopMoi, "DIABAY")
                                        }, 5000)
                                    }, 5000)

                                    LEVEL = setInterval(function() {
                                        setTimeout(function() {
                                                $(".mainGame").css('background-image', 'url("./imgs/RC02.jpg")')
                                                $(".roundNumber").find("b").text(`ROUND 2`)

                                                ZOOBIE_MAX = setInterval(function() {
                                                    var ZB_MAX = new NhanVat("<img/>", "ZB_MAX", generateID(), ranDomTop(), 1150, `./imgs/ZOOBIE05.gif`, 50)
                                                    ZB_MAX.Create()
                                                    ZB_MAX.Create_Thanh_Mau()
                                                    setInterval(function() {
                                                        if (ZB_MAX.Hide_Left()) {
                                                            $(`.${ZB_MAX.Property.lopMoi},.mana_${ZB_MAX.Property.lopMoi}`).remove()
                                                        } else {
                                                            callback_PHETA(ZB_MAX.Property.lopMoi, "ZB", ZB_MAX)
                                                            callback_dich(ZB_MAX.Property)
                                                        }
                                                    }, 50)
                                                    setInterval(function() {
                                                        callback_PHETA(ZB_MAX.Property.lopMoi, "VIRUS")
                                                    }, 3000)
                                                }, 15000)

                                                DALANH = setInterval(function() {
                                                    var DL = new NhanVat("<img/>", "DL", generateID(), 80, ranDomLeft(), "./imgs/DALANH01.png")
                                                    DL.Create()
                                                    setInterval(function() {
                                                        if (DL.Hide_Bottom()) {
                                                            $(`.${DL.Property.lopMoi}`).remove()
                                                        } else {
                                                            DL.Run_Doc(1)
                                                            callback_PHETA(DL.Property.lopMoi, "DALANH")
                                                        }
                                                    }, 50)
                                                }, 20000)

                                                LUUDAN = setInterval(function() {
                                                    var LD = new NhanVat("<img/>", "LD", generateID(), 80, ranDomLeft(), "./imgs/LUUDAN01.png")
                                                    LD.Create()
                                                    setInterval(function() {
                                                        if (LD.Hide_Bottom()) {
                                                            $(`.${LD.Property.lopMoi}`).remove()
                                                        } else {
                                                            LD.Run_Doc(1)
                                                            callback_PHETA(LD.Property.lopMoi, "LUUDAN")
                                                        }
                                                    }, 50)
                                                }, 15000)

                                                MANA = setInterval(function() {
                                                    var MN = new NhanVat("<i></i>", "heartDrop fas fa-heart", generateID(), 80, ranDomLeft())
                                                    MN.Create()
                                                    setInterval(function() {
                                                        if (MN.Hide_Bottom()) {
                                                            $(`.${MN.Property.lopMoi}`).remove()
                                                        } else {
                                                            MN.Run_Doc(1)
                                                            callback_PHETA(MN.Property.lopMoi, "MANA")
                                                        }
                                                    }, 50)
                                                }, 40000)

                                                setTimeout(function() {
                                                        $(".mainGame").css('background-image', 'url("./imgs/TUYET03.gif")')
                                                        $(".roundNumber").find("b").text(`ROUND 3`)

                                                        MAYBAY_TENLUA = setInterval(function() {
                                                            var MB_TL = new NhanVat("<img/>", "MB_TL", generateID(), ranDomTop(), 1010, "./imgs/TRUCTHANG011.gif", 100)
                                                            MB_TL.Create()
                                                            MB_TL.Create_Thanh_Mau()
                                                            thanhMau_MB_TL.push(`mana_${MB_TL.Property.lopMoi}`)
                                                            setInterval(function() {
                                                                callback_PHETA(MB_TL.Property.lopMoi, "MB_TL")
                                                            }, 10000)
                                                            setInterval(function() {
                                                                callback_dich(MB_TL.Property)
                                                                var has = $(`.MB_TL`).hasClass(`MB_TL`)
                                                                if (has) {
                                                                    mayBay_tenLua = true
                                                                } else {
                                                                    mayBay_tenLua = false
                                                                }
                                                            }, 100)
                                                        }, 25000)

                                                        MAYBAY_NEMBOM = setInterval(function() {
                                                            var chonMayBay = mayBay_NemBom[ranDomMayBay()],
                                                                left_MB_NB, img_MB_NB;
                                                            if (chonMayBay === "TRUCTHANG03") {
                                                                left_MB_NB = 50
                                                                img_MB_NB = `./imgs/TRUCTHANG03.gif`
                                                            } else {
                                                                left_MB_NB = 1050
                                                                img_MB_NB = `./imgs/TRUCTHANG02.gif`
                                                            }
                                                            var MB_NB = new NhanVat("<img/>", "MB_NB", generateID(), 80, left_MB_NB, img_MB_NB, 100)
                                                            MB_NB.Create()
                                                            MB_NB.Create_Thanh_Mau()
                                                            setInterval(function() {
                                                                if (chonMayBay === "TRUCTHANG03") {
                                                                    if (MB_NB.Hide_Right()) {
                                                                        $(`.${MB_NB.Property.lopMoi},.mana_${MB_NB.Property.lopMoi}`).remove()
                                                                    } else {
                                                                        MB_NB.Run_Ngang_Right(3)
                                                                    }
                                                                } else {
                                                                    if (MB_NB.Hide_Left()) {
                                                                        $(`.${MB_NB.Property.lopMoi},.mana_${MB_NB.Property.lopMoi}`).remove()
                                                                    } else {
                                                                        MB_NB.Run_Ngang(3)
                                                                    }
                                                                }
                                                                callback_dich(MB_NB.Property)
                                                            }, 50)
                                                            setInterval(function() {
                                                                callback_PHETA(MB_NB.Property.lopMoi, "MB_NB")
                                                            }, 10000)
                                                        }, 25000)

                                                        TA_TENLUA = setInterval(function() {
                                                            var TA_TL = new NhanVat("<img/>", "TA_TL", generateID(), 80, ranDomLeft(), "./imgs/TENLUA00.png")
                                                            TA_TL.Create()
                                                            setInterval(function() {
                                                                if (TA_TL.Hide_Bottom()) {
                                                                    $(`.${TA_TL.Property.lopMoi}`).remove()
                                                                } else {
                                                                    TA_TL.Run_Doc(1)
                                                                    callback_PHETA(TA_TL.Property.lopMoi, "TENLUA")
                                                                }
                                                            }, 50)
                                                        }, 10000)

                                                        DACHAN = setInterval(function() {
                                                            var DaChan = new NhanVat("<img/>", "icon_daChan", generateID(), 80, ranDomLeft(), './imgs/VATCAN01.png')
                                                            DaChan.Create()
                                                            setInterval(function() {
                                                                if (DaChan.Hide_Bottom()) {
                                                                    $(`.${DaChan.Property.lopMoi}`).remove()
                                                                } else {
                                                                    DaChan.Run_Doc(1)
                                                                    callback_PHETA(DaChan.Property.lopMoi, "DACHAN")
                                                                }
                                                            }, 50)
                                                        }, 25000)

                                                        setTimeout(function() {
                                                                $(".mainGame").css('background-image', 'url("./imgs/TUYET02.gif")')
                                                                $(".roundNumber").find("b").text(`ROUND 4`)

                                                                MAYBAY_MAX = setTimeout(function() {
                                                                    var MB_MAX = new NhanVat("<img/>", "MB_MAX", generateID(), 60, 30, "./imgs/MAYBAY_MAX.gif", 500)
                                                                    MB_MAX.Create()
                                                                    MB_MAX.Create_Thanh_Mau()
                                                                    var MB_MAX_RUN = setInterval(function() {
                                                                        if (MB_MAX.Hide_Right()) {
                                                                            $(`.${MB_MAX.Property.lopMoi},.mana_${MB_MAX.Property.lopMoi}`).remove()
                                                                        } else {
                                                                            MB_MAX.Run_Ngang_Right(1)
                                                                            callback_dich(MB_MAX.Property)
                                                                            callback_PHETA(MB_MAX.Property.lopMoi, "MB_MAX", MB_MAX_RUN)
                                                                        }
                                                                    }, 50)
                                                                }, 5000)

                                                                SETDANH = setInterval(function() {
                                                                    var SD = new NhanVat("<img/>", "SD", generateID(), 50, ranDomLeft(), `./imgs/${setArrayPNG[ranDom_SET_PNG()]}.png`)
                                                                    SD.Create()
                                                                    setTimeout(function() {
                                                                        $(`.${SD.Property.lopMoi}`).remove()
                                                                    }, 500)
                                                                }, 20000)

                                                                setTimeout(function() {
                                                                        $(".mainGame").css('background-image', 'url("./imgs/RC03.jpg")')
                                                                        $(".roundNumber").find("b").text(`ROUND 5`)

                                                                        clearInterval(SETDANH)
                                                                        DIABAY = setTimeout(function() {
                                                                            var DB = new NhanVat("<img/>", "DB", generateID(), 100, 1200, "./imgs/DIABAY01.gif", 300)
                                                                            DB.Create()
                                                                            DB.Create_Thanh_Mau()
                                                                            setInterval(function() {
                                                                                var xy_lopMoi = $(`.${DB.Property.lopMoi}`).offset()
                                                                                if (DB_run && xy_lopMoi != undefined) {
                                                                                    if (DB_run_right) {
                                                                                        if (DB.Hide_Right()) {
                                                                                            $(`.${DB.Property.lopMoi},.mana_${DB.Property.lopMoi}`).remove()
                                                                                        } else {
                                                                                            DB.Run_Ngang_Right(3)
                                                                                        }
                                                                                    } else {
                                                                                        if (DB.Hide_Left()) {
                                                                                            $(`.${DB.Property.lopMoi},.mana_${DB.Property.lopMoi}`).remove()
                                                                                        } else {
                                                                                            DB.Run_Ngang(3)
                                                                                        }
                                                                                    }
                                                                                }
                                                                                if (xy_lopMoi != undefined && xy_lopMoi.left <= 300) {
                                                                                    DB_run = false
                                                                                    setTimeout(function() {
                                                                                        DB_run = true
                                                                                        DB_run_right = true
                                                                                    }, 50000)
                                                                                }
                                                                                callback_dich(DB.Property)
                                                                            }, 10)
                                                                            setInterval(function() {
                                                                                callback_PHETA(DB.Property.lopMoi, "DIABAY")
                                                                            }, 5000)
                                                                        }, 5000)
                                                                        setInterval(function() {
                                                                            clearInterval(EASE)

                                                                        }, 100000)
                                                                    }, 60000) //round 5
                                                            }, 60000) //round 4
                                                    }, 60000) //round 3
                                            }, 60000) // round 2
                                    }, 100000)
                                }, 60000) //round 5
                        }, 60000) //round 4
                }, 60000) //round 3
        }, 60000) // round 2
})

// clearInterval(ZOOBIE)
// clearInterval(DACUOI)
// clearInterval(MANA)
// clearInterval(SUNG)
// clearInterval(ZOOBIE_MAX)
// clearInterval(DALANH)
// clearInterval(LUUDAN)
// clearInterval(MAYBAY_TENLUA)
// clearInterval(MAYBAY_NEMBOM)
// clearInterval(DIABAY)
// clearInterval(MAYBAY_MAX)
// clearInterval(TA_TENLUA)
// clearInterval(SETDANH)