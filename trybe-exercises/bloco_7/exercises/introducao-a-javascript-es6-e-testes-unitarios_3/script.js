const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//ex1

// assert.strictEqual(sum(4,5),9 ) // sem o expected 

// const expected = sum(4,5)
// assert.strictEqual(expected,9, "Quatro mais cinco é igual a 9")

//ex 2

// const expected = sum(0,0)
// assert.strictEqual(expected,0, "Zero mais zero é zero")

const expected = sum(4,"5") 
assert.strictEqual(expected, 9, " quatro mais cindo é igual a nove")

