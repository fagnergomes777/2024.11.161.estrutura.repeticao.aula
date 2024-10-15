const prompt = require('prompt-sync')()

// Escreva um laço for que imprima a sequência de números de 1 a 30, mas use if para 
// parar a execução do laço ao encontrar o primeiro número que é maior que 25.

for (let index = 1; index <= 30; index++) {
    if (index > 25) {
        break;
    }
    console.log(index);
}