let clubes = []

function adicionarClubes() {
    let inClube = document.getElementById("inClube")
    let clube = inClube.value

    if(clube == ""){
        alert("Informe um clube")
        inClube.focus()
        return
    }

    clubes.push({nome: clube})

    inClube.value = ""

    listarClubes()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarClubes)

function listarClubes() {

    let clubesString = ""

    if(clubes.length == 0){
        alert("Não há clubes na lista")
        return
    }

    for(let i = 0; i < clubes.length; i++){
        clubesString += `${i+1}. ${clubes[i].nome} \n`
    }

    document.getElementById("outLista").textContent = clubesString
}

let btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarClubes)

function montarTabela(){
    if(clubes.length % 2 != 0){
        alert("Número ímpar de clubes. Não foi possível montar a Tabela.")
        inClube.focus()
        return
    }

    let tabela = ""

    for(let i = 0; i < clubes.length/2; i++){
        tabela += `${clubes[i].nome} x ${clubes[clubes.length - 1 - i].nome} \n`
    }

    document.getElementById("outLista").textContent = tabela
}

let btMontar = document.getElementById("btMontar")
btMontar.addEventListener("click", montarTabela)