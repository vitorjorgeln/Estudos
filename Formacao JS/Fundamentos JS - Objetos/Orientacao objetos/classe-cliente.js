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

const vitor = new Cliente("Vitor","vitor@email.com","021120481523","500")

vitor.exibirSaldo()

console.log(vitor)