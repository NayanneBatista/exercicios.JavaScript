function montarTabela(){
    if(localStorage.getItem("jogoPalavra")){
        let palavras = localStorage.getItem("jogoPalavra").split(";")
        let dicas = localStorage.getItem("jogoDica").split(";")

        let tbPalavras = document.getElementById("tbPalavras")

        let linha, col1, col2, col3

        for(let i = 0; i < palavras.length; i++){
            linha = tbPalavras.insertRow(-1)

            col1 = linha.insertCell(0)
            col2 = linha.insertCell(1)
            col3 = linha.insertCell(2)

            col1.textContent = palavras[i]
            col2.textContent = dicas[i]
            col3.innerHTML = "<input type='checkbox'>"
        }
    }
}

let ckMostrar =document.getElementById("ckMostrar")
ckMostrar.addEventListener("change", function(){
    if(ckMostrar.checked){
        montarTabela()
        btExcluir.className = "btn btn-danger exibe"
    }else{
        location.reload()
    }
})

let ckTodos = document.getElementById("ckTodos")

ckTodos.addEventListener("change", function(){
    let tbPalavras= document.getElementById("tbPalavras")
    let ckExcluir = tbPalavras.getElementsByTagName("input")
    let status = ckTodos.checked

    for(let i = 1; i < ckExcluir.length; i++){
        ckExcluir[i].checked = status
    }
})

function removerPalavras(){
    let tbPalavras= document.getElementById("tbPalavras")
    let ckExcluir = tbPalavras.getElementsByTagName("input")

    let temSelecionado = false

    for(var i = 1; i < ckExcluir.length; i++){
        if(ckExcluir[i].checked){
            temSelecionado = true
            break
        }
    }

    if(!temSelecionado){
        alert("Não há palavras selecionadas para exclusão")
        return
    }

    if(confirm("Confirma exclusão das palavras selecionadas")){
        localStorage.removeItem("jogoPalavra")
        localStorage.removeItem("jogoDica")

        palavras = ""
        dicas = ""

        for(i = 1; i < ckExcluir.length; i++){
            if(!ckExcluir[i].checked){
                palavras += tbPalavras.rows[i].cells[0].textContent + ";"
                dicas += tbPalavras.rows[i].cells[1].textContent + ";"
            }
        }

        if(palavras != ""){
            localStorage.setItem("jogoPalavra", palavras.substr(0, palavras.length - 1))
            localStorage.setItem("jogoDica", dicas.substr(0, dicas.length - 1))
        }

        for(i = ckExcluir.length - 1; i > 0; i--){
            if(ckExcluir.checked){
                tbPalavras.deleteRow(i)
            }
        }
        ckExcluir[0].checked = false
    }
}

let btExcluir = document.getElementById("btExcluir")
btExcluir.addEventListener("click", removerPalavras)