const prompt = require('prompt-sync')()

let numero = 1;

do {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
    numero++;
} while (numero <= 30);
