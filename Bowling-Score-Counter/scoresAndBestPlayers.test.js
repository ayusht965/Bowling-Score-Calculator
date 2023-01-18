const { getTotalScore } = require('./scoresAndBestPlayer');

describe('Total score calculator test', () => {
    it('should give 90 when score1 array is proided', () => {
        const scores1 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
        expect(getTotalScore(scores1)).toBe(90);
    });
    it('should give total score of 48 when score2 array is given', () => {
        const scores2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
        expect(getTotalScore(scores2)).toBe(30);
    });
    it('should throw an error if input is invalid', () => {
        expect(() => {
            getTotalScore([3, 6, 'abs', 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
        }).toThrow('Invalid Input');
    });
});
