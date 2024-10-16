const prompt = require('prompt-sync')()

let index = 0;

do {
    if (index % 2 === 0) {
        console.log(`par: ${index}`);
    } else {
        console.log(`impar: ${index}`);
    }
    index++;
} while (index <= 10);