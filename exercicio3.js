const prompt = require('prompt-sync')()

// Usando for e if, calcule a soma de todos os números de 1 a 100 e imprima o 
// resultado

let soma = 0;

for (let index = 1; index <= 100; index++) {
    soma += index;
}

console.log("A soma de todos os números de 1 a 100 é: " + soma);