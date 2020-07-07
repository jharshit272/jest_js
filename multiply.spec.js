const multiply = require('./multiply');

describe('test multiply poitive scenarios', () =>{

    test('multiply 3*2 should be equal to 6', () =>{
        expect(multiply(3,2)).toBe(6);
    });

})