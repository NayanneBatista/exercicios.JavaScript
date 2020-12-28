let numeros = []

function adicionarNumeros(){
    let inNumero = document.getElementById("inNumero")
    let num = Number(inNumero.value)

    if(num == "" || isNaN(num)){
        alert("Informe um número válido!")
        inNumero.focus()
        return
    }

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] == num){
            alert("Não é permitido repetir números! Insira outro valor!")
            inNumero.focus()
            return
        }  
    }

    numeros.push(num)
    inNumero.value = ""
    inNumero.focus()
    document.getElementById("outNumeros").textContent = `Números: ${numeros.join(", ")}`
}

let btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarNumeros)

function verificarOrdem(){
    for(let i = 0; i < numeros.length-1; i++){
        if(numeros[i] < numeros[i+1]){
            document.getElementById("outOrdem").textContent = "Os números estão em ordem crescente."
        }else{
            document.getElementById("outOrdem").textContent = "Os números não estão em ordem crescente."
        }
    }
}

let btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificarOrdem)
