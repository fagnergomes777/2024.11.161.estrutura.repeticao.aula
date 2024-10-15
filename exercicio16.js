const prompt = require('prompt-sync')()

// Usando for e if, verifique se um número específico entre 1 e 20 é primo, 
// imprimindo "É primo" ou "Não é primo".

let numero = 2;
let isPrimo = true;

if (numero < 2 || numero > 20) {
    console.log("O número deve estar entre 1 e 20.");
} else {
    for (let index = 2; index <= Math.sqrt(numero); index++) {
        if (numero % index === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        console.log("É primo");
    } else {
        console.log("Não é primo");
    }
}
