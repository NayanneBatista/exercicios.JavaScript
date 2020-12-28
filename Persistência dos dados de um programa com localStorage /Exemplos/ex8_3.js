function incluirAposta(){
    var inNome = document.getElementById("inNome")
    var inPeso = document.getElementById("inPeso")
    var nome = inNome.value
    var peso = Number(inPeso.value)

    if(nome = "" || peso == 0 || isNaN(peso)){
        alert("Informe o nome e peso da aposta")
        inNome.focus()
        return
    }

    if(verApostaExiste(peso)){
        alert("Alguém já apostou esse peso, tente outro...")
        inPeso.focus()
        return
    }

    if(localStorage.getItem("melanciaNome")){
        var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + nome

        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    }else{
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()

    inNome.value = ""
    inPeso.value = ""
    inNome.focus()
}

var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", incluirAposta)

function verApostaExiste(){
    var existe = false

    if(localStorage.getItem("melanciaPeso")){
        var pesos = localStorage.getItem("melanciaPeso").split(";")
        if(pesos.indexOf(peso.toString()) >= 0){
            existe = true
        }
    }

    return existe
}

function mostrarApostas(){
    var outApostas = document.getElementById("outApostas")
    if(!localStorage.getItem("melanciaNome")){
        outApostas.textContent = ""
        return
    }

    var nomes = localStorage.getItem("melanciaNome").split(";")
    var pesos = localStorage.getItem("melanciaPeso").split(";")

    var linhas = ""

    for(var i = 0; i < nomes.length; i++){
        linhas += `${nomes[i]} - ${pesos[i]} gr \n`
    }

    outApostas.innerText = linhas
}

mostrarApostas()

function verificarVencedor(){
    if(!localStorage.getItem("melanciaNome")){
        alert("Não há apostas cadastradas")
        return
    }

    var pesoCorreto = Number(prompt("Qual o peso correto da Melancia?"))

    if(pesoCorreto == 0 || isNaN(pesoCorreto)){
        return
    }

    var nomes = localStorage.getItem("melanciaNome").split(";")
    var pesos = localStorage.getItem("melanciaPeso").split(";")

    var vencedorNome = nomes[0]
    var vencedorPeso = Number(pesos[0])

    for(var i = 1; i < nomes.length; i++){
        difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
        if(difAposta < difVencedor){
            vencedorNome = nomes[i]
            vencedorPeso = pesos[i]
        }
    }

    var mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`
    mensagem += "\n------------------------------------------"
    mensagem += `\nVencedor: ${vencedorNome}\nAposta: ${vencedorPeso}gr`
    alert(mensagem)
}

var btVencedor = document.getElementById("btVencedor")
btVencedor.addEventListener("click", verificarVencedor)

function limparApostas(){
    if(confirm("Confirma exclusão de todas as apostas?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
}

var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparApostas)