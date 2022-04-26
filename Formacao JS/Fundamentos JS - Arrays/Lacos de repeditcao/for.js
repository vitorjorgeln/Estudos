const numeros = [100, 200, 300, 400, 500, 600]

for (let index = 0; index < numeros.length; index++) {
    let retorno =  `Numero ` + numeros[index] + ` indexado na posicao ` + numeros.indexOf(numeros[index])
    console.log(retorno)  
}