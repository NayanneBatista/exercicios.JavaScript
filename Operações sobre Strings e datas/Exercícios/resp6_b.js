function gerarCitacao(){
    let inAutora = document.getElementById("inAutora")
    let outResposta = document.getElementById("outResposta")

    let autora = inAutora.value

    if(autora == "" || autora.indexOf(" ") == -1){
        alert("Informe o nome completo do(a) autor(a)")
        inAutora.focus()
        return
    }

    let nomeCompleto = autora.split(" ")
    let tam = nomeCompleto.length
    let citacao = ""

    citacao += nomeCompleto[tam -1].toUpperCase() + ", "

    for(let i = 0; i < tam - 1; i++){
        citacao += nomeCompleto[i].charAt(0).toUpperCase() + ". "
    }
        
    outResposta.textContent = citacao
}

let btGerar = document.getElementById("btGerar")
btGerar.addEventListener("click", gerarCitacao)