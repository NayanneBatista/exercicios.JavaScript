function exibirMoedas(){
    let num1_00 = Math.ceil(Math.random() * 5)
    let num0_50 = Math.ceil(Math.random() * 5)
    let num0_25 = Math.ceil(Math.random() * 5)
    let num0_10 = Math.ceil(Math.random() * 5)

    let divMoedas = document.getElementById("divMoedas")

    let alt1_00 = "Moedas de Um Real"
    let alt0_50 = "Moedas de Cinquenta Centavos"
    let alt0_25 = "Moedas de Vinte e Cinco Centavos"
    let alt0_10 = "Moedas de Dez Centavos"

    criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00")
    criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50")
    criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25")
    criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10")
}
exibirMoedas()

function criarMoedas(num, pai, moeda, textoAlt, classe){

    for(let i = 1; i <= num; i++){
        let novaMoeda = document.createElement("img")
        novaMoeda.src = "img/" + moeda
        novaMoeda.textoAlt = textoAlt
        novaMoeda.className = classe
        pai.appendChild(novaMoeda)
    }

    let br = document.createElement("br")
    pai.appendChild(br)
}

function conferirSoma(){
    let inSoma = document.getElementById("inSoma")
    let soma = Number(inSoma.value)

    if(soma == 0 || isNaN(soma)){
        alert("Informe o valor da soma (use ponto para separar decimais")
        inSoma.focus()
        return
    }

    let divMoedas = document.getElementById("divMoedas")
    let moedas = divMoedas.getElementsByTagName("img")

    let totalMoedas = 0

    for(let i = 0; i < moedas.length; i++){
        if(moedas[i].className == "moeda1_00"){
            totalMoedas += 1
        }else if(moedas[i].className == "moeda0_50"){
            totalMoedas += 0.50
        }else if(moedas[i].className == "moeda0_25"){
            totalMoedas += 0.25
        }else{
            totalMoedas += 0.10
        }
    }

    let div = document.createElement("div")
    let h3 = document.createElement("h3")

    if(soma == totalMoedas.toFixed(2)){
        div.className = "alert alert-success"
        mensagem = "Parabéns!! Você acertou!"
    }else{
        div.className = "alert alert-danger"
        mensagem = "Ops... A resposta correta é " + totalMoedas.toFixed(2)
    }

    let texto = document.createTextNode(mensagem)
    h3.appendChild(texto)
    div.appendChild(h3)
    divMoedas.appendChild(div)

    btConferir.disabled = true
}

let mensagem = ""
let btConferir = document.getElementById("btConferir")
btConferir.addEventListener("click", conferirSoma)

let btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", function(){
    location.reload()
})