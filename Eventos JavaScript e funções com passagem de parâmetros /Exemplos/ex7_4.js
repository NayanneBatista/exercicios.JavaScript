let btExibir = document.getElementById("btExibir")

btExibir.addEventListener("click", function() {

    let inPreco = document.getElementById("inPreco")
    let outParcelas = document.getElementById("outParcelas")

    let preco = Number(inPreco.value)

    let lista = ""

    for(let i = 1;i <= 10; i++){
        lista += `${i} x de R$: ${(preco / i).toFixed(2)} \n`
    }

    outParcelas.textContent = `Opções de pagamento \n\n${lista}`
})

/*let dobro = function(a){
    return a*2
}

let num = Number(prompt("Número: "))
alert("O dobro do número é " + dobro(num))*/