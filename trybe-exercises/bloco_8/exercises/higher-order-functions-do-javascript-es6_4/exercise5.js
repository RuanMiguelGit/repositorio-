const assert = require('assert')

const myList = [1, 2, 3]

const swap = ([a,b,c]) => [c,b,a]

// escreva swap abaixo

const swappedList = swap(myList)

console.log(swap(myList))
assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)