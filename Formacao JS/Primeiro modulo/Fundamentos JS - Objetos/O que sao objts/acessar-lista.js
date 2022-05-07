let cliente = {
    nome: "Vitor",
    idade: "23",
    cpf:"12345678900",
    email:"vitor@email.com"
}

let chaves = ["nome", "idade", "cpf", "email"]
chaves.forEach(info => {
    console.log(cliente[info])
});