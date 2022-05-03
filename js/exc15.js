console.log("acumulando valores");

function pulaLinha(){
    document.write("<br> <br>");
}

function mostra(frase){
    document.write(frase);
    pulaLinha();
}


let totalMembros = parseInt(prompt("Quantos familiares?"));

let num = 1;
let totalIdades = 0;
while( num <= totalMembros){
    let idade = parseInt(prompt("idade do familiar"));
    totalIdades = totalIdades + idade;
    num++;
}

let mediaIdades = totalIdades/totalMembros;
mostra("a média das idades dos familiares é " + mediaIdades);
mostra("fim!!")