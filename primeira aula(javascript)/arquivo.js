function DarAlerta(texto){
    var texticulo = documento.getElementById("texticulo").value
    window.alert("Seu amigo é o mais" +texticulo);
}


DarAlerta("conteudo da variavel que eu quis dar");


window.alert("Este é um alerta");
console.log("Esta mensagem está escondida");

var entrada = prompt("entre com sua idade");

console.log(entrada);

entrada = parseInt(entrada);

if(entrada >= 18){
    console.log("Voce é de maior");
    document.getElementById("testeID").innerHTML = "Voce é de maior";
    document.getElementById("bodinho").style.setProperty("background-color", "lightskyblue");
}else if(entrada < 18){
    console.log("DE MENOR!");
}else{
    console.log("INVALIDO!");
}

