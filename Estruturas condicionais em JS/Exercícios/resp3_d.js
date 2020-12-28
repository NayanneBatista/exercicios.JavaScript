function verificarLados() {
    let inLadoA = document.getElementById("inLadoA")
    let inLadoB = document.getElementById("inLadoB")
    let inLadoC = document.getElementById("inLadoC")
    let outTriangulo = document.getElementById("outTriangulo")
    let outTipo = document.getElementById("outTipo")

    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)

    if (ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)){
        alert("Insira valores válidos")
        inLadoA.focus()
        return
    }

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        outTriangulo.textContent = "Os lados podem formar um triângulo"
        if (ladoA == ladoB && ladoB == ladoC) {
            outTipo.textContent = "Tipo: Equilátero"
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            outTipo.textContent = "Tipo: Isósceles"
        } else {
            outTipo.textContent = "Tipo: Escaleno"
        }    
    } else {
        outTriangulo.textContent = "Os lados não podem formar um triângulo"
    }
}

let btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificarLados)