const TAXA_MULTA = 2/100
const TAXA_JUROS = 0.33/100

function calcularMultaJuros(){
    let inDataVenc = document.getElementById("inDataVenc")
    let inValor = document.getElementById("inValor")
    let outMulta = document.getElementById("outMulta")
    let outJuros = document.getElementById("outJuros")
    let outTotal = document.getElementById("outTotal")

    let dataVenc = inDataVenc.value
    let valor = Number(inValor.value)

    if(dataVenc == "" || valor == "" || isNaN(valor)){
        alert("Insira os dados corretamente.")
        inDataVenc.focus()
        return
    }
    
    let hoje = new Date()
    let vencto = new Date()

    let partes = dataVenc.split("-")
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) - 1)
    vencto.setFullYear(Number(partes[0]))

    let atraso = hoje - vencto

    let multa = 0
    let juros = 0

    if(atraso > 0){
        let dias = Math.round(atraso/86400000)
        multa = valor * TAXA_MULTA
        juros = (valor * TAXA_JUROS) * dias
    }

    let total = valor + multa + juros

    outMulta.value = multa.toFixed(2)
    outJuros.value = juros.toFixed(2)
    outTotal.value = total.toFixed(2)
}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularMultaJuros)

function limparCampos(){
    location.reload()
}

let btNovaConta = document.getElementById("btNovaConta")
btNovaConta.addEventListener("click", limparCampos)