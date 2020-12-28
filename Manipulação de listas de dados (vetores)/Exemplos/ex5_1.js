/*let cidades = ["Pelotas", "São Lourenço", "Porto Alegre"]
        alert(cidades.join())
        alert(cidades)
        alert(cidades.toString())
        alert(cidades.join(" - "))
        for (let i = 0; i < cidades.length; i++) {
            alert(cidades[i])
        }*/

let pacientes = []

function adicionarPaciente() {
    let inPaciente = document.getElementById("inPaciente")
    let outLista = document.getElementById("outLista")

    let nome = inPaciente.value

    if(nome == ""){
        alert("Informe o nome do paciente")
        inPaciente.focus()
        return
    }

    pacientes.push(nome)

    let lista = ""

    for(i = 0; i < pacientes.length; i++){
        lista+= `${i+1}. ${pacientes[i]} \n`
    }

    outLista.textContent = lista

    inPaciente.value = ""
    inPaciente.focus()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarPaciente)

function pacienteUrgencia() {
    let inPaciente = document.getElementById("inPaciente")
    let outLista = document.getElementById("outLista")

    let nome = inPaciente.value

    if(nome == ""){
        alert("Informe o nome do paciente")
        inPaciente.focus()
        return
    }

    pacientes.unshift(nome)

    let lista = ""

    for(i = 0; i < pacientes.length; i++){
        lista+= `${i+1}. ${pacientes[i]} \n`
    }

    outLista.textContent = lista

    inPaciente.value = ""
    inPaciente.focus()
}

let btUrgencia = document.getElementById("btUrgencia")
btUrgencia.addEventListener("click", pacienteUrgencia)

function atenderPaciente() {
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        inPaciente.focus()
        return 
    }

    let outAtendimento = document.getElementById("outAtendimento")
    let outLista = document.getElementById("outLista")

    let atender = pacientes.shift()

    outAtendimento.textContent = `  ${atender} `

    let lista = ""

    for(i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]} \n` 
    }

    outLista.textContent = lista
}

let btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atenderPaciente)