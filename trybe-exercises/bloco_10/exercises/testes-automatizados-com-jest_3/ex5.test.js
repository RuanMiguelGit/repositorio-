const ex5 = require('./ex5');
jest.mock("./ex5");

it('should mock if the function is called and such', ()=>{
    ex5.upperCase = jest.fn().mockImplementation((string) => {return string.toLowerCase()})
    .mockReturnValueOnce('arroz')
    expect(ex5.upperCase("ARROZ")).toBe('arroz')
    expect(ex5.upperCase).toHaveBeenCalled()
    expect(ex5.upperCase).toHaveBeenCalledTimes(1) 

})


it('should mock if the function is called and such 2', ()=>{
    ex5.thefirstLetter = jest.fn().mockImplementation((string) => {return str.split('').reverse()[0]
})
    .mockReturnValueOnce('c')
    expect(ex5.thefirstLetter("abc")).toBe('c')
    expect(ex5.thefirstLetter).toHaveBeenCalled()
    expect(ex5.thefirstLetter).toHaveBeenCalledTimes(1) 

})


it('should mock if the function is called and such 3', ()=>{
    ex5.together = jest.fn().mockImplementation((string1, string2, string3) => {return `${string1} ${string2} ${string3}`
})
    .mockReturnValueOnce('arroz feijao limao')
    expect(ex5.together("arroz", "feijao", "limao")).toBe("arroz feijao limao")
    expect(ex5.together).toHaveBeenCalled()
    expect(ex5.together).toHaveBeenCalledTimes(1) 

})