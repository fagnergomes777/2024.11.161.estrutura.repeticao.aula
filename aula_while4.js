const prompt = require(`prompt-sync`)()

function validarCredenciais(email, senha) {
    return email === "fulano@email.com" && senha === "123456";
}

let email;
let senha;
do {
    email = prompt("Digite seu e-mail:");
    senha = prompt("Digite sua senha:");
} while (!validarCredenciais(email, senha));