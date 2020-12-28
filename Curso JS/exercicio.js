function adicionarNumeros(){
    
    let num = Number(inNumero.value)
    let mostrarNumeros = []

    if(num == "" || num == 0 || isNaN(num) || num < 0 || num > 100){
        alert("Informe um número válido para ser analisado")
        inNumero.focus()
        return
    }
     
    if(mostrarNumeros)
    numeros.push(num)

    for(let i = 0; i < numeros.length; i++){
        if(mostrarNumeros.indexOf(num) == -1){
            mostrarNumeros.push(num)
            inNumero.value = ""
            lista += `Valor ${num} adicionado. \n`
            inNumero.focus()
        }else{
            alert("Esse número já foi escolhido")
            inNumero.focus()
            return
        }
    }
    
    outTexto.innerHTML = lista
}

let pressionarEnter = function(tecla){
    if(tecla.keyCode == 13){
        adicionarNumeros()
    }
}
let inNumero = document.getElementById("inNumero")
let outTexto = document.getElementById("outTexto")
inNumero.addEventListener("keypress", pressionarEnter)




function analisarNumeros(){
    
    
    

    

    
}

let lista = ""
let btAnalisar = document.getElementById("btAnalisar")
btAnalisar.addEventListener("click", analisarNumeros)
