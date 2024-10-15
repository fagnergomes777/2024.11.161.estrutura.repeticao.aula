const prompt = require('prompt-sync')()

// Escreva um laço for para calcular a soma dos números pares entre 1 e 50 e imprima 
// o resultado final.

let soma = 0;

for (let index = 1; index <= 50; index++) {
    if (index % 2 === 0) {
        soma += index;
    }
}

console.log("A soma dos números pares entre 1 e 50 é: " + soma);