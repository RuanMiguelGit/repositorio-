import {sum} from './ex1.js';

describe('sum', () => {
    it('it should add two numbers', () => {
        expect(sum(1,2)).toBe(3)
    })
})