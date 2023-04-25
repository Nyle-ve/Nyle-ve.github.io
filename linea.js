class linea{
    constructor(){

    }
    puntoPendiente(punto1, punto2, puntos){
        
        let aumentoX = 0;
        if(punto1.x > punto2.x) aumentoX = -1;
        else if(punto1.x < punto2.x) aumentoX = 1;
        
        
        if(punto1.x === punto2.x){
            let x = punto1.x;
            let aumentoY;
            if(punto1.y > punto2.y) aumentoY = -1;
            else aumentoY = 1;
    
            for(let y = punto1.y; y != punto2.y; y += aumentoY){
                puntos.push(new punto(x, y));
            }
            
        }
        else{ 
            let m = (punto2.y - punto1.y) / (punto2.x - punto1.x);
            let b = punto1.y - (m*punto1.x);
            let start = Math.min(punto1.x, punto2.x);
            let end = Math.max(punto1.x, punto2.x);
            for(let x = start; x <= end; x++){
                let y = (m * x) + b;
                puntos.push(new punto(x, y));
            }
        }
        return puntos;
    }

    dda(punto1, punto2, puntos){
        let dx = punto2.x - punto1.x;
        let dy = punto2.y - punto1.y;
        
        let p = (abs(dx) >= abs(dy)) ? abs(dx) : abs(dy);

        let incx = dx / p;
        let incy = dy / p;
        let x = punto1.x;
        let y = punto1.y;
        for(let i = 0; i <= p; i++){
            puntos.push(new punto(x, y));
            x += incx;
            y += incy;
        }
        
        return puntos;
    }

    bresenham(punto1, punto2, puntos){
        let x = punto1.x;
        let aumentoX = (x <= punto2.x) ? 1 : -1
        let y = punto1.y;
        let aumentoY = (y <= punto2.y) ? 1 : -1
        puntos.push(new punto(x, y));

        let dx = Math.abs(punto2.x - punto1.x);
        let dy = Math.abs(punto2.y - punto1.y);
        let m = (dx === 0) ? 10 : dy/dx;
    
        if(m >= 0 && m < 1){
            let pk = 2 * dy - dx;
            for(let i = 0; i < dx; i++){
                if(pk < 0){
                    pk = pk + 2 * dy;
                    x += aumentoX;
                }
                else{
                    pk = pk + (2 * dy - 2 * dx);
                    x += aumentoX;
                    y += aumentoY;
                }
                puntos.push(new punto(x, y));
            }
        }
        else if(m >= 1){
            let pk = 2 * dx - dy;
            for(let i = 0; i < dy; i++){
                if(pk < 0){
                    pk += 2 * dx;
                    y += aumentoY;
                }
                else{
                    pk = pk + (2 * dx - 2 * dy);
                    x+= aumentoX;
                    y+= aumentoY;
                }
                puntos.push(new punto(x, y));
            }
        }
        return puntos;
    }
}