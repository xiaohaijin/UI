window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
    if (document.getElementById) {
        for (var i = 0; i < 24; ++i) {
            setSquare(i);
        }
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function setSquare(thisSquare) {
    var currentSquare = "square" + thisSquare;
    var colPlace = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
    var colBasis = colPlace[thisSquare] * 15;
    var newNum;
    do {
        newNum = colBasis + getNewNum() + 1;
    }
    while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
    return Math.floor(Math.random() * 15);
}