const prompt = require('prompt-sync')()

// Escreva um laço for que imprima todos os números de 1 a 30, mas use if para pular 
// os números que são múltiplos de 3.

for (let index = 1; index <= 30; index++) {
    if (index % 3 !== 0) {
        console.log(index);
    }
}