let cliente = {
    nome: "Vitor",
    idade: "23",
    cpf: "12345678900",
    email: "vitor@email.com",
    fones: ["5531993125578", "51199874563"],
    saldo: 100,
    depositar:function(valor){
        this.saldo+= valor
    },
    saque:function(valor){
        this.saldo-= valor
    },
    dependente: [{
            nome: "Vivian",
            parentesco: "Filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Viviane",
            parentesco: "Mae",
            dataNasc: "20/03/1963"
        }
    ]
}

//----------------------------------------------------------------------------------------------

function oferecerSeguro(cliente){
    const clientePropriedades = Object.keys(cliente)
    if(clientePropriedades.includes("dependente")){
        console.log(`Oferta de seguro de vida para ${cliente.nome}`)
    } else{
        console.log("Sem clientes com dependentes")
    }
}

oferecerSeguro(cliente)