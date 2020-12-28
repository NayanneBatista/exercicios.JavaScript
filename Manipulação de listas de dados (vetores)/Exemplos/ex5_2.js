let erros = []

let sorteado = Math.floor(Math.random() * 100) + 1

const CHANCES = 6

function apostarNumero() {
    let inNumero = document.getElementById("inNumero")
    let numero = Number(inNumero.value)

    if(numero <= 0  || numero > 100 || isNaN(numero)) {
        alert("Escolha um número válido")
        inNumero.focus()
        return
    }

    let outDica = document.getElementById("outDica")
    let outErros = document.getElementById("outErros")
    let outChances = document.getElementById("outChances")

    if(numero == sorteado){
        alert("Parabéns! Você acertou!")
        btApostar.disabled = true
        btJogar.className = "exibe"
        outDica.textContent = "Parabéns! Número sorteado: " + sorteado
    } else {
        if(erros.indexOf(numero) >= 0){
            alert(`Você já apostou o número ${numero}. Tente outro! `)
        } else {
            erros.push(numero)
            let numErros = erros.length
            let numChances = CHANCES - numErros
            outErros.textContent = `${numErros} ( ${erros.join(", ")} )`
            outChances.textContent = numChances

            if(numChances == 0) {
                alert("Suas chances acabaram")
                btApostar.disabled = true
                btJogar.className = "exibe"
                outDica.textContent = `Game Over!! Número Sorteado: ${sorteado}.\n Mas não se preocupe; para todo Game Over, existe um Play Again!`
            } else {
                let dica = numero < sorteado ? "maior" : "menor"
                outDica.textContent = `Dica: Tente um número ${dica} que ${numero}.`
            }
        }
    }

    inNumero.value = ""
    inNumero.focus()
}

let btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostarNumero)

function jogarNovamente() {
    location.reload()
}

let btJogar = document.getElementById("btJogar")
btJogar.addEventListener("click", jogarNovamente)