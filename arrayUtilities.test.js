
const { doubleNumbers, filterEvenNumber, tripleElementAndEvenNumber } = require('./doubleNumbers');

describe('Array utilities', () => {
    describe('Double Numbers', () => {
        it('Should double the elements when the input is an array', () => {
            const result = doubleNumbers([1, 3, 4]);
            expect(result).toEqual([2, 6, 8]);
        });
        it('should throuh an array when input is not an array', () => {
            expect(() => {
                doubleNumbers('abc');
            }).toThrow('Must provide an array');
        });
    });
    describe('Even numbers array', () => {
        it('shoud return array with ony even numbers', () => {
            const result = filterEvenNumber([1, 2, 3, 4, 5, 6]);
            expect(result).toEqual([2, 4, 6]);
        });
        it('should throw an error if input is not array', () => {
            expect(() => {
                filterEvenNumber('abc');
            }).toThrow('Must Provide an array');
        });
        it('should through an error if the array contains non integers', () => {
            expect(() => {
                filterEvenNumber([1, 2, 'a']);
            }).toThrow('the array contains non integers');
        });
    });
    describe('triple each element of array and filter even elements', () => {
        it('should throw an error if input is not array', () => {
            expect(() => {
                tripleElementAndEvenNumber('abc');
            }).toThrow('Must Provide an array');
        });
        it('should through an error if the array contains non integers', () => {
            expect(() => {
                filterEvenNumber([1, 2, 'a']);
            }).toThrow('the array contains non integers');
        });
        it('should return array with only even numbers with triple the value of each element', () => {
            const result = tripleElementAndEvenNumber([1, 2, 3, 4, 5, 6]);
            expect(result).toEqual([6, 12, 18]);
        });
    });
});
