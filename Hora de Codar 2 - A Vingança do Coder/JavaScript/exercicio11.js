// 11) Uma micro calculadora Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas(codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação). O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.
        
        // Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações


        var operacoes = parseInt (prompt("Escolha a Operação: 1: Adição | 2: Subtração | 3: Divisão | 4: Multiplicação"))
        var num_usuario1 = parseInt(prompt("Insira um número de 1 a 4: "))
        var num_usuario2 = parseInt(prompt("Agora insira outro número de 1 a 4: "))

        var resultado;

        if (operacoes === 1){

            resultado = num_usuario1 + num_usuario2;
            alert("A Adição de seus números é : " + resultado);
        }

        else if (operacoes === 2){

            resultado = num_usuario1 - num_usuario2;
            alert("A Subtração de seus números é : " + resultado)
        }

        else if (operacoes === 3){

                resultado = num_usuario1 / num_usuario2
                alert("A Divisão de seus números é : " + resultado)
        }

        else if (operacoes === 4){

            resultado = num_usuario1 * num_usuario2
            alert("A Multiplicação de seus números é : " + resultado)
        }

        else {

            alert("Você se esqueceu de digitar algum número !")

        }