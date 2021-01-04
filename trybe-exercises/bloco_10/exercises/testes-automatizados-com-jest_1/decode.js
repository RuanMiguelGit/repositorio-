function decode(decoder) {

    let resultado = "";
    for ( let index = 0; index <= decoder.length -1 ; index +=1) {
    
    if( decoder[index]  === "1") {
        resultado += "a"
    } else if (decoder[index]  === "2") {
      resultado += "e"
    } else if ( decoder[index] === "3") {
      resultado +="i"
    } else if ( decoder[index] === "4") { 
      resultado += "o"
    } else if ( decoder[index] === "5") {
      resultado +="u"
    } else {
      resultado += decoder[index]
    }
    
    }
    return resultado
     }

     module.exports = decode