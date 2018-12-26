window.onload = initAll;

function setSquare(thisSquare) {
    var currentSquare = "square" + thisSquare;
    var newNum = Math.floor(Math.random() * 75) + 1;
    document.getElementById(currentSquare).innerHTML = newNum;
}

function initAll() {
    for (var i = 0; i < 24; ++i){
        setSquare(i);
    }
}