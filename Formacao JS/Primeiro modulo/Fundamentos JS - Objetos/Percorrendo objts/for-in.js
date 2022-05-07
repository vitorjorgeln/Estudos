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

let relatorio = ""

// ---------------------------------------------------------------------------------------------

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
        relatorio += `${info} : ${cliente[info]} \n`
    }
    
}

console.log(relatorio)