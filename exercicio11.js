const prompt = require('prompt-sync')()

// Usando for e if, imprima todos os números de 1 a 100 que são múltiplos de 7.

for (let index = 1; index <= 100; index++) {
    if (index % 7 === 0) {
        console.log(index);
    }
}