const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.ok(myRemove([1,2,3,4],5), [1,2,3,4])
// implemente seus testes aqui

// const expected = myRemove ([1, 2, 3, 4], 3)

// assert.strictEqual(myRemove, ([1,2,4]), " o retorno não pode incluir o três")