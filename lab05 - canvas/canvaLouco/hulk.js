let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Quadrado Azul (topo esquerdo)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0,0,60,60);
ctx.strokeRect(0,0,60,60);
ctx.closePath();

//Quadrado Vermelho (topo direito)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(340,0,60,60);
ctx.strokeRect(340,0,60,60);
ctx.closePath();

//Figura preta (baixo esquerdo)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(370,370,30,30);
ctx.strokeRect(370,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(340,370,30,30);
ctx.strokeRect(340,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(370,340,30,30);
ctx.strokeRect(370,340,30,30);
ctx.closePath();

//Figura Amarela (baixo direito)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,370,30,30);
ctx.strokeRect(0,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(30,370,30,30);
ctx.strokeRect(30,370,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,340,30,30);
ctx.strokeRect(0,340,30,30);
ctx.closePath();

//Quadrado Azul Claro (esquerdo)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0,170,30,30);
ctx.strokeRect(0,170,30,30);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0,200,30,30);
ctx.strokeRect(0,200,30,30);
ctx.closePath();

//Quadrado Azul Claro (direito)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(370,185,30,15);
ctx.strokeRect(370,185,30,15);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(370,200,30,15);
ctx.strokeRect(370,200,30,15);
ctx.closePath();

//Linha Verde (Meio)
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.fillRect(0,200,400,1);
ctx.strokeRect(0,200,400,1);
ctx.closePath();
