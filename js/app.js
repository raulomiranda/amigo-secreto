/*
- Lista com nome e quando clicar em sortear, gerar aleatóriamente e quando clilcar em reiniciar zerar todos os nomes 
*/

let nomes = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    nomes.push(` ${nome}`);
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = nomes + ' ';
    console.log(nomes);
}