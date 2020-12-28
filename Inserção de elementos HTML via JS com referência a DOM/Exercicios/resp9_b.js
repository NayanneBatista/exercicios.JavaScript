function exibirPartes(){
    let inNome = document.getElementById("inNome")
    let nome = inNome.value
    let divExibir = document.getElementById("divExibir")

    let listaH3 = document.getElementsByTagName("h3")
    
    for (let i = listaH3.length-1; i>=0; i--){
        divExibir.removeChild(listaH3[i])
    }

    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Insira seu nome completo!")
        inNome.focus()
        return
    }

    partes = nome.split(" ")
    let cores = ["blue", "red", "yellow", "green", "orange"]
    let corSorteada = ""
    
    for(let i = 0; i < partes.length; i++){
        h3 = document.createElement("h3")
        texto = document.createTextNode(partes[i])
        h3.appendChild(texto)
        corSorteada = Math.floor(Math.random()*5)
        h3.style.color = cores[corSorteada];
        divExibir.appendChild(h3)
    }
}

let btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", exibirPartes)


