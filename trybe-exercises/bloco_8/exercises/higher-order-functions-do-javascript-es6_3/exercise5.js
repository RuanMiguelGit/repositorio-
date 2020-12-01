    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
    let soma =  names.reduce((total, element) =>  total.concat(element))
    let split = soma.split('')  
    let conta = split.filter(element => element === 'a' || element === 'A').length

  return conta
}
console.log(containsA())

assert.deepEqual(containsA(), 20);