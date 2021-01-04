function encode(encoder) {

    let resultado = "";
    for ( let index = 0; index <= encoder.length -1 ; index +=1) {
    
    if( encoder[index]  === "a") {
        resultado += "1"
    } else if (encoder[index]  === "e") {
      resultado += "2"
    } else if ( encoder[index] === "i") {
      resultado +="3"
    } else if ( encoder[index] === "o") { 
      resultado += "4"
    } else if ( encoder[index] === "u") {
      resultado +="5"
    } else {
      resultado += encoder
      [index]
    }
    
    }
    return resultado
     }

     module.exports = encode