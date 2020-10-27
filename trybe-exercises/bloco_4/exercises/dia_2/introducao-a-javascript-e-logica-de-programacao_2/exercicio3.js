let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let soma = 0;
let somaart;

for ( index = 0; index < numbers.length; index += 1) {

    soma = soma + numbers[index];
    somaart = soma / numbers.length;
}

console.log (somaart)