let palavraSorteada
let dicaSorteada

let inLetra = document.getElementById("inLetra")
let btJogar = document.getElementById("btJogar")
let btVerDica = document.getElementById("btVerDica")

function montarJogo(){
    let outPalavra = document.getElementById("outPalavra")

    let palavras = localStorage.getItem("jogoPalavra").split(";")
    let dicas = localStorage.getItem("jogoDica").split(";")

    let tam = palavras.length
    let numAleatorio = Math.floor(Math.random() * tam)
    palavraSorteada = palavras[numAleatorio].toUpperCase()
    dicaSorteada = dicas[numAleatorio]
    let novaPalavra = ""

    for(let i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada.charAt(0) == palavraSorteada.charAt(i)){
            novaPalavra += palavraSorteada.charAt(0)
        }else{
            novaPalavra += "_"
        }
    }
    outPalavra.textContent = novaPalavra
}

if(localStorage.getItem("jogoPalavra")){
    montarJogo()
}else{
    alert("Cadastre palavras para jogar")
    inLetra.disabled = true
    btJogar.disabled = true
    btVerDica.disabled = true
}

function mostrarDica(){
    let outErros = document.getElementById("outErros")
    let outDica = document.getElementById("outDica")
    let outChances = document.getElementById("outChances")

    let erros = outErros.textContent

    if(erros.indexOf("*") >= 0){
        alert("Você já solicitou a dica")
        inLetra.focus()
        return
    }

    outDica.textContent = `* ${dicaSorteada}`
    outErros.textContent = `${erros}*`
    let chances = Number(outChances.textContent) - 1
    outChances.textContent = chances

    trocarStatus(chances)

    verificarFim()

    inLetra.focus()
}
btVerDica.addEventListener("click", mostrarDica)

function trocarStatus(num){
    if(num > 0){
        let imgStatus = document.getElementById("imgStatus")
        imgStatus.src = "img/status" + num + ".jpg"
    }
}

function jogarLetra(){
    let outPalavra = document.getElementById("outPalavra")
    let outErros = document.getElementById("outErros")
    let outChances = document.getElementById("outChances")

    let letra = inLetra.value.toUpperCase()

    if(letra == "" || letra.length != 1){
        alert("Informe uma letra")
        inLetra.focus()
        return
    }

    let erros = outErros.textContent
    let palavra = outPalavra.textContent

    if(erros.indexOf(letra) >= 0 || palavra.indexOf(letra) >= 0){
        alert("Você já apostou esta letra")
        inLetra.focus()
        return
    }

    if(palavraSorteada.indexOf(letra) >= 0){
        let novaPalavra = ""

        for(let i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada.charAt(i) == letra){
                novaPalavra += letra
            }else{
                novaPalavra += palavra.charAt(i)
            }
        }
        outPalavra.textContent = novaPalavra
    }else{
        erros += letra
        outErros.textContent = erros
        let chances = Number(outChances.textContent) - 1
        outChances.textContent = chances

        trocarStatus(chances)
    }

    verificarFim()

    inLetra.value = ""
    inLetra.focus()
}

btJogar.addEventListener("click", jogarLetra)
inLetra.addEventListener("keypress", function(tecla) {
    if(tecla.keyCode == 13){
        jogarLetra()
    }
})

function verificarFim(){
    let outChances = document.getElementById("outChances")
    let outMensagemFinal = document.getElementById("outMensagemFinal")

    let chances = Number(outChances.textContent)

    if(chances === 0){
        outMensagemFinal.className = "display-3 fonteVermelho"
        outMensagemFinal.textContent = `Ah... é ${palavraSorteada}. Tente outra vez!`
        concluirJogo()
    }else if(outPalavra.textContent == palavraSorteada){
        outMensagemFinal.className = "display-3 fonteAzul"
        outMensagemFinal.textContent = "Parabéns, você ganhou!"
        trocarStatus(4)
        concluirJogo()
    }
}

function concluirJogo(){
    let outDica = document.getElementById("outDica")
    outDica.textContent = "* Clique no botão 'Iniciar Jogo' para jogar novamente"
    inLetra.disabled = true
    btJogar.disabled = true
    btVerDica.disabled = true
}



