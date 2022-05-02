function calculaImc(altura, peso){
    return peso / (altura*altura)
}

var nome = prompt("digite seu nome")
var altura = prompt(nome, "digite altura")
var peso = prompt(nome, "digite peso")

var imc = calculaImc(altura, peso)

document.write(nome + ", o seu imc é de " + imc)