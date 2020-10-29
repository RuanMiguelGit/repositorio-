 
// let teste = [2, 3, 6, 7, 10, 1];
function array (maior) {
    let maiorNumero = "0"
    for ( let index in maior ){
        if (maiorNumero.length < maior[index].length) {
            maiorNumero = maior[index];
        }
   
    }
    return maiorNumero
}
console.log (array ( ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
