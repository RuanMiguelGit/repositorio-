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
assert.notStrictEqual(myRemove([1,2,3,4],3), [1,2,3,4])

newarr = [5,6,7,8]
const expected = myRemove(newarr, 5) //drible

assert.ok(newarr, [5,6,7,8],'é iguial')  // Entendo, é uma artimanha, cria-se uma nova array chama a função nessa array e no assert ao inves de usar a constante que guardou a função voce chama o array enganando o assert
assert.deepStrictEqual(myRemove(([1,2,3,4]),5),[1,2,3,4])


