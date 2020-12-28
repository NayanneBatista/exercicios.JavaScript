function mostrarDados(){
    let inModelo = document.getElementById("inModelo")
    let inAno = document.getElementById("inAno")
    let inPreco = document.getElementById("inPreco")
    let outClassif = document.getElementById("outClassif")
    let outprecoVenda = document.getElementById("outprecoVenda")

    let modelo = inModelo.value
    let ano = Number(inAno.value)
    let preco = Number(inPreco.value)

    if(modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)){
        alert("Informe corretamente os dados do veículo")
        inModelo.focus()
        return
    }

    let classificacao = classificarVeiculo(ano)
    let precoVenda = calcularVenda(preco, classificacao)

    outClassif.textContent = `${modelo} - ${classificacao}`
    outprecoVenda.textContent = `Preço de Venda R$: ${precoVenda.toFixed(2)}`
}

    let btCalcular = document.getElementById("btCalcular")
    btCalcular.addEventListener("click", mostrarDados)

function classificarVeiculo(ano){
    let anoAtual = new Date().getFullYear()
    let classif

    if(ano == anoAtual){
        classif = "Novo"
    }else if(ano == anoAtual - 1 || ano == anoAtual -2){
        classif = "Seminovo"
    }else{
        classif = "Usado"
    }
    return classif
}

function calcularVenda(valor, status){
    let prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10
    return prVenda
}