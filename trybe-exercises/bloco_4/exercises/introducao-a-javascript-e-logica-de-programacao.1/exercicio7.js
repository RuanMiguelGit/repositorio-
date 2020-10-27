let resultado ;
let Porcentagem = 49; 

if (Porcentagem >= 100) {
    resultado = "Fim do programa";
} else if ( Porcentagem >= 90) {
    resultado = "A";
} else if ( Porcentagem >= 80) {
    resultado = "B";
} else if ( Porcentagem >= 70){
    resultado = "C";
} else if ( Porcentagem >= 60) {
    resultado = "D";
} else if ( Porcentagem >= 50) {
    resultado = "E";
} else if ( Porcentagem >= 0) {
    resultado = "F";
} else if ( Porcentagem < 0) {
    resultado= "Fim do Programa";
}
console.log(resultado)