const prompt = require('prompt-sync')()

// Crie um laço for para imprimir apenas os números ímpares de 1 a 30.

for (let index = 1; index <= 30; index++) {
    if (index % 3 === 0) {
        console.log(`impar: ${index}`)
    }
}