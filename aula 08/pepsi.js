let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let circulo = {
    x: 200,
    y: 200,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

// animacao do mexer o circulo dentro do canva
function animacao(){
    ctx.clearRect(0,0,400,400)
    circulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {circulo.y = circulo.y-10}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+10}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-10}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+10}  
})