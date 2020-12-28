function adicionarFilme(){
    let inTitulo = document.getElementById("inTitulo")
    let inGenero = document.getElementById("inGenero")

    let titulo = inTitulo.value
    let genero = inGenero.value

    if(titulo == "" || genero == ""){
        alert("Informe corretamente os dados")
        inTitulo.focus()
        return
    }

    let btFilmes = document.getElementById("tbFilmes")

    inserirLinha(tbFilmes, titulo, genero)

    gravarFilme(titulo, genero)

    inTitulo.value = ""
    inGenero.value = ""
    inTitulo.focus()
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarFilme)

function inserirLinha(tabela, titulo, genero){
    let linha = tabela.insertRow(-1)
    let col1 = linha.insertCell(0)
    let col2 = linha.insertCell(1)
    let col3 = linha.insertCell(2)

    col1.textContent = titulo
    col2.textContent = genero
    col3.innerHTML = "<input type='checkbox'>"
}

function gravarFilme(titulo, genero){
    if(localStorage.getItem("filmesTitulo")){
        let filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        let filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero

        localStorage.setItem("filmesTitulo", filmesTitulo)
        localStorage.setItem("filmesGenero", filmesGenero)
    }else{
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesgenero", genero)
    }
}

function recuperarFilmes(){
    if(localStorage.getItem("filmesTitulo")){
        let titulos = localStorage.getItem("filmesTitulo").split(";")
        let generos = localStorage.getItem("filmesGenero").split(";")

        let tbFilmes = document.getElementById("tbFilmes")
        
        for(let i = 0; i < titulos.length; i++){
            inserirLinha(tbFilmes, titulos[i], generos[i])
        }
    } 
}

recuperarFilmes()

let ckTodos = document.getElementById("ckTodos")
ckTodos.addEventListener("change", function (){
    let tbFilmes = document.getElementById("tbFilmes")
    let ckExcluir = tbFilmes.getElementsByTagName("input")

    let status = ckTodos.checked

    for(let i= 1; i < ckExcluir.length; i++){
        ckExcluir[i].checked = status
    }
})

function removerFilmes(){
    let tbFilmes = document.getElementById("tbFilmes")
    let ckExcluir = tbFilmes.getElementsByTagName("input")

    let temSelecionado = false

    for(let i = 1; i < ckExcluir.length; i++){
        if(ckExcluir[i].checked){
            temSelecionado = true
            break
        }
    }

    if(!temSelecionado){
        alert("Não há filmes selecionados para exclusão")
        return
    }

    if(confirm("Confirmar exclusão dos filmes selecionados")){
        localStorage.removeItem("filmesTitulo")
        localStorage.removeItem("filmesGenero")

        for(i = 1; i < ckExcluir; i++){
            if(!ckExcluir[i].checked){
                let titulo = tbFilmes.rows[i].cells[0].textContent
                let genero = tbFilmes.rows[i].cells[1].textContent
                gravarFilme(titulo, genero)
            }
        }

        for(i = ckExcluir.length - 1; i > 0; i--){
            if(ckExcluir[i].checked){
                tbFilmes.deleteRow(i)
            }
        }

        ckExcluir[0].checked = false
    }
}

let btExcluir = document.getElementById("btExcluir")
btExcluir.addEventListener("click", removerFilmes)



