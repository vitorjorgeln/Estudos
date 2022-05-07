var listaNomes = ["vitor", "jorge", "leal", "nascimento"] 
var listaTodasMaiusculas = listaNomes.map(todasMaiusculas)
var listaPrimeiraMaiuscula = listaNomes.map(primeiraMaiusculas)

var retorno = {
    listaTodasMaiusculas,
    listaPrimeiraMaiuscula
}

console.log(retorno)

function todasMaiusculas(nome){
    return nome.charAt(0).toUpperCase() + nome.slice(1)
}

function primeiraMaiusculas(nome){
    return nome.toUpperCase()
}