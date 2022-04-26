const alunos = ["Vitor", "Leal"]
const medias = [10, 5]

let listaDeNotasEAlunos = [alunos, medias]

function exibeNomeNota(nomeDoAluno){
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ` , sua media e ` + listaDeNotasEAlunos[1][indice]
    }  else {
        return "Aluno nao encontrado"
    }
}

console.log(exibeNomeNota("Vitor"))