let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let bola = {
    x: 0,
    y: 0,
    raio: 30,
    img: new Image(),
    desenha: function(){
        this.img.src = 'pngtree-blue-soccer-ball-png-image_10261267.png'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

// animacao de mover a imagem com o ponteiro do mouse
function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);

    if(x_mouse > 0 + bola.raio && x_mouse < 400 - bola.raio && y_mouse > 0 + bola.raio && y_mouse < 400 - bola.raio){
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else{
        bola.x = bola.x;
        bola.y = bola.y;
    }
})