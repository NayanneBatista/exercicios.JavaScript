function verificarPrimo() {
    let inNumero = document.getElementById("inNumero")
    let outResposta = document.getElementById("outResposta")

    let num = Number(inNumero.value)

    if (num == 0 || isNaN(num)) {
        alert("Número inválido")
        inNumero.focus()
        return
    }

    let numDivisores = 0 

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            numDivisores++
        }
    }

    if (numDivisores == 2) {
        outResposta.textContent = num + " é Primo"
    } else {
        outResposta.textContent = num + " não é Primo"
    }

    let temDivisor = 0

    for (let i = 2; i <= num/2; i++) {
        if (num % i == 0) {
            temDivisor = 1
            break
        }
    }

    if (num > 1 && !temDivisor) {
        outResposta.textContent = num + " é Primo"
    } else {
        outResposta.textContent = num + " não é Primo"
    }
}

let btPrimo = document.getElementById("btPrimo")
btPrimo.addEventListener("click", verificarPrimo)




