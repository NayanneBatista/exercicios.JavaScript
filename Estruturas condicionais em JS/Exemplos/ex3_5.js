function calcularRaiz() {
    let inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    let numero = Number(inNumero.value)

    if (numero == "" || isNaN(numero)) {
        alert("Informe um número válido")
        inNumero.focus()
        return
    }

    let raiz = Math.sqrt(numero)

    if (raiz % 1 == 0) {
        outResposta.textContent = `A raiz quadrada de ${numero} é igual a ${raiz}`
    } else {
        outResposta.textContent = `Não há raiz exata para ${numero}`
    }
}

let btRaizQuadrada = document.getElementById("btRaizQuadrada")
btRaizQuadrada.addEventListener("click", calcularRaiz)