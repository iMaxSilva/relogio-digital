const relogio = document.querySelector('.relogio');
const digital = document.createElement('p');

function mostrarHora() {
    let data = new Date();
    digital.innerHTML = data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
    relogio.appendChild(digital); 
}

mostrarHora()

const timer = setInterval(function () {
    mostrarHora();
}, 1000);

