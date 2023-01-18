const { getBestPlayer } = require('./bestPlayer');

describe('Test for getting th best player', () => {
    it('Should return 1st player scored the highest', () => {
        const firstGame = [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]];
        expect(getBestPlayer(firstGame)).toBe('Player 1 got the highest score.');
    });
});