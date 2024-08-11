//passo 1- pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//passo 2- identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //passo 3- desmacar o botao selecionado
        desativarBotaoSelecionado();
        //passo 4- marcar o botao clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        //passo 5- esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        //passo 6- fazer aperecer a imagem correspondente ao botao clicado
        imagens[indice].classList.add("ativa");

        //passo 7- esconder a informacao do dragao anteriormente selecionado
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        //passo 8- mostrar a informacao do dragao referente ao botao clicado
        informacoes[indice].classList.add("ativa");
    });
});

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
