// O livro deve conter :
// - Título
// - Autor
// - Ano de Publicação
// - Status (disponível ou emprestado)

class Livro{
    constructor(titulo, autor, ano, status){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.status = status;
    }
    
}

class Biblioteca{
    //adicionar livro
    //emprestar livro

    constructor(){
        this.livros = [];
    }

    adicionarLivro(livro){
        if (livro !== undefined){
            this.livros.push(livro);
        }
        else{
            console.log("Não pode ser adicionado um livro indefinido");
        }
        
    }

    emprestarLivro(nomeLivro){
        this.livros.forEach(livro => {
            if (livro.titulo == nomeLivro){
                if (livro.status == 'disponível'){
                    livro.status = 'emprestado';
                }
                else{
                    console.log("Livro já foi emprestado");
                }
            }
        });
    }

}

let bibliotecaDoCleitinho = new Biblioteca(); // []

let livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'disponível');

let livro2 = new Livro('Harry Potter', 'J.K. Rowling', 1997, 'disponível');

let livro3 = new Livro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943, 'disponível');

let livrosAdd = [livro1, livro2, livro3]

livrosAdd.forEach(livro => {
    bibliotecaDoCleitinho.adicionarLivro(livro);
})

bibliotecaDoCleitinho.livros.forEach(livro => {
    console.log(livro);
})

bibliotecaDoCleitinho.emprestarLivro('Harry Potter');

bibliotecaDoCleitinho.livros.forEach(livro => {
    console.log(livro);
})