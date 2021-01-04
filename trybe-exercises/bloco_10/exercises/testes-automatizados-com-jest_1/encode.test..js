const encode = require('./encode')

describe('encode', ()=>{
    it('it should check if they are functions', ()=>{
        expect(typeof encode === 'function').toEqual(true)
    })
    it('it should translate the vogals to numbers properly', ()=>{
        expect(1,2,3,4,5).toEqual(encode('a, e, i, o, u '))
    })
})