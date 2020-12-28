function ParOuImpar() {
    let inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    let numero = Number(inNumero.value)

    if (numero == "" || isNaN(numero)) {
        alert("Por favor, informe um número válido")
        inNumero.focus()
        return
    }

    if (numero % 2 == 0) {
        outResposta.textContent = `O número ${numero} é par!`
    } else {
        outResposta.textContent = `O número ${numero} é ímpar!`
    }
}

let btParOuImpar = document.getElementById("btParOuImpar")
btParOuImpar.addEventListener("click", ParOuImpar)