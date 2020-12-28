function adicionarClube(){
    let inClube = document.getElementById("inClube")
    let clube = inClube.value

    if(clube == ""){
        alert("Insira um clube!")
        inClube.focus()
        return
    }

    clubes.push(clube)

        let h5 = document.createElement("h5")
        let texto = document.createTextNode(clube)
        h5.appendChild(texto)
        divExibir.appendChild(h5)
        inClube.value = ""
        inClube.focus()

}

let clubes = []
let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarClube)

let divExibir = document.getElementById("divExibir")

function montarTabela(){

    let listaH5 = document.getElementsByTagName("h5")

    if(listaH5.length % 2 != 0){
        alert("Impossível montar Tabela (número ímpar de clubes!)")
        inClube.focus()
        return
    }

    let tabela = document.getElementById("tabela")
    let linha, col1, col2
    

    for(let i = 0; i < clubes.length; i++){
        if(i % 2 == 0){
            linha = tabela.insertRow(-1)
            col1 = linha.insertCell(0)
            col1.textContent = clubes[i]
        }else{
            let col2 = linha.insertCell(1)
            col2.textContent = clubes[i]
        }
    }

    btAdicionar.disabled = true
    btMontar.disabled = true
}

let btMontar = document.getElementById("btMontar")
btMontar.addEventListener("click",montarTabela)


let btNovos = document.getElementById("btNovos")
btNovos.addEventListener("click", function(){
    location.reload()
})
