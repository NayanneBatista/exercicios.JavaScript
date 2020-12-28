function calcularPreco() {
    let inQuilo = document.getElementById("inQuilo")
    let inConsumo = document.getElementById("inConsumo")
    let outValor = document.getElementById("outValor")

    let quilo = Number(inQuilo.value)
    let consumo = Number(inConsumo.value)

    let valor = (consumo/1000)*quilo

    outValor.textContent = `Valor a pagar: R$ ${valor.toFixed(2)}`
}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPreco)