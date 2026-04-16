let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let retangulo1 = {
    x: 0,
    y: 0,
    altura: 10,
    largura: 50,
    cor: "red",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

// animaçao do retangulo bater na chão (eixo y) e voltar (para botar o retangulo para bater na parede somente trocar o eixo)
let direcao = 1;
function animacao() {
    ctx.clearRect(0, 0, 400, 400)
    if(retangulo1.y == 390){
        direcao = -1
    }
    if(retangulo1.y == 0){
        direcao = 1
    }
    retangulo1.y = retangulo1.y + direcao;
    retangulo1.desenha();
    requestAnimationFrame(animacao)
}
animacao();