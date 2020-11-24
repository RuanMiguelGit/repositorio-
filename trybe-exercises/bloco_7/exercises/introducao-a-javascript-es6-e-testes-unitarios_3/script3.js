const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}
console.log

// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3), [1,2,4])
assert.notStrictEqual(myRemoveWithoutCopy([1,2,3,4],3), [1,2,3,4])

newarr = [5,6,7,8]
myRemoveWithoutCopy(newarr, 5)

assert.deepStrictEqual(newarr.length, 3, 'é igual')

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],5),[1,2,3,4])