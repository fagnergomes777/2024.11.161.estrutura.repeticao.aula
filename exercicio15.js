const prompt = require('prompt-sync')()

// Crie um laço for que imprima todos os números de 1 a 20, mas use if para pular os 
// números que não são múltiplos de 2 e 3 ao mesmo tempo.

for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0 && index % 3 === 0) {
        console.log(index);
    }
}