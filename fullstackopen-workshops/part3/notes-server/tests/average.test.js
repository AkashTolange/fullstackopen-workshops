const average = require('../utils/for_testing').average;

//describe chae mulitple tests haru eutae group ko xa vane  
describe('average', () => {
    test('of one value is the value itself', () => {
        const result = average([5]);
        expect(result).toBe(5);
    });

    test("of many is calculated right", () => {
        const result = average([1, 2, 3, 4, 5]);
        expect(result).toBe(3);
    });

    test('of empty array is zero', () => {
        const result = average([]);
        expect(result).toBe(0);
    }); 
})