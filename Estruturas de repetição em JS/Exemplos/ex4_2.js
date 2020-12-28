function decrescer() {
    let inNumero = document.getElementById("inNumero")
    let outResposta =document.getElementById("outResposta")

    let numero = Number(inNumero.value)

    if (numero == 0 || isNaN(numero)) {
        alert("Por favor, insira um valor válido!")
        inNumero.focus()
        return
    }

    let resposta = `Entre ${numero} e 1: `
    let i
    
    for(i = numero; i > 1; i--) {
        resposta = resposta + i + ","
            if (i % 5 == 0){
                resposta = resposta + "\n"
            }    
    }

    resposta = resposta + i + "."
    outResposta.textContent = resposta
}

let btDecrescer = document.getElementById("btDecrescer")
btDecrescer.addEventListener("click", decrescer)



