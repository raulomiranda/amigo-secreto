/*
- Lista com nome e quando clicar em sortear, gerar aleatóriamente e quando clilcar em reiniciar zerar todos os nomes 
*/
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function embaralhar(lista){
    let indice = lista.length
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function sortear() {
    embaralhar(amigos);
    console.log(amigos);
}

function reiniciar() {
    amigos = [];
    let lista = document.getElementById('lista-amigos');
    lista.textContent = ``;
    
}




// Algoritimo para embaralhar um array: http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/