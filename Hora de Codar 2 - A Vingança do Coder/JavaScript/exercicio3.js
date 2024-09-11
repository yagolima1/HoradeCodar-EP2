// 3) Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

var num1 = parseInt (prompt ("Digite um número") )
var num2 = parseInt (prompt ("Digite um número") )
var num3 = parseInt (prompt ("Digite um número") )

if (num1 > num2 && num1 > num3 ) {

    alert("O maior número é: " + num1)

}

else if (num2 > num1 && num2 > num3){

    alert("O maior número é: " + num2)

}

else if (num3 > num1 && num3 > num2 ){

    alert ("O maior número é: "+ num3)

}

else {
    alert ("Você se esqueceu de colocar um número")
}