function verificarVelocidade() {
    let inVelocidadePermitida = document.getElementById("inVelocidadePermitida")
    let inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor")
    let outResposta = document.getElementById("outResposta")

    let velocidadePermitida = Number(inVelocidadePermitida.value)
    let velocidadeCondutor = Number(inVelocidadeCondutor.value)

    if (velocidadePermitida == "" || isNaN(velocidadePermitida)) {
        alert("Por favor, insira valores válidos.")
        velocidadePermitida.focus()
        return
    }

    if (velocidadeCondutor == "" || isNaN(velocidadeCondutor)) {
        alert("Por favor, insira valores válidos.")
        velocidadeCondutor.focus()
        return
    }

    if (velocidadeCondutor <= velocidadePermitida) {
        outResposta.textContent = "Sem Multa"
    } else if (velocidadeCondutor <= velocidadePermitida*1.2) {
        outResposta.textContent = "Multa Leve"
    } else {
        outResposta.textContent = "Multa Grave"
    }
}

let btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificarVelocidade)