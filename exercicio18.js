const prompt = require('prompt-sync')()

// Crie um laço for que imprima todos os números de 1 a 20 e, para cada número, use 
// if para imprimir também o seu quadrado (por exemplo: "Número: 3, Quadrado: 9").

for (let index = 1; index <= 20; index++) {
    let quadrado = index * index;
    console.log("Número: " + index + ", Quadrado: " + quadrado);
}