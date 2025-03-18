// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    const listaAmigosElement = document.getElementById('listaAmigos');
    const resultadoElement = document.getElementById('resultado');

    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado');
        inputAmigo.value = '';
        return;
    }

    amigos.push(nombreAmigo);

    const itemAmigo = document.createElement('li');
    itemAmigo.textContent = nombreAmigo;
    itemAmigo.classList.add('name-item');

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '✖';
    botonEliminar.classList.add('delete-button');
    botonEliminar.onclick = () => eliminarAmigo(nombreAmigo, itemAmigo);

    itemAmigo.appendChild(botonEliminar);

    listaAmigosElement.appendChild(itemAmigo);


    inputAmigo.value = '';


    resultadoElement.innerHTML = '';
}

function eliminarAmigo(nombre, elementoLi) {

    amigos = amigos.filter(amigo => amigo !== nombre);
    
    elementoLi.remove();
}

function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');


    if (amigos.length < 2) {
        alert('Debe agregar al menos 2 amigos para realizar el sorteo');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultadoElement.innerHTML = '';


    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoItem.classList.add('result-item');


    resultadoElement.appendChild(resultadoItem);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

