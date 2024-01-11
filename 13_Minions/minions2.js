const bo = document.getElementById("bot");
var derecha = document.getElementById("dr");

function bacMin3() {
    derecha.style.backgroundImage = 'url(img/min3.jpg)';
}

function bacMin2() {
    derecha.style.backgroundImage = 'url(img/min2.jpg)';
}

// Escucha y eventos
bo.addEventListener("mousedown", bacMin3);
bo.addEventListener("mouseup", bacMin2);