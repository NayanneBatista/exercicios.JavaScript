function calculaDataValor(){
    let inData = document.getElementById("inData")
    let inValor = document.getElementById("inValor")
    let outDataLimite = document.getElementById("outDataLimite")
    let outDesconto = document.getElementById("outDesconto")

    let data = inData.value
    let valor = Number(inValor.value)

    if(data == "" || valor == "" || isNaN(valor)){
        alert("Informe os dados corretamente.")
        inData.focus()
        return
    }

    let vencto = new Date()
    let partes = data.split("-")
    vencto.setDate(Number(partes[2]))
    let mes = vencto.setMonth(Number(partes[1]) + 3)

    if(mes < 8){
        vencto.setFullYear(Number(partes[0]))
    }else{
        vencto.setFullYear(Number(partes[0]) + 1)
    }
    
    let desconto = valor - (0.2 * valor)

    outDataLimite.textContent = `Data limite p pagto com desconto: ${vencto.getDate()}/ ${vencto.getMonth()}/ ${vencto.getFullYear()}`
    outDesconto.textContent = `Valor com Desconto R$: ${desconto.toFixed(2)}`
}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calculaDataValor)