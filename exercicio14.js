const prompt = require('prompt-sync')()

// Usando for, if e else, imprima os números de 1 a 20 e, para cada número, imprima 
// se ele é "menor que 10" ou "maior ou igual a 10".

for (let index = 1; index <= 20; index++) {
    if (index < 10) {
        console.log(index + " é menor que 10");
    } else {
        console.log(index + " é maior ou igual a 10");
    }
}