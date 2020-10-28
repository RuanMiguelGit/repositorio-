 
// let teste = [2, 3, 6, 7, 10, 1];
function array (maior ) {
    let maiorNumero  = 0
    for ( index = 1; index < maior.length; index += 1){
        if( maior[index] > maiorNumero) {
            maiorNumero = maior[index]
            
        }
   
    }
        return maior.indexOf(maiorNumero)
}


console.log ( array ( [2, 3, 6, 7, 50, 1]))