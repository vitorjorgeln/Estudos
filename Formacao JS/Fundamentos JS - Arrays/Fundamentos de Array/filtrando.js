const resposta = {
    "success": true,
    "status": 200,
    "response": [{
        "cliente": "vitor",
        "telefone": "5531993125519",
        "Empresa": "Take",
        "cpf": "22120481636"
    }, {
        "cliente": "Samukinha",
        "telefone": "553493246299",
        "Empresa": "Take",
        "cpf": "12364567899"
    }, {
        "cliente": "jordhan",
        "telefone": "5527999914970",
        "Empresa": "Take",
        "cpf": "00000000099"
    }]
}
// ------------------------------------------------------------------------- //
const obj = resposta.response
const cpfuser = "00000000099"
const telUser = "5527999914971"

let result = obj.map(cpf => {
    if (cpf.cpf == cpfuser) {
        return cpf
    } else {
        return false
    }
})

const data = result.find(cpf => cpf != false)

let cliente = ""
if (data) {
    if (data.telefone == telUser) {
        if (data.cpf == cpfuser) {
            cliente = "Autorizado"
        } else {
            cliente = "Nao autorizado"
        }
    } else {
        cliente = "Nao autorizado"
    }
} else {
    cliente = "Nao autorizado"
}

console.log(cliente)

// ------> FAZER ISSO COM FOR, MAS QUE VAI QUEBRAR POR CONTA DO TAMANHO DO OBJ <--------
// const data = []

// for (let i = 0; i < result.length; i++) {
//     if (result[i] != false){
//         data.push(result[i])
//     }
// }