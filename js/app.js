// 1. Cálculo simples do frete com if/else
const botaoFrete = document.querySelector("#btn-frete");
const avisoFrete = document.querySelector("#aviso-frete");

botaoFrete.addEventListener("click", function () {
    const campoValor = document.querySelector("#valor-compra");
    const valor = Number(campoValor.value);

    if (campoValor.value === "" || valor < 0) {
        avisoFrete.textContent = "Digite um valor válido.";
    } else if (valor >= 200) {
        avisoFrete.textContent = "Frete grátis!";
    } else {
        avisoFrete.textContent = "Frete: R$ 20,00";
    }
});

// 2. Menu que abre e fecha no celular
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", menu.classList.contains("aberto"));
});

// 3. Validação do formulário
const formulario = document.querySelector("#contato-form");
const resposta = document.querySelector("#resposta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    // O HTML já verifica os campos obrigatórios e o formato do e-mail.
    if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        resposta.textContent = "Preencha todos os campos.";
    } else {
        resposta.textContent = "Mensagem preenchida com sucesso!";
        formulario.reset();
    }
});
