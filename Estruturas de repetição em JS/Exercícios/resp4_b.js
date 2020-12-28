function preverChinchilas() {
    let inChinchilas = document.getElementById("inChinchilas")
    let inAnos = document.getElementById("inAnos")
    let outResposta = document.getElementById("outResposta")

    let chinchilas = Number(inChinchilas.value)
    let anos = Number(inAnos.value)

    if (chinchilas < 2 || anos == 0 || isNaN(chinchilas) || isNaN(anos)) {
        alert("Preencha corretamente. Número mínimo: 2")
        inChinchilas.focus()
        return
    }

    let total = chinchilas
    let resultado = ""

    for(i = 1; i<=anos; i++){
        resultado+= i + "o ano: " + total + " chinchilas \n" 
        total*=3
    }

    outResposta.textContent = resultado
}


let btPrevisao = document.getElementById("btPrevisao")
btPrevisao.addEventListener("click", preverChinchilas)