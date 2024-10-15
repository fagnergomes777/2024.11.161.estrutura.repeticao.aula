const prompt = require('prompt-sync')()

for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        console.log(`par: ${index}`)
    }else{
        console.log(`impar: ${index}`)
    }
}

// IMPLEMENTE UM PROGRAMA QUE MOSTRE TODOS OS
// NUMEROS MULTIPLOS DE 3 ENTRE 1 E 50

for (let index = 1; index <= 50; index++) {
    if (index % 3 === 0) {
        console.log(index)
    }
}
