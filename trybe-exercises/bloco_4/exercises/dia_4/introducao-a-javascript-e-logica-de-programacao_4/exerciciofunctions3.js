function array (menor ) {
    let menorNumero  = 100;
    for ( index = 0; index < menor.length; index += 1){
        if( menorNumero > menor[index] ) {
            menorNumero = menor[index]
            
        }
   
    }
        return menor.indexOf(menorNumero)
}


console.log ( array ( [2, 3, 6, 7, 50, 1]))