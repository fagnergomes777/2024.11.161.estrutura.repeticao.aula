const prompt = require('prompt-sync')()

// Crie um laço for que imprima os números de 2 a 20 em incrementos de 2. Use 
// apenas for e if para garantir que o número seja par antes de imprimi-lo.

for (let index = 2; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}
