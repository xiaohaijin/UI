window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
    if (document.getElementById("reload").onclick = anotherCard) {
        newCard();
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function newCard() {
    for(var i = 0; i < 24; ++i){
        setSquare(i);
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
    document.getElementById(currentSquare).className = "";
    document.getElementById(currentSquare).onmousedown = toggleColor;
}

function getNewNum() {
    return Math.floor(Math.random() * 15);
}

function anotherCard() {
    for(var i = 1; i < usedNums.length; ++i){
        usedNums[i] = false;
    }
    newCard();
    return false;
}

function toggleColor(event) {
    if(event){
        var thisSquare= event.target;
    }
    else{
        var thisSquare = window.event.srcElement;
    }
    if(thisSquare.className = ""){
        thisSquare.className = "pickedBG";
    }
    else {
        thisSquare.className = "";
    }
}