function verificaPerfeito() {
    let inNumero = document.getElementById("inNumero")
    let outDivisores = document.getElementById("outDivisores")
    let outResultado = document.getElementById("outResultado")

    let num = Number(inNumero.value)

    if(num == 0 || isNaN(num)){
        alert("Insira um número válido!")
        inNumero.focus()
        return
    }

    let divisores = ""
    let somaDivisores = 0

    for(i = 1; i<num; i++){
        if(num % i == 0) {
            somaDivisores+=i
            if(i == num/2){
                divisores+=i + ". "
            }else{
                divisores+=i + ", "  
            }
        }
    }

    outDivisores.textContent = `Divisores de ${num}: ${divisores} (Soma: ) ${somaDivisores}`

    if(somaDivisores==num){
        outResultado.textContent = `${num} é um número perfeito.`
    }else {
        outResultado.textContent = `${num} não é um número perfeito`
    }
}

let btPerfeito = document.getElementById("btPerfeito")
btPerfeito.addEventListener("click", verificaPerfeito)