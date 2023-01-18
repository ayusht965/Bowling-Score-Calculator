const { getTotalScore } = require('./totalScore.js');
const getBestPlayer = (Games) => {
    let AllPlayers = [];
    let TotalPlayers = Games.length;
    //console.log(TotalPlayers);
    let index = 0;
    while (index < TotalPlayers) {
        let CurrentPlayer = Games[index];
        AllPlayers[index] = getTotalScore(CurrentPlayer);
        index++;
    }
    //console.log(AllPlayers);
    let BestPLayerScore = 0, BestPlayerIndex;
    AllPlayers.forEach((element, index) => {
        if (BestPLayerScore < element) {
            BestPlayerIndex = index;
        }

        //console.log(BestPlayerIndex);
    });
    return 'Player ' + (BestPlayerIndex + 1) + ' got the highest score.';
};


// let result = getBestPlayer([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]]);
// console.log(result);

module.exports = { getBestPlayer };
