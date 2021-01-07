const upperCase = (string) => {
    return string.toUpperCase()
}

const thefirstLetter = (str) =>{
    return str.split('')[0]
 
}

const together = (string1, string2) =>{
    return `${string1} ${string2}`
}

const l = (string) =>{
    return string.toLowerCase()
}

console.log(thefirstLetter('abc'))
module.exports = {
    upperCase,
    thefirstLetter,
    together
}