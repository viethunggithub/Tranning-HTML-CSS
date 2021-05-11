class NhanVat {
    constructor(tag, lopCu, lopMoi, xyTop, xyLeft, urlIMG, mana_Total) {
        this.tag = tag
        this.lopCu = lopCu
        this.lopMoi = lopMoi;
        this.xyTop = xyTop
        this.xyLeft = xyLeft
        this.urlIMG = urlIMG
        this.mana_Total = mana_Total
    }

    Create() {
        $(`${this.tag}`, {
            "class": `${this.lopMoi} ${this.lopCu}`,
            "style": `top: ${this.xyTop}px;left:${this.xyLeft}px`,
            "src": `${this.urlIMG}`
        }).appendTo("body")
    }
    Create_Thanh_Mau() {
        var width = $(`.${this.lopMoi}`).width()
        var tag_Parents = $(`<div></div>`, {
            "class": `mana mana_${this.lopMoi}`,
            "style": `top: ${this.xyTop}px;left:${this.xyLeft}px;width:${width}px`,
            "mana": `${this.mana_Total}`
        }).appendTo(`body`)
        $(`<div></div>`, {
            "class": `mana_Rest`,
            "style": `width:100%`
        }).appendTo(tag_Parents)
    }

    Run_Ngang(number) {
        var xy = $(`.${this.lopMoi}`).offset()
        if (xy != undefined) {
            $(`.${this.lopMoi}`).offset({
                left: xy.left - number
            })
            $(`.mana_${this.lopMoi}`).offset({
                left: xy.left - number
            })
        }
    }
    Run_Ngang_Right(number) {
        var xy = $(`.${this.lopMoi}`).offset()
        if (xy != undefined) {
            $(`.${this.lopMoi}`).offset({
                left: xy.left + number
            })
            $(`.mana_${this.lopMoi}`).offset({
                left: xy.left + number
            })
        }
    }
    Run_Doc(number) {
        var xy = $(`.${this.lopMoi}`).offset()
        if (xy != undefined) {
            $(`.${this.lopMoi}`).offset({
                top: xy.top + number
            })
            $(`.mana_${this.lopMoi}`).offset({
                top: xy.top + number
            })
        }
    }
    Run_Doc_Top(number) {
        var xy = $(`.${this.lopMoi}`).offset()
        if (xy != undefined) {
            $(`.${this.lopMoi}`).offset({
                top: xy.top - number
            })
            $(`.mana_${this.lopMoi}`).offset({
                top: xy.top - number
            })
        }
    }

    Hide_Left() {
        var xy = $(`.${this.lopMoi}`).offset()
        if (xy != undefined) {
            if (xy.left <= 70) {
                return true
            }
        }
    }
    Hide_Right() {
        var xy = $(`.${this.lopMoi}`).offset()
        var HW = $(`.${this.lopMoi}`)
        if (xy != undefined && HW != undefined) {
            if (xy.left + HW.width() >= 1300) {
                return true
            }
        }
    }
    Hide_Bottom() {
        var xy = $(`.${this.lopMoi}`).offset()
        var HW = $(`.${this.lopMoi}`)
        if (xy != undefined && HW != undefined) {
            if (xy.top + HW.height() >= 600) {
                return true
            }
        }
    }
    get Property() {
        var Properties = {
            lopMoi: this.lopMoi,
            mana_Total: this.mana_Total
        }
        return Properties
    }
}