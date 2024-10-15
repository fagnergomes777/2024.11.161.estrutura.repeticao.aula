const prompt = require('prompt-sync')()

// Usando for e if, imprima os números de 1 a 20, indicando ao lado de cada número 
// se ele é "par" ou "ímpar".

for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        console.log(`par: ${index}`)
    }else{
        console.log(`impar: ${index}`)
    }
}