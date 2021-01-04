const myRemoveWithoutCopy = require ('./myremove2')

describe('myRemove2', () => {
    it('it should not have 3', () => {
        expect([1,2,4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
    })
    it('it should not return 1,2,3,4', ()=>{
        expect([1,2,3,4]).not.toEqual(myRemoveWithoutCopy([1,2,3,4], 3))
    })
    it('it should  not change', () => {
        expect([1,2,3,4]).toEqual(myRemoveWithoutCopy([1,2,3,4]))
    })
    it('it should return 1,2,3,4', ()=>{
        expect([1,2,3,4]).toEqual(myRemoveWithoutCopy([1,2,3,4],5))
    })
})