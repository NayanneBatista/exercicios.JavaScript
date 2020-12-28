let itens = []

function trocarItem(){
    let inPizza = document.getElementById("inPizza")
    let inBebida = document.getElementById("inBebida")

    if(rbPizza.checked){
        inBebida.className = "oculta"
        inPizza.className = "exibe"
    }else{
        inPizza.className = "oculta"
        inBebida.className = "exibe"
    }
}

let rbPizza = document.getElementById("rbPizza")
rbPizza.addEventListener("change", trocarItem)

let rbBebida = document.getElementById("rbBebida")
rbBebida.addEventListener("change", trocarItem)

function mostrarNumSabores(){
    if(rbPizza.checked){
        let pizza = inPizza.value
        let num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4
        inDetalhes.placeholder = `Até ${num} sabores.`
    }
}

let inDetalhes = document.getElementById("inDetalhes")
inDetalhes.addEventListener("focus", mostrarNumSabores)

inDetalhes.addEventListener("blur", function(){
    inDetalhes.placeholder = ""
})

inDetalhes.addEventListener("keypress", function (tecla) {
    if(tecla.keyCode == 13){
        adicionarItem()
    }
})

function adicionarItem(){
    let inPizza = document.getElementById("inPizza")
    let inBebida = document.getElementById("inBebida")
    let outPedido = document.getElementById("outPedido")

    if(rbPizza.checked){
        let num = inPizza.selectedIndex
        produto = inPizza.options[num].text
    }else{
        let num = inBebida.selectedIndex
        produto = inBebida.options[num].text
    }

    let detalhes = inDetalhes.value
    itens.push(`${produto} (${detalhes})`)
    outPedido.textContent = itens.join("\n")
    limparCampos()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarItem)

function limparCampos(){
    rbPizza.checked = true
    inBebida.className = "oculta"
    inPizza.className = "exibe"
    inPizza.selectedIndex = 0
    inDetalhes.value = ""
    rbPizza.focus()
}