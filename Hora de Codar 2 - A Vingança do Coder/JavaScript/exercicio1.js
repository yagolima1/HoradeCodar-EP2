// 1) Escreva um programa em que o usuário informe dois números. Então escreva em tela o maior deles.


var num1 = parseInt (prompt ("Informe um número: "))
var num2 = parseInt (prompt ("Agora informe outro número: "))
if (num1 > num2) {
    alert ("O maior número é: " + num1)
}
else if (num2 > num1) {
    alert ("O maior número é: " + num2)
}
else {
   alert ("Você digitou números iguais, companheiro(a)")
}