function mostrarPromocao () {
    let inMedicamento = document.getElementById("inMedicamento")
    let inPreco = document.getElementById("inPreco")
    let outNome = document.getElementById("outNome")
    let outValorTotal = document.getElementById("outValorTotal")

    let medicamento = inMedicamento.value
    let preco = Number(inPreco.value)
    let valorTotal = Math.floor(preco*2) 
    
    outNome.textContent = `Promoção de ${medicamento}` 
    outValorTotal.textContent = `Leve 2 por apenas: R$ ${valorTotal.toFixed(2)}`
}

let btPromocao = document.getElementById("btPromocao")
btPromocao.addEventListener("click", mostrarPromocao)