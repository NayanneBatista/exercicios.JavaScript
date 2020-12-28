let noticias = []
let cadastradas = 0

function adicionarNoticia(){
    let inNoticia = document.getElementById("inNoticia")
    let noticia = inNoticia.value

    if(noticia == ""){
        alert("Insira uma notícia.")
        inNoticia.focus()
        return
    }

    noticias.push(noticia)

    inNoticia.value = ""
    inNoticia.focus()
    cadastradas = 0

    for(let i = 0; i < noticias.length; i++){
        cadastradas += 1
    }

    document.getElementById("outTotalNoticias").textContent = `Notícias cadastradas: ${cadastradas}`
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarNoticia)

function listarNoticias(){
    let numeroNoticias = Number(prompt("Insira a quantidade de notícias que deseja visualizar: "))

    if(numeroNoticias > cadastradas){
        alert("Informe um número menor ou igual ao número de notícias cadastradas.")
        return
    }

    let ultimasNoticias = document.getElementById("outUltimasNoticias")
    
    let listaNoticias = ""
    let notCadastradas = 0
    let copia = noticias.slice()
    copia.reverse()
    notCadastradas = copia.length

    for(let i = 0; i < numeroNoticias; i++){
        listaNoticias += `${notCadastradas}) ${copia[i]} \n`
        notCadastradas -=1
    }

 ultimasNoticias.textContent = `${numeroNoticias} Últimas Notícias \n-------------------------\n${listaNoticias}`
}

let btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarNoticias)