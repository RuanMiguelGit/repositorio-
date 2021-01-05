const uppercase = require('./ex1')

describe('uppercase', () => {
    it('it should check if the letters are change to Uppercase', done =>{
        uppercase('bread', str =>{
            expect(str).toBe("BREAD")
            done()
        } )
    })
})


