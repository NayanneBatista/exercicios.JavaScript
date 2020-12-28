function sacarNotas() {
    let inValor = document.getElementById("inValor")
    let outNotasCem = document.getElementById("outNotasCem")
    let outNotasCinquenta = document.getElementById("outNotasCinquenta")
    let outNotasDez = document.getElementById("outNotasDez")

    let valor = Number(inValor.value)

    if (valor == "" || isNaN(valor)) {
        alert("Informe o valor do saque corretamente")
        inValor.focus()
        return
    }

    if (valor % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        inValor.focus()
        return
    }

    let notasCem = Math.floor(valor/100)   
    let resto = valor % 100
    let notasCinquenta = Math.floor(resto/50)
    resto = resto % 50
    let notasDez = Math.floor(resto/10)

    if (notasCem > 0) {
        outNotasCem.textContent = `Notas de R$ 100: ${notasCem}`
    }

    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`
    }

    if (notasDez > 0) {
        outNotasDez.textContent = `Notas de R$ 10: ${notasDez}`
    }
}

let btNotas = document.getElementById("btNotas")
btNotas.addEventListener("click", sacarNotas)


