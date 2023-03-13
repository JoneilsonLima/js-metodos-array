let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdernados);
}