const livros = require('./lista-de-livros')

let maisBarato = 0

for (let atual = 0; atual < livros.length; atual++) {
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}
console.log(`O livro mais barato e o ${livros[maisBarato].titulo} cujo valor e ${livros[maisBarato].preco}`)
