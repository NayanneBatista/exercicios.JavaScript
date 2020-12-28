function criarEstrelas() {
    let inNumero = document.getElementById("inNumero")
    let outLinhas = document.getElementById("outLinhas")

    let num = Number(inNumero.value)

    if(num == 0 || isNaN(num)){
        alert("Insira um número válido!")
        inNumero.focus()
        return
    }

    let linhas = ""
    let stars = "" 

    for(let i = 1; i <= num; i++){
        stars+="*"
        linhas+=stars + "<br>"
    }

    outLinhas.innerHTML = linhas
}

let btEstrelas = document.getElementById("btEstrelas")
btEstrelas.addEventListener("click", criarEstrelas)
