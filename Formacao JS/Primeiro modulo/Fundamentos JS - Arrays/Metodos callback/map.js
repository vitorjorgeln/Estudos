const notas = [5, 1, 1, 1]
let mapFuncao = notas.map(nota => nota == 10 ? nota : ++nota) // a nota nao deve ser maior que 10.

console.log(mapFuncao)