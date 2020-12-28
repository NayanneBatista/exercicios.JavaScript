function repeteFruta() {
    let inFruta = document.getElementById("inFruta")
    let inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    let fruta = inFruta.value
    let num = Number(inNumero.value)
    
    if (fruta == ""  || num == 0  || isNaN(num)) {
        alert("Preencha os dados corretamente!")
        inFruta.focus()
        return
    }

    let repeteFruta = ""

    for (i = 1; i <= num; i++) {
        repeteFruta += fruta + "*"
    }

    outResposta.textContent = repeteFruta
}

let btRepetir = document.getElementById("btRepetir")
btRepetir.addEventListener("click", repeteFruta)

