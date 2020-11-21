
// //Parte 1
    const testingScope = escopo => {
    if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const Compare = (a, b) =>  a-b 
oddsAndEvens.sort(Compare)
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);

//Parte 2 

const Factorial = num => {
    let result = 1
    for (let index = 1; index <= num; index += 1) {
         result = result * index
    }
    return result
}

console.log(Factorial(5))

// recurssion call

function Factorial2 (num) {
    if(num <= 1) //base case 
    return 1
    else 
    return num * Factorial2(num -1) // callback function
    

}

console.log(Factorial2(5))


// with templates literals

const factorial2 = num => {if(num<=1) return 1  
    else 
    return num*factorial2(num-1) }

   console.log(factorial2(5))

// longestWord

const longestWord = phrase => {
    
let Longest = " ";
const words = phrase.split(' ')
for( let index = 0; index < words.length; index +=1){
    if( words[index].length > Longest.length) {
        Longest = words[index]
    }
   
}

return Longest
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))