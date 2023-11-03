/*
- Lista com nome e quando clicar em sortear, gerar aleatóriamente e quando clilcar em reiniciar zerar todos os nomes 
*/

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear(){
    
}

