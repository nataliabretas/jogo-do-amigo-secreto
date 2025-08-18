let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nome);
    document.getElementById("amigo").value = "";
    console.log(amigos);

    atualizarLista();
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let item = document.createElement("li");
    item.textContent = `O amigo secreto é: ${sorteado}`;
    resultado.appendChild(item);
}

