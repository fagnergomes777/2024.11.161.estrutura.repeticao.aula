const prompt = require('prompt-sync')()

// Usando for e if, imprima os números de 1 a 20 e exiba a mensagem "Múltiplo de 5" 
// ao lado dos números que são divisíveis por 5.

for (let index = 1; index <= 20; index++) {
    let mensagem = index;

    if (index % 5 === 0) {
        mensagem += " - Múltiplo de 5";
    }

    console.log(mensagem);
}