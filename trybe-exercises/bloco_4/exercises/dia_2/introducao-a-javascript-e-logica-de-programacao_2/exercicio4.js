let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let soma = 0;
let somaart;
let resultado;

for ( index = 0; index < numbers.length; index += 1) {

    soma = soma + numbers[index];
    somaart = soma / numbers.length;
    resultado = somaart;
}

if ( resultado > 20 ) {
    console.log ( "Valor maior que 20") 
   } else {
       console.log (" Valor menor ou igual a  20")
   }


