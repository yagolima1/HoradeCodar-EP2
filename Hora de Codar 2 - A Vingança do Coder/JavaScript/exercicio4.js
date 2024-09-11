// 4) Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var num1 = parseInt(prompt("Digite um número"))
var num2 = parseInt(prompt("Digite um número"))
var num3 = parseInt(prompt("Digite um número"))

if (num1 & num2 > num3) {

    alert("a soma do " + num1 + "  com a soma do " + num2 + " é: " + (num1 + num2))

}

else if (num1 & num3 > num2) {

    alert("a soma do " + num1 + "  com a soma do " + num3 + " é: " + (num1 + num3))

}

else if (num2 & num3 > num1) {

    alert("a soma do " + num2 + "  com a soma do " + num3 + " é: " + (num2 + num3))

}

else {
    alert("você se esqueceu ou não colocou um número")
}