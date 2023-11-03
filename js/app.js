/*
- Lista com nome e quando clicar em sortear, gerar aleatóriamente e quando clilcar em reiniciar zerar todos os nomes 
*/
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ``) {
        alert(`Insira um nome válido`);
        return;        
    }
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
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i <amigos.length; i++){
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    let lista = document.getElementById('lista-amigos').innerHTML = '';
    let listaSorteio = document.getElementById('lista-sorteio').innerHTML = '';
        
}
// Algoritimo para embaralhar um array: http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/