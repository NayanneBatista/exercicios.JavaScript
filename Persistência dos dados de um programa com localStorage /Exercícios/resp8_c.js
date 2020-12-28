let inServico = document.getElementById("inServico")
let outPendente = document.getElementById("outPendente")
let outExecucao = document.getElementById("outExecucao")
let servicos = []
let pendentes = 0

function validarServico(servico){
    if(servico == ""){
        alert("Digite um servico!")
        inServico.focus()
        return false
    }
    else {
        return true
    }
}

function adicionarServico(){
    
    let servico = inServico.value

    if(validarServico(servico)){
        servicos.push(servico)
    
        pendentes = servicos.length
    
        outPendente.innerHTML = `Serviços pendentes: ${pendentes}`
    }

    inServico.value = ""
    inServico.focus()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarServico)

function executarServico(){
    
    let servico = inServico.value

    for(let i = servicos.length; i >= 0 ; i--){
        outExecucao.textContent = `Serviço em execução: ${servicos[i]}`
    }

    servicos.shift(servico)
    let pendentes = servicos.length

    if(pendentes > 0){
        outPendente.innerHTML = `Serviços pendentes: ${pendentes}`
    }else{
        outPendente.innerHTML = `Serviços pendentes:`
    }
}

let btExecutar = document.getElementById("btExecutar")
btExecutar.addEventListener("click", executarServico)
