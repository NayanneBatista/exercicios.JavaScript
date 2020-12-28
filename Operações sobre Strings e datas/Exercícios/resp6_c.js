function palindromo(){
    let inFrase = document.getElementById("inFrase")
    let outResposta = document.getElementById("outResposta")

    let frase = inFrase.value

    if(frase == ""){
        alert("Informe a palavra ou frase a ser verificada.")
        inFrase.focus()
        return
    }

    let fraseMaiusc = frase.toUpperCase()
    let fraseSemEspaco = ""

    if(frase.indexOf(" ") != -1){
        fraseSemEspaco = fraseMaiusc.replace(/ /g, "")
    }else{
        fraseSemEspaco = fraseMaiusc
    }

    let tamanho = fraseSemEspaco.length
    let metade = Math.floor(tamanho/2)
    let semelhancas = 0
    let tam = tamanho

    for(let i = 0; i < metade; i++){
        if(fraseSemEspaco.charAt(i) == fraseSemEspaco.charAt(tam - 1)){
            semelhancas++
        }
        tam--
    }
    
    if(semelhancas == metade){
        outResposta.textContent = ` ${fraseMaiusc} é um Palíndromo!`
    }else{
        outResposta.textContent = ` ${fraseMaiusc} não é um Palíndromo!`
    }
}

let btPalin = document.getElementById("btPalin")
btPalin.addEventListener("click", palindromo)