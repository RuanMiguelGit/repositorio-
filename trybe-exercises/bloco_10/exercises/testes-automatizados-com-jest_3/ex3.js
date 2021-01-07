const ex1 = require('./ex1')

it('should mock if the function is called and such', ()=>{
    ex1.randomNumber = jest.fn().mockImplementation((x,y,z) => x * y * z)
    .mockReturnValueOnce(1)
    expect(ex1.randomNumber(1, 1, 1)).toBe(1)
    expect(ex1.randomNumber).toHaveBeenCalled()
    expect(ex1.randomNumber).toHaveBeenCalledTimes(1) 

    ex1.randomNumber.mockRestore();
    ex1.randomNumber = jest.fn().mockImplementation((x) => x * 2)
    .mockReturnValueOnce(1)
    expect(ex1.randomNumber(1)).toBe(2)
    expect(ex1.randomNumber).toHaveBeenCalled()
    expect(ex1.randomNumber).toHaveBeenCalledTimes(1)


})