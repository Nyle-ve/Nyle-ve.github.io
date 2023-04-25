class circulo{
    constructor(xc, yc, r, algoritmo){
        this.xc = xc;
        this.yc = yc;
        this.r = r;
        this.algoritmo = algoritmo;
        this.puntos = [];
        this.puntoMedio();
    }

    sacarLineas(partes){
        let puntos = [];
        let angleStep = 2 * Math.PI / partes;
        let line = new linea();
        for(let i = 1; i <= partes; i++){
            let angle = i * angleStep;
            let x = this.xc + this.r * Math.cos(angle);
            let y = this.yc + this.r * Math.sin(angle);
            
            switch(this.algoritmo){
                case "pp":
                    puntos = line.puntoPendiente(new punto(this.xc, this.yc), new punto(x, y), puntos); 
                    break;
                
                case "dda":
                    puntos = line.dda(new punto(this.xc, this.yc), new punto(x, y), puntos);
                    break;
                
                case "bresenham":
                    puntos = line.bresenham(new punto(this.xc, this.yc), new punto(x, y), puntos);
                    break;
            }
        }
        
        return puntos;
    }

    puntoMedio(){
        let y = this.r;
        let x = 0;
        let p = 5 / 4 - this.r;

        while(x <= y){
            this.pushPoints(x, y, this.xc, this.yc);
            if(p < 0){
                x++;
                p = p + 2 * x + 1;
            }
            else{
                x++;
                y--;
                p = p + 2 * x + 1 - 2 * y;
            }
            
        }
    }

    pushPoints(x, y, xc, yc){
        this.puntos.push(new punto(x + xc, y + yc));
        this.puntos.push(new punto(y + xc, x + yc));
        this.puntos.push(new punto(-x + xc, y + yc));
        this.puntos.push(new punto(-y + xc, x + yc));
        this.puntos.push(new punto(-x + xc, -y + yc));
        this.puntos.push(new punto(-y + xc, -x + yc));
        this.puntos.push(new punto(x + xc, -y + yc));
        this.puntos.push(new punto(y + xc, -x + yc));
    }

    drawPuntos(){
        for(let punto of this.puntos){
            stroke(0);
            punto.draw();
        }
    }
}