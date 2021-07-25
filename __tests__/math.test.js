const { add, divide, multiply } = require('../src/math');

describe('add() tests', () => {

    test('1 + 2 should be 3', () => {
        expect( add(1, 2)).toBe(3);
    });
});

describe('divide() tests', () => {

    test('4 / 2 should be 2', () => {
        expect( divide(4, 2)).toBe(2);
    });

    test('5 / 0 should be null', () => {
        expect(divide(5, 0)).toBeNull();
    });
});

describe('multiply() tests', () => {

    // Callback approach
    test('multiply(5,5) to be 25', (done) => {
        multiply(5,5).then( result => {
            expect( result ).toBe(25);
            done();
        });
    })

    // Promise approach
    test('multiply(2,3) to be 6', () => {
        return multiply(2, 3).then(result => {
            expect(result).toBe(6);
        });
    });

    // Async/await approach
    test('multiply(2,0) to be 0', async () => {
        const result = await multiply(2, 0);
        expect(result).toBe(0);
    })

})