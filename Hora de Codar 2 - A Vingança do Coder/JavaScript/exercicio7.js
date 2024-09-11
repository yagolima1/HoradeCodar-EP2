// 7) Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.

var numeros = [];
var num_usuario;
var soma = 0;

for (var i=0; i < 6; i++){

    num_usuario = parseInt (prompt ("Digite o " + (i+1) + "° número"))
    numeros.push (num_usuario);

    if (num_usuario < 72) {

        soma = soma + num_usuario

    }

}

alert ("A soma dos números menores que 72 é: " + soma + " e os números digitados foram: " + numeros.join(", "))