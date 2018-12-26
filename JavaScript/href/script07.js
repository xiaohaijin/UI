function initRedict() {
    window.location = "script07.html";
    return false;
}

function initAll() {
    document.getElementById("redirect").onclick = initRedict;
}

window.onload = initAll;