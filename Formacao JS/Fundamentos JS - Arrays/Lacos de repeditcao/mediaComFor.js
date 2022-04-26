const listaMedias = [10, 6.5, 8, 7.5]

let somaMedia = 0
let total = 0
for (let index = 0; index < listaMedias.length; index++) {
    total = (somaMedia += listaMedias[index])/listaMedias.length
} console.log(total)