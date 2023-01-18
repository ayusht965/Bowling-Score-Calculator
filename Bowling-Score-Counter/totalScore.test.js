const { getTotalScore } = require('./totalScore');

describe('Total score calculator test', () => {
    it('should give 90 when score1 array is proided', () => {
        const scores1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        expect(getTotalScore(scores1)).toBe(90);
    });
    it('should through an error if score is greater than 10', () => {
        const scores2 = [3, 6, 11, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        expect(() => {
            getTotalScore(scores2);
        }).toThrow('Invalid Input');
    });
    it('should give total score of 30 when score3 array is given', () => {
        const scores3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        expect(getTotalScore(scores3)).toBe(30);
    });
    it('should throw error if the input size is greater than 21', () => {
        const scores4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 9];
        expect(() => {
            getTotalScore(scores4);
        }).toThrow('Invalid input size');
    })
    it('should throw an error if input is invalid', () => {
        expect(() => {
            getTotalScore([3, 6, 'abs', 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
        }).toThrow('Invalid Input');
    });
});
