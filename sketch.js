function setup(){
    createCanvas(windowWidth, windowHeight);
    x = Math.round(windowWidth / 4);
    y = Math.round(windowHeight / 3);
    r = 128;
    circ1 = new circulo(x, y, r, "pp");
    circ2 = new circulo(2*x, y, r, "dda");
    circ3 = new circulo(3*x, y, r, "bresenham");
    puntospp = [];
    puntosdda = [];
    puntosbres = [];
}


function draw(){
    background(255);
    circ1.drawPuntos();
    circ2.drawPuntos();
    circ3.drawPuntos();

    drawPuntos();
}

function cortar(){
    partes = parseInt(document.getElementById("number").value);
    puntospp = circ1.sacarLineas(partes);
    puntosdda = circ2.sacarLineas(partes);
    puntosbres = circ3.sacarLineas(partes);
}

function drawPuntos(){
    for(let punto of puntospp){
        punto.draw();
    }
    for(let punto of puntosdda){
        punto.draw();
    }
    for(let punto of puntosbres){
        punto.draw();
    }
}