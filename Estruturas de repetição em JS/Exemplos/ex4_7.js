function preencherEstrelas() {
    let inNumero = document.getElementById("inNumero")
    let outEspacos = document.getElementById("outEspacos")

    let num = Number(inNumero.value)

    if (num == 0 || isNaN(num)) {
        alert("Insira um valor válido")
        inNumero.focus()
        return
    }

    let estrelas = ""

    for (i = 1; i <= num; i++) {
        if(i % 2 == 1) {
            estrelas+="*"
        } else {
            estrelas+="-"
        }
    }

    outEspacos.textContent = estrelas
}

let btPreencher = document.getElementById("btPreencher")
btPreencher.addEventListener("click", preencherEstrelas)