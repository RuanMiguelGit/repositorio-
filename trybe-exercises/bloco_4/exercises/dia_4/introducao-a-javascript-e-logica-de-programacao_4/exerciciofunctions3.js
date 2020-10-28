function array (maior ) {
    let maiorNumero  = 100;
    for ( index = 0; index < maior.length; index += 1){
        if( maiorNumero > maior[index] ) {
            maiorNumero = maior[index]
            
        }
   
    }
        return maior.indexOf(maiorNumero)
}


console.log ( array ( [2, 3, 6, 7, 50, 1]))