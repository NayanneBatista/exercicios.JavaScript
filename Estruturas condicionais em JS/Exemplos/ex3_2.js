function calcularPeso () {
    let inNome = document.getElementById("inNome")
    let rbMasculino = document.getElementById("rbMasculino")
    let rbFeminino = document.getElementById('rbFeminino')
    let inAltura = document.getElementById("inAltura")
    let outResposta = document.getElementById("outResposta")
    let peso

    let nome = inNome.value
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)

    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...")
        inNome.focus()
        return
    }

    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...")
        inAltura.focus()
        return
    }

    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    outResposta.textContent = `${nome} : Seu peso ideal é ${peso.toFixed(3)} kg`
}

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPeso)

function limparCampos () {
    location.reload()
    document.getElementById("inNome").focus()
}

let btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)
