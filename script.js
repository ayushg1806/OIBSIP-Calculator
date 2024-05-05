function d(val) {
    document.getElementById('result').value += val;
}

function solve() {
    var value1 = document.getElementById('result').value;
    let res = eval(value1);
    document.getElementById('result').value = res;
}

function clear() {
    document.getElementById('result').value = "";
}

function trig(func) {
    var value1 = document.getElementById('result').value;
    document.getElementById('result').value = Math[func](value1);
}

function log() {
    var value1 = document.getElementById('result').value;
    document.getElementById('result').value = Math.log10(value1);
}

function ln() {
    var value1 = document.getElementById('result').value;
    document.getElementById('result').value = Math.log(value1);
}

function sqrt() {
    var value1 = document.getElementById('result').value;
    document.getElementById('result').value = Math.sqrt(value1);
}