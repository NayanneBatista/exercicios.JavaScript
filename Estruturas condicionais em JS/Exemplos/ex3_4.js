function fusoHorario() {
    let inHora = document.getElementById("inHora")
    let outFranca = document.getElementById("outFranca")

    let hora = Number(inHora.value)

    if (hora == "" || isNaN(hora)) {
        alert("Informe a hora no Brasil corretamente")
        inHora.focus()
        return
    }

    let horaFranca = hora + 5

    if (horaFranca > 24) {
        horaFranca-=24
    }

    outFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
}

btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", fusoHorario)