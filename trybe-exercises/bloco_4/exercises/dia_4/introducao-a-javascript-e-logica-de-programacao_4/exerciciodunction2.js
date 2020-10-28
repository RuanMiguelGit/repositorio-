function array ( Maiorvalor) {
    let teste = [2, 3, 6, 7, 10, 1] ;
    let maiorNumero  = 0
    for ( index = 1; index < teste.length; index += 1){
        if ( teste[index] > maiorNumero) {
            maiorNumero = teste[index]
        }
   
    }
        return maiorNumero
}


console.log (array ( [2, 3, 6, 7, 10, 1] ))