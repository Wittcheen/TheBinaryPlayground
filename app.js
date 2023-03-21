var dec, hex, ranDec, Anding1, Anding2, Oring1, Oring2 = 0;

function init() {
    var bin = generateRandomBinary(8);
    dec = parseInt(bin, 2);
    var bin = bin.match(/.{1,4}/g).toString().replace(',', ' ');
    document.getElementById("bin1").innerHTML = bin;
    document.getElementById("bin2").innerHTML = bin;
    document.getElementById("binToDec").value = "";
    document.getElementById("binToHex").value = "";

    hex = generateRandomHex(2);
    document.getElementById("hex1").innerHTML = hex;
    document.getElementById("hex2").innerHTML = hex;
    document.getElementById("HexToBin").value = "";
    document.getElementById("HexToDec").value = "";

    ranDec = generateRandomInteger(99);
    document.getElementById("dec1").innerHTML = ranDec;
    document.getElementById("dec2").innerHTML = ranDec;
    document.getElementById("DecToBin").value = "";
    document.getElementById("DecToHex").value = "";

    Anding1 = generateRandomBinary(8);
    Anding2 = generateRandomBinary(8);
    fillAnd(Anding1, Anding2);

    Oring1 = generateRandomBinary(8);
    Oring2 = generateRandomBinary(8);
    fillOr(Oring1, Oring2);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function randomDigit(base) {
    return Math.floor(Math.random() * Math.floor(base));
}

function generateRandomBinary(binaryLength) {
    var binary = "";
    for (let i = 0; i < binaryLength; ++i) {
        binary += randomDigit(2);
    }
    return binary;
}

generateRandomHex = length => (
    '0'.repeat(length)
    + Math.floor((Math.random() * 16 ** length))
        .toString(16).toUpperCase()
).slice(-length);

function YToX(frombase, tobase, id) {
    var input = document.getElementById(id);
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let inputVal = document.getElementById(id).value;
            var a = parseInt(inputVal, tobase);
            var b = decimalToHexString(parseInt(inputVal));
            var c = binaryToHex(inputVal);
            var d = parseInt(inputVal, 2);
            var e = parseInt(inputVal, 16);

            if (id = "binToDec") {
                if (a === dec && frombase == 2 && tobase == 10) {
                    input.style.backgroundColor = "Green";
                    input.style.color = "White";
                } else {
                    input.style.backgroundColor = "Red";
                    input.style.color = "White";
                }
            }
            else if (id = "binToHex") {
                if (e === dec && frombase == 2 && tobase == 16) {
                    input.style.backgroundColor = "Green";
                    input.style.color = "White";
                } else {
                    input.style.backgroundColor = "Red";
                    input.style.color = "White";
                }
            }
            else if (id = "HexToBin") {
                if (c === hex.replace(/^0+/, "")) {
                    input.style.backgroundColor = "Green";
                    input.style.color = "White";
                } else {
                    input.style.backgroundColor = "Red";
                    input.style.color = "White";
                }
            }
            else if (id = "HexToDec") {
                if (b === hex.replace(/^0+/, "") && frombase == 16 && tobase == 10) {
                    input.style.backgroundColor = "Green";
                    input.style.color = "White";
                } else {
                    input.style.backgroundColor = "Red";
                    input.style.color = "White";
                }
            }
            else if (id = "DecToBin") {
                if (d === ranDec) {
                    input.style.backgroundColor = "Green";
                    input.style.color = "White";
                } else {
                    input.style.backgroundColor = "Red";
                    input.style.color = "White";
                }
            }
            else if (id = "DecToHex") {
                if (e === ranDec) {
                    input.style.backgroundColor = "Green";
                    input.style.color = "White";
                } else {
                    input.style.backgroundColor = "Red";
                    input.style.color = "White";
                }
            }
        }
    });
}

function decimalToHexString(number) {
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }
    return number.toString(16).toUpperCase();
}

function binaryToHex(number) {
    return (parseInt(number, 2).toString(16).toUpperCase());
}

function fillAnd(Anding1, Anding2) {
    for (let i = 1; i < 9; i++) {
        document.getElementById("and0" + i).innerHTML = Anding1[i - 1];
        document.getElementById("and1" + i).innerHTML = Anding2[i - 1];
    }
}

function fillOr(Oring1, Oring2) {
    for (let i = 1; i < 9; i++) {
        document.getElementById("or0" + i).innerHTML = Oring1[i - 1];
        document.getElementById("or1" + i).innerHTML = Oring2[i - 1];
    }
}

function checkand(index) {
    var a = document.getElementById("and0" + index).innerText;
    var b = document.getElementById("and1" + index).innerText;
    var r = document.getElementById("i" + index).value.toString();
    let c = (a & b).toString();

    if (c === r) {
        document.getElementById("i" + index).style.backgroundColor = "Green";
        document.getElementById("i" + index).style.color = "White";
        document.getElementById("i" + index).style.border = "none";
    } else {
        document.getElementById("i" + index).style.backgroundColor = "Red";
        document.getElementById("i" + index).style.color = "White";
        document.getElementById("i" + index).style.border = "none";
    }
}

function checkor(index) {
    var a = document.getElementById("or0" + index).innerText;
    var b = document.getElementById("or1" + index).innerText;
    var r = document.getElementById("io" + index).value.toString();
    let c = (a | b).toString();

    if (c === r) {
        document.getElementById("io" + index).style.backgroundColor = "Green";
        document.getElementById("io" + index).style.color = "White";
        document.getElementById("io" + index).style.border = "none";
    } else {
        document.getElementById("io" + index).style.backgroundColor = "Red";
        document.getElementById("io" + index).style.color = "White";
        document.getElementById("io" + index).style.border = "none";
    }
}