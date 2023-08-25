'use strict'

const botaoMostrarNum = document.getElementById('botao-mostar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostar-numeros-pares')
const botaoMostrarNumMultiplo = document.getElementById('botao-mostrar-multiplos')
const botaoMostrarNumMultiplo3Ou5 = document.getElementById('botao-mostrar-multiplos')
const botaoMostrarNumerosPrimos = document.getElementById('botao-mostrar-multiplos')

function mostrarNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    const ultimoIndice = numeros.length
    container.replaceChild('')

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }

}
function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')


    const ultimoIndice = numeros.length
    container.replaceChild('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }

    }
}
function mostrarNumerosMultiplos() {
    const numeros = document.getElementById('numeros').value.split(',')


    const ultimoIndice = numeros.length
    container.replaceChild('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }

    }
}
function mostrarNumerosMultiplos3Ou5() {
    const numeros = document.getElementById('numeros').value.split(',')


    const ultimoIndice = numeros.length
    container.replaceChild('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }

    }
}
function mostrarNumerosPrimos() {
    const numeros = document.getElementById('numeros').value.split(',')


    const ultimoIndice = numeros.length
    container.replaceChild('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)

        }

    }
}




botaoMostrarNumMultiplo.addEventListener('click', mostrarNumerosMultiplos)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNum.addEventListener('click', mostrarNumeros)
