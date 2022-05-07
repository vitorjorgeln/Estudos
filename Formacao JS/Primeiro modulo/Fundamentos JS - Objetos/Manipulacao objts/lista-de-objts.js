let cliente = {
    nome: "Vitor",
    idade: "23",
    cpf: "12345678900",
    email: "vitor@email.com",
    fones: ["5531993125578", "51199874563"],
    dependente: [{
        nome: "Vivian",
        parentesco: "Filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependente.push({
    nome: "Viviane",
    parentesco: "mae",
    dataNasc: "20/03/1963"
})

// buscar por um dependente especifico
const clienteUnico = cliente.dependente.filter(dependente => dependente.nome == "Viviane")

console.log(clienteUnico)