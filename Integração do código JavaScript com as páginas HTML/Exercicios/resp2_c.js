function verPromocao () {
    let inProduto = document.getElementById("inProduto")
    let inPreco = document.getElementById("inPreco")
    let outPromocao = document.getElementById("outPromocao")
    let outValor = document.getElementById("outValor")

    let produto = inProduto.value
    let preco = Number(inPreco.value)
    let valorTotal = preco * 3 - 0.5 * preco

    outPromocao.textContent = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`
    outValor.textContent = `O 3o produto custa apenas R$ ${(0.5*preco).toFixed(2)}`
}

let btPromocao = document.getElementById("btPromocao")
btPromocao.addEventListener("click", verPromocao)