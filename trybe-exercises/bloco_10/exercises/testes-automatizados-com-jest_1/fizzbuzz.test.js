const myFizzBuzz = require ('./fizzbuzz')

describe('myFizzBuzz', () =>{
    it('it should return a number divisible by 3 and 5', ()=> {
        expect('fizzbuzz').toEqual(myFizzBuzz(15))
    })
    it('it should should return 3 if the number is divisible by 3', () =>{
        expect('fizz').toEqual(myFizzBuzz(3))
    })
    it('it should return buzz if the number is divisble by 5', () =>{
        expect('buzz').toEqual(myFizzBuzz(5))
    })
    it('it should return the number if not disible', () =>{
        expect(16).toEqual(myFizzBuzz(16))
    })
    it('it should return false or null if not number ', () =>{
        expect(false ).toEqual(myFizzBuzz('arroz'))
    })
})