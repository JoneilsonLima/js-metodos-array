const botoes = document.querySelectorAll('.btn'); 

botoes.forEach(btn => {
    btn.addEventListener('click', filtrarLivros)
})

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponiveis' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => {
        return livro.categoria == categoria;
    });
    exibirLivrosNaTela(livrosFiltrados);
}