function parquimetro() {
    let inValor = document.getElementById("inValor")
    let outTempo = document.getElementById("outTempo")
    let outTroco = document.getElementById("outTroco")

    let valor = Number(inValor.value)

    if (valor == "" || isNaN(valor)) {
        alert("Insira um valor válido!")
        inValor.focus()
        return
    }

    if (valor < 1) {
        alert("Valor Insuficiente")
        inValor.focus()
        return
    }

    if (valor >= 1 && valor < 1.75) {
        outTempo.textContent = "Tempo: 30 min"
        if (valor != 1) {
            outTroco.textContent = `Troco R$: ${(valor - 1).toFixed(2)}`
        }
    }

    if (valor >= 1.75 && valor < 3) {
        outTempo.textContent = "Tempo: 60 min"
        if (valor != 1.75) {
            outTroco.textContent = `Troco R$: ${(valor - 1.75).toFixed(2)}`
        }
    }

    if (valor > 3) {
        outTempo.textContent = "Tempo: 120min"
        if (valor != 3) {
            outTroco.textContent = `Troco R$: ${(valor - 3).toFixed(2)}`
        }
    }
}

let btConfirmar = document.getElementById("btConfirmar")
btConfirmar.addEventListener("click", parquimetro)
