const ex1 = require('./ex1')

it('should mock if the function is called and such', ()=>{
    ex1.randomNumber = jest.fn().mockImplementation((x,y) => x / y )
    .mockReturnValueOnce(10)
    expect(ex1.randomNumber(100, 10)).toBe(10)
    expect(ex1.randomNumber).toHaveBeenCalled()
    expect(ex1.randomNumber).toHaveBeenCalledTimes(1) 
})