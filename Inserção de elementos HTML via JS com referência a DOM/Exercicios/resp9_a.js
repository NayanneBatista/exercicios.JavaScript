function exibirVelas() {
    let inIdade = document.getElementById("inIdade")
    let idade = Number(inIdade.value)
  
    if (idade <= 0 || idade > 120 || isNaN(idade)) {
      alert("Informe uma idade válida... Entre 1 e 120 anos")
      inIdade.focus()
      return
    }
  
    let strIdade = idade.toString()
    let divExibir = document.getElementById("divExibir")
    let img
  
    for (let i=0; i<strIdade.length; i++) {
      img = document.createElement("img")
      img.src = "img/" + strIdade.charAt(i) + ".jpg"
      img.alt = "Vela de " + strIdade.charAt(i) + " anos"
      divExibir.appendChild(img)
    }
  
    btExibir.disabled = true
    btNovas.focus()
  }
  let btExibir = document.getElementById("btExibir")
  btExibir.addEventListener("click", exibirVelas)
  
  let btNovas = document.getElementById("btNovas")
  btNovas.addEventListener("click", function() {
    location.reload() 
  })