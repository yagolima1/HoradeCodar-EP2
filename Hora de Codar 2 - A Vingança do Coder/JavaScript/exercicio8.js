// 8) Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

var numeros = [];
var num_usuario;
var soma = 0;
var media = soma

for (var i = 0; i < 4; i++ ){

    num_usuario = parseInt (prompt("Digite o " + (i+1) + "° número"))
    numeros.push (num_usuario)

    if (num_usuario > 0 && num_usuario < 10)

    soma += num_usuario
    media = soma / 4

}

if (media > 5){

    alert ("Parabéns! Você passou no teste.")

}

else {

    alert("Não foi dessa vez, tenta denovo pô")

}