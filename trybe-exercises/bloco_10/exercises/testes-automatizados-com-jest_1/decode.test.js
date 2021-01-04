const decode = require('./decode')

describe('decode', () =>{
    it('it should convert the numbers into letters', () => {
        expect(' a, e, i, o, u').toEqual(decode(' 1, 2, 3, 4, 5'))
    })
    it('it should not decode any other letters', () =>{
        expect('b').toEqual( decode('b'))
    })
    it('the lenght should be the same', () =>{
        expect((' a, e, i, o, u').length).toEqual(decode(' 1, 2, 3, 4, 5').length)
    })
})