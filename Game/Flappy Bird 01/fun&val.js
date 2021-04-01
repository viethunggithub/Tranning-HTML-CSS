var arraysPNG = ["ZB01", "ZB02", "ZB03", "ZB04", "ZB05", "ZB06", "ZB07", "ZB08"];
var key = {
    w: false,
    s: false,
    a: false,
    d: false
};
var setArrayPNG = ["SET04", "SET05"];

var lanhCong = false;

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

function generateID() {
    return "AAA" + s4() + "_" + s4();
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

function ranDom_SET_PNG() {
    return Math.floor(Math.random() * setArrayPNG.length)
}