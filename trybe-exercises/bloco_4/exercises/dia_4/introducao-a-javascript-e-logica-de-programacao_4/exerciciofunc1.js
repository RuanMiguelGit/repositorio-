 function verificaPalindrome (string) {
    
    if (string == string.split('').reverse().join('')) {
        return true;
    }
    else {

        return false;
    }
    
}

console.log(verificaPalindrome("arara"))






