function adicionarTarefa(){
    let inTarefa = document.getElementById("inTarefa")
    let tarefa = inTarefa.value

    if(tarefa == ""){
        alert("Informe a tarefa")
        inTarefa.focus()
        return
    }

    let divQuadro = document.getElementById("divQuadro")
    let h5 = document.createElement("h5")
    let texto = document.createTextNode(tarefa)
    h5.appendChild(texto)
    divQuadro.appendChild(h5)

    inTarefa.value = ""
    inTarefa.focus()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarTarefa)

function selecionarTarefa(){
    let h5 = document.getElementsByTagName("h5")
    let numH5 = h5.length

    if(numH5 == 0){
        alert("Não há tarefas para selecionar")
        return
    }

    let aux = -1

    for(let i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            h5[i].className = "tarefaNormal"
            aux = i
            break
        }
    }

    if(aux == numH5 - 1){
        aux = -1
    }

    h5[aux + 1].className = "tarefaSelecionada"
}

let btSelecionar = document.getElementById("btSelecionar")
btSelecionar.addEventListener("click", selecionarTarefa)

function retirarSelecionada(){
    let divQuadro = document.getElementById("divQuadro")
    let h5 = document.getElementsByTagName("h5")
    let numH5 = h5.length

    let aux = -1

    for(let i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            aux = i
            break
        }
    }

    if(aux == -1){
        alert("Selecione uma tarefa para removê-la")
        return
    }

    if(confirm(`Confirma exclusão de ${h5[aux].textContent}`)){
        divQuadro.removeChild(h5[aux])
    }
}

let btRetirar = document.getElementById("btRetirar")
btRetirar.addEventListener("click", retirarSelecionada)

function gravarTarefas(){
    let h5 = document.getElementsByTagName("h5")
    let numH5 = h5.length

    if(numH5 == 0){
        alert("Não há tarefas para serem salvas")
        return
    }

    let tarefas = ""

    for(let i = 0; i < numH5; i++){
        tarefas += h5[i].textContent + ";"
    }

    localStorage.setItem("tarefasDia", tarefas.substr(0, tarefas.length - 1))

    if(localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas salvas!")
    }
}

let btGravar = document.getElementById("btGravar")
btGravar.addEventListener("click", gravarTarefas)

function recuperarTarefasSalvas(){
    if(localStorage.getItem("tarefasDia")){
        let tarefas = localStorage.getItem("tarefasDia").split(";")

        let divQuadro = document.getElementById("divQuadro")

        for(let i = 0; i < tarefas.length; i++){
            let h5 = document.createElement("h5")
            let texto = document.createTextNode(tarefas[i])
            h5.appendChild(texto)
            divQuadro.appendChild(h5)
        }
    }
}

recuperarTarefasSalvas()