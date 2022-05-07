class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    saque(valor){
        this.saldo -= valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca+= valor
    }

    exibirSaldoPupanca(){
        console.log(this.saldoPoupanca)
    }
}

const VitorLeal = new ClientePupanca ("Vitor","vitor@email.com", "021201478156",200,300)

VitorLeal.depositarPoupanca(600)
VitorLeal.depositar(100)

console.log(VitorLeal)
