var arraysPNG = ["ZB01", "ZB02", "ZB03", "ZB04", "ZB05", "ZB06", "ZB07", "ZB08", "ZB09"];
var key = {
    w: false,
    s: false,
    a: false,
    d: false
};
var setArrayPNG = ["SET04", "SET05"];
var mayBay_NemBom = ["TRUCTHANG03", "TRUCTHANG02"]
var bom = ['TENLUA09', 'TENLUA04']
var NHTs = ['NHEN01', 'NHT01', 'BCC01']
var PHETAs = []
var thanhMau_MB_TL = []

var lanhCong = false;
var xeTang = false;
var mayBay_tenLua = false;
var DB_run = true
var DB_run_right = false
var XeTang_Ta; //save lopMoi của xe tăng để control khi nó bị quái chạm

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

function generateID() {
    return "A" + s4() + s4() + s4() + "_" + s4() + s4() + s4() + "_" + s4() + s4();
}

function ranDomTop() {
    return Math.floor(Math.random() * (460 - 50 + 1) + 50)
}

function ranDomLeft() {
    return Math.floor(Math.random() * (1000 - 50 + 1) + 50)
}

function ranDomPNG() {
    return Math.floor(Math.random() * arraysPNG.length)
}

function ranDomMayBay() {
    return Math.floor(Math.random() * mayBay_NemBom.length)
}

function ranDomBom() {
    return Math.floor(Math.random() * bom.length)
}

function ranDom_SET_PNG() {
    return Math.floor(Math.random() * setArrayPNG.length)
}

function ranDom_NHTs() {
    return Math.floor(Math.random() * NHTs.length)
}