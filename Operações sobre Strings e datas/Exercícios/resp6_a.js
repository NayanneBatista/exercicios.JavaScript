let inMensagem = document.getElementById("inMensagem")
let outResposta = document.getElementById("outResposta")
let mensagem = ""


function criptografar(){

    let criptoPar = ""
    let criptoImpar = ""
    let criptoCompleta = ""

    mensagem = inMensagem.value

    for(i = 0; i < mensagem.length; i++){
        if(i % 2 != 0){
            criptoPar += mensagem.charAt(i)
        }else{
            criptoImpar += mensagem.charAt(i)
        }
    }

    criptoCompleta = criptoPar + criptoImpar
    outResposta.textContent = criptoCompleta
}

let btCriptografar =document.getElementById("btCriptografar")
btCriptografar.addEventListener("click", criptografar)

function decriptografar(){

    mensagem = inMensagem.value

    let msgTotal = ""
    let metade = 0

    if(mensagem.length % 2 == 0){
        metade = mensagem.length/2
    }else{
        metade = Math.floor(mensagem.length/2)   
    }

    let j = metade

    for(let i = 0; i < metade; i++){
        msgTotal += mensagem.charAt(j)
        msgTotal += mensagem.charAt(i)
        j++
    }
    if(mensagem.length % 2 != 0){
        msgTotal += mensagem.charAt(mensagem.length- 1)
    }
    
    outResposta.textContent = msgTotal
}

let btDecriptografar = document.getElementById("btDecriptografar")
btDecriptografar.addEventListener("click", decriptografar)