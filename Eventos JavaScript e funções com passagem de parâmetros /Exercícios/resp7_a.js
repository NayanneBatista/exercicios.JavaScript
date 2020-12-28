function retornarTracos(nome){

    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Informe o nome completo do atleta")
        inNome.focus()
        return
    }

    let nomeCompleto = nome + "\n"

    for(let i = 0; i < nome.length; i++){
        if(nome.charAt(i) == " "){
            nomeCompleto += "  "
        }else{
            nomeCompleto += "-" 
        }
    }

    return nomeCompleto
}

function categorizarAtleta(idade){
    let categoria

    if(idade <= 12){
        categoria = "Infantil"
    }else if(idade <= 18){
        categoria = "Juvenil"
    }else{
        categoria = "Adulto"
    }
   
    return categoria
}

function executar(){
    let inIdade = document.getElementById("inIdade")
    let outCategoria = document.getElementById("outCategoria")
    let inNome = document.getElementById("inNome")
    let outNomeEspaco = document.getElementById("outNomeEspaco")

    let nome = inNome.value
    let idade = Number(inIdade.value)

    outCategoria.textContent = `Categoria: ${categorizarAtleta(idade)}`
    outNomeEspaco.innerText = retornarTracos(nome)
}

let btCategorizar = document.getElementById("btCategorizar")
btCategorizar.addEventListener("click", executar)

