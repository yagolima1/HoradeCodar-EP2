// 10) Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas

var genero;
var alt_usuario;

genero = parseFloat (prompt ("Insira o Gênero, 1- Feminino |  2- Masculino"))
alt_usuario = parseFloat (prompt("Agora a altura: "))

if (genero === 1){

    var calculo1 = (62.1 * alt_usuario) - 44.7
    alert("Seu peso ideal é: " + calculo1.toFixed(2) + " kg") // o .toFixed() vai corrigir as casas decimais

}

else if (genero === 2){

    var calculo2 = (72.7 * alt_usuario) - 58
    alert("Seu peso ideal é: " + calculo2.toFixed(2) + " kg") // o .toFixed() vai corrigir as casas decimais

}

else {

    alert("Você digitou um valor incorreto. Tente novamente")

}