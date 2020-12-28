function mostrarTabuada() {
    let inNumero = document.getElementById("inNumero")
    let outTabuada = document.getElementById("outTabuada")

    let numero = Number(inNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert("Por favor, insira um valor válido!")
        inNumero.focus()
        return
    }

    let resposta = ""
    let mult

    for (let i = 1; i <= 10; i++) {
        mult = numero*i
        resposta = `${resposta} ${numero} x ${i} = ${mult} \n`
    }

    outTabuada.textContent = resposta
}

let btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", mostrarTabuada)