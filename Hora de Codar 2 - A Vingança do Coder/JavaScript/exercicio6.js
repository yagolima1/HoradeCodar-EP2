 // 6) Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)


 var num1 = parseInt(prompt("Informe o primeiro número: "))
 var num2 = parseInt(prompt("Informe o segundo número: "))
 var num3 = parseInt(prompt("Informe o terceiro número: "))
 var num4 = parseInt(prompt("Informe o quarto e último número: "))

 if (num1 > num2 && num1 > num3 && num1 > num4) {

     alert("O primeiro número é: " + num1 + " o último número é o: " + num4 + " e o maior de todos eles é o: " + num1)

 }

 else if (num2 > num1 && num2 > num3 && num2 > num4) {

     alert("O primeiro número é: " + num1 + " o último número é o: " + num4 + " e o maior de todos eles é o: " + num2)

 }

 else if (num3 > num1 && num3 > num2 && num3 > num4) {

     alert("O primeiro número é: " + num1 + " o último número é o: " + num4 + " e o maior de todos eles é o: " + num3)

 }

 else if (num4 > num1 && num4 > num2 && num4 > num3) {

     alert("O primeiro número é o: " + num1 + ",  o último número é o: " + num4 + " e o maior de todos eles é o: " + num4)

 }

 else {
     alert("Você se esqueceu de digitar algum número ou não digitou um número")
 }