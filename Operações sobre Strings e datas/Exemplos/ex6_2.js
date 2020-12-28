function montarDica(){
    let inFruta = document.getElementById("inFruta")
    let outDica = document.getElementById("outDica")

    let fruta = inFruta.value.toUpperCase()

    if(fruta == ""){
        alert("Informe a fruta")
        inFruta.focus()
        return
    }

    let resposta = fruta.charAt(0)
    let estrelas = "*"
    let tam = fruta.length

    for(let i = 1; i < tam; i++){
        if(fruta.charAt(i) == fruta.charAt(0)){
            resposta += fruta.charAt(0)
        }else{
            resposta += "_"
        }
        estrelas += "*"
    }

    outDica.textContent = resposta
    inFruta.value = estrelas
}

let btMontar = document.getElementById("btMontar")
btMontar.addEventListener("click", montarDica)