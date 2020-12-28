function validarNome(nome){
    if(nome == "" || nome.indexOf(" ") == -1){
        return false
    }else{
        return true
    }
}

function obterSobrenome(nome){
    let partes = nome.split(" ")
    let sobrenome = partes[partes.length - 1].toLowerCase()

    return sobrenome
}

function contarVogais(nome){
    let nomeMin = nome.toLowerCase()
    let numVogais = 0

    //let vogais = nomeMin.match(/[a-e-i-o-u]/g)
    for(let i = 0; i < nomeMin.length; i++){
        if(nomeMin.charAt(i) == "a" || nomeMin.charAt(i) == 'e' || nomeMin.charAt(i) == 'i' || nomeMin.charAt(i) == 'o' || nomeMin.charAt(i) == 'u'){
            numVogais ++
        }
    }

    if(numVogais < 10){
        numVogais = "0" + numVogais
    }

    return numVogais
}

function gerarSenha(){
    let inNome = document.getElementById("inNome")
    let outSenha = document.getElementById("outSenha")

    let nome = inNome.value

    if(validarNome(nome)){
        outSenha.textContent = obterSobrenome(nome) + contarVogais(nome)
    }else{
        outSenha.textContent = "Favor informar nome completo do aluno!"
        inNome.focus()
    }  
}

let btGerar = document.getElementById("btGerar")
btGerar.addEventListener("click", gerarSenha)