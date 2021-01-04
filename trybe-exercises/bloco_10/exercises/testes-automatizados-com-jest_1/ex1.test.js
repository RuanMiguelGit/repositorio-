
 function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


// implemente seus testes aqui

describe('sum', () => {
    it('it should add two numbers', () => {
        expect(sum(1,2)).toBe(3);
        expect(sum(2,5)).toBe(7);
        expect(5).toEqual(sum(2,3))
    })
    it('it shoulndt add anything but numbers', ()=>{
     expect(()=>{
       sum(4,"5").toThrow('parameters must be numbers')
     })
    })
    it('it should give an error', ()=>{
      expect(()=>{
        sum(4,"5").toThrow(Error)
      })
    })
})