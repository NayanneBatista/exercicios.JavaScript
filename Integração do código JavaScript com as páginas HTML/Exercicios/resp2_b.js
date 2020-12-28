function calculaValor () {
    let inValor = document.getElementById("inValor")
    let inTempo = document.getElementById("inTempo")
    let outTotal = document.getElementById("outTotal")

    let valor = Number(inValor.value)
    let tempo = Number(inTempo.value)

    let parcial = tempo % 15
    let total = " "

    if (parcial!==0) {
        total = Math.floor(tempo/15) * valor + valor
    }
    else {
        total = (tempo/15 * valor)
    }

    outTotal.textContent = `Valor a pagar: R$ ${total.toFixed(2)}`
}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calculaValor)