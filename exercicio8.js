const prompt = require('prompt-sync')()

// Usando for e if, imprima os números de 1 a 50, mas interrompa o laço ao encontrar 
// um número maior que 40 (use break).

for (let index = 1; index <= 50; index++) {
    if (index > 40) {
        break;
    }
    console.log(index);
}