const prompt = require('prompt-sync')()

// Crie um laço for que calcule o fatorial de um número (por exemplo, 5!), imprimindo 
// o resultado final.

let numero = 5;
let fatorial = 1;

for (let index = 1; index <= 5; index++) {
    fatorial *= index;
}

console.log("O fatorial de " + 5 + " é: " + fatorial);