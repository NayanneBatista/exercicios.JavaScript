function adicionarProduto(){
    let inProduto = document.getElementById("inProduto")
    let produto = inProduto.value

    if(produto == ""){
        alert("Informe um produto para ser adicionado à lista.")
        inProduto.focus()
        return
    }

    produtos = []
    produtos.push(produto)

    for(let i = 0; i < produtos.length; i++){
        lista += produtos[i] + "\n"
    }

    inProduto.value = ""
    inProduto.focus()
    outLista.innerHTML = lista
    
}

let lista = ""
let outLista = document.getElementById("outLista")
let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarProduto)

function limparLista(){
    if(confirm("Confirma exclusão de todos os itens da lista")){
        produtos = ""
        outLista.innerHTML = ""
        location.reload()
        inProduto.focus()
    }  
}

btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparLista)