function pulaLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pulaLinha();
}

let totalDeEventos = parseInt(prompt("Informe o total de eventos"));

let contador = 1;

let totalGastoComEventos = 0;

while (contador <= totalDeEventos) {
  let gasto = parseFloat(prompt("Informe total gasto com evento"));
  totalGastoComEventos = totalGastoComEventos + gasto;
  contador++;
}

let media = totalGastoComEventos / totalDeEventos;

mostra("A média de gastos é " + media);
