function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

let contador = 1;

while (contador <= 3) {
  alert("Deixe-me entrar!");
  contador++
}

mostra(contador);
