let numContas = 0
let valTotal = 0
let resposta = ""


function registrarConta() {

    let inDescricao = document.getElementById("inDescricao")
    let inValor =document.getElementById("inValor")
    let outListaContas = document.getElementById("outListaContas")
    let outTotal = document.getElementById("outTotal")

    let descricao = inDescricao.value
    let valor = Number(inValor.value)

    if (descricao == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente")
        inDescricao.focus()
        return
    }

    numContas++
    valTotal+=valor

    resposta+=`${descricao} - R$: ${valor.toFixed(2)} \n`

    outListaContas.textContent = resposta + "-------------------------------" 
    outTotal.textContent = `${numContas} Contas - Total R$: ${valTotal.toFixed(2)}`

    inDescricao.value = ""
    inValor.value = ""
    inDescricao.focus()
}

let btRegistrar = document.getElementById("btRegistrar")
btRegistrar.addEventListener("click", registrarConta)