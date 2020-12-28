const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]

let apostas = []


function adicionarAposta(){
    let cavalo = Number(inCavalo.value)
    let inValor = document.getElementById("inValor")
    let outApostas = document.getElementById("outApostas")
    let valor = Number(inValor.value)

    if(isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)){
        alert("Aposta inválida!")
        inCavalo.focus()
        return
    }

    apostas.push({ cavalo: cavalo, valor: valor})
    console.log(apostas)
    let lista = "Apostas realizadas\n----------------------------\n"

    for(let i = 0; i < apostas.length; i++){
        lista += `Número ${apostas[i].cavalo} ${obterCavalo(apostas[i].cavalo)}`
        lista += ` - R$: ${apostas[i].valor.toFixed(2)} \n`
    }

    outApostas.innerHTML = lista

    inCavalo.value = ""
    inValor.value = ""
    inCavalo.focus()
}

let btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", adicionarAposta)

function validarCavalo(num){
    let tam = CAVALOS.length

    if( num >= 1 && num <= tam){
        return true
    }else{
        return false
    }
}

function mostrarCavalo(){
    let outCavalo = document.getElementById("outCavalo")

    if(inCavalo.value == ""){
        outCavalo.textContent = ""
        return
    }

    let cavalo = Number(inCavalo.value)

    if(isNaN(cavalo) || !validarCavalo(cavalo)){
        outCavalo.textContent = "Número do cavalo inválido"
        return
    }

    let nomeCavalo = obterCavalo(cavalo)
    let numApostas = contarApostas(cavalo)
    let total = totalizarApostas(cavalo)

    outCavalo.textContent = `${nomeCavalo} (Apostas: ${numApostas} - R$: ${total.toFixed(2)})`
}

let inCavalo = document.getElementById("inCavalo")
inCavalo.addEventListener("blur", mostrarCavalo)

function obterCavalo(num){
    let posicao = num -1
    return CAVALOS[posicao]
}

function contarApostas(numCavalo){
    let contador = 0
    for(let i = 0; i < apostas.length; i++){
        if(apostas[i].cavalo == numCavalo){
            contador++
        }
    }
    return contador
}

function totalizarApostas(numCavalo){
    let total = 0
    for(let i = 0; i < apostas.length; i++){
        if(apostas[i].cavalo == numCavalo){
            total = total + apostas[i].valor
        }
    }
    return total
}

inCavalo.addEventListener("focus", function(){
    inCavalo.value = ""
    document.getElementById("outCavalo").textContent = ""
})

function ganhadorPareo(){
    let ganhador = Number(prompt("Número do cavalo ganhador: "))
    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert("Cavalo inválido!")
        return
    }

    let outApostas = document.getElementById("outApostas")

    let resumo = "Resultado final do Páreo\n-------------------------\n"
    resumo += `No total de apostas: ${apostas.length}\n` 
    resumo += `Total geral R$: ${totalizarGeral().toFixed(2)}\n\n`
    resumo += `Ganhador n. ${ganhador} - ${obterCavalo(ganhador)}\n-------------------------\n`
    resumo += `No de apostas: ${contarApostas(ganhador)}\n`
    resumo += `Total apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`

    outApostas.textContent = resumo

    btApostar.disabled = true
    btGanhador.disabled = true
    btNovo.focus()
}

let btGanhador = document.getElementById("btGanhador")
btGanhador.addEventListener("click", ganhadorPareo)

function totalizarGeral(){
    let total = 0
    for(let i = 0; i < apostas.length; i++){
        total = total + apostas[i].valor
    }
    return total
}

let btNovo = document.getElementById("btNovo")
btNovo.addEventListener("click", function(){
    location.reload()
})