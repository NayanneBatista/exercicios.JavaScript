function mostrarPromocao () {
    let inVeiculo = document.getElementById("inVeiculo")
    let inPreco = document.getElementById("inPreco")
    let outVeiculo = document.getElementById("outVeiculo")
    let outEntrada= document.getElementById("outEntrada")
    let outParcela = document.getElementById("outParcela")

    let veiculo = inVeiculo.value
    let preco = Number(inPreco.value)

    let entrada = preco*0.5
    let parcela = ((preco - entrada)/12).toFixed(2)

    outVeiculo.textContent = `Promoção: ${veiculo}`
    outEntrada.textContent = `Entrada de: R$ ${entrada}`
    outParcela.textContent = `+ 12x de: R$ ${parcela}`
}

let btVerPromocao = document.getElementById("btVerPromocao")
btVerPromocao.addEventListener("click", mostrarPromocao)