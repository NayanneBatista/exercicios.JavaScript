let candidatos = []

function adicionarCandidato(){
    let inCandidato = document.getElementById("inCandidato")
    let inAcertos = document.getElementById("inAcertos")

    let candidato = inCandidato.value
    let acertos = Number(inAcertos.value)

    if(candidato == "" || acertos == "" || isNaN(acertos)){
        alert("Insira os dados corretamente.")
        inCandidato.focus()
        return
    }

    candidatos.push({nome: candidato, acertos: acertos})

    inCandidato.value = ""
    inAcertos.value = ""
    inCandidato.focus()

    let lista = ""

    for(i = 0; i < candidatos.length; i++){
        lista += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos \n`
    }

    document.getElementById("outLista").textContent = lista

    listarCandidato()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarCandidato)

function listarCandidato() {
    let listaGeral = ""

    for(i = 0;i < candidatos.length; i++){
        listaGeral += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos \n` 
    }

    document.getElementById("outLista").textContent = listaGeral
}

let btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarCandidato)

function mostrarAprovados(){
    let notaCorte = Number(prompt("Insira o número de acertos para aprovação: "))

    let listaAprovados = ""
    let aprovados = 0
    
    candidatos.sort(function(a, b){return b.acertos - a.acertos})

    for(let i = 0; i < candidatos.length; i++){
        if(candidatos[i].acertos >= notaCorte){
            listaAprovados += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos \n`
            aprovados += 1
            document.getElementById("outLista").textContent = listaAprovados
        }
    }

    if(aprovados == 0){
        document.getElementById("outLista").textContent = "Nenhum candidato foi aprovado."
    }
}

let btAprovados = document.getElementById("btAprovados")
btAprovados.addEventListener("click", mostrarAprovados)