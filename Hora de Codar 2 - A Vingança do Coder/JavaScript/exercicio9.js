// 9) Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

var A2024 = 2024;
var ano_usuario = parseInt (prompt ("Insira seu ano de nascimento: "))
var idade_do_usuario = A2024 - ano_usuario

if (idade_do_usuario >= 18){

    alert ("Você pode votar!")

}

else {

    alert ("Você não pode votar!")

}