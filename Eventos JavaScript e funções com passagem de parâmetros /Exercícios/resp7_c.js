function validarValorVacina(valor){
    return !(valor == "" || valor == 0 || isNaN(valor))
}

function calcularTaxa(){
    if(semConvenio.checked){
        return 0.1
    }else if(inConvenio.selectedIndex == 0){
        return 0.2
    }else{
        return 0.5
    }
}

function calcularDesconto(valor, taxa){
    return  valor * taxa
}

function mostrarConvenio(){
    if(semConvenio.checked){
        pConv.className = "oculta"
        inConvenio.className = "oculta"
    }else{
        pConv.className = "exibe"
        inConvenio.className = "exibe"
    }
}

function calcularPagamento(){
    let inValorVacina = document.getElementById("inVacina")
    let valorVacina = Number(inValorVacina.value)
    let outResposta = document.getElementById("outResposta")
    
    if(validarValorVacina(valorVacina)){
        let taxa = calcularTaxa()
        let desconto = calcularDesconto(valorVacina, taxa)
        let valorAPagar = valorVacina - desconto

        outResposta.innerText = `Desconto R$: ${desconto.toFixed(2)}\n 
                                A pagar R$: ${valorAPagar.toFixed(2)}` 
    }
    else{
        alert("Informe o valor da vacina")
        inVacina.focus()
    }

}

let semConvenio = document.getElementById("semConvenio")
let pConv = document.getElementById("pConv")
let inConvenio = document.getElementById("inConvenio")

let btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPagamento)
comConvenio.addEventListener("change", mostrarConvenio)
semConvenio.addEventListener("change", mostrarConvenio)
