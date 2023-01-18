const getTotalScore = (ScoreArray) => {
    let TotalScore = 0;
    let frameCount = 0;
    let index = 0;
    let length = ScoreArray.length;
    //console.log(ScoreArray);

    while (length > index) {
        if (isNaN(ScoreArray[index]))
            throw new Error('Invalid Input');
        if (frameCount == 10) {
            if (ScoreArray[index] == 10) {
                TotalScore += 10 + ScoreArray[index + 1] + ScoreArray[index + 2];
                index += 3;
            } else if (ScoreArray[index + 1] + ScoreArray[index] == 10) {
                TotalScore += ScoreArray[index + 1] + ScoreArray[index] + ScoreArray[index + 2];
                index += 3;
            } else {
                TotalScore = ScoreArray[index + 1] + ScoreArray[index];
            }
        } else if (ScoreArray[index] == 10) {
            TotalScore += 10 + ScoreArray[index + 1] + ScoreArray[index + 2];
            index += 1;
            frameCount += 1;
        } else if (ScoreArray[index] + ScoreArray[index + 1] == 10) {
            TotalScore += ScoreArray[index] + ScoreArray[index + 1] + ScoreArray[index + 2];
            index += 2;
            frameCount += 1;
        } else {
            TotalScore += ScoreArray[index] + ScoreArray[index + 1];
            index += 2;
            frameCount += 1;
        }
    }


    return TotalScore;

};

// let scores = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
// console.log(getTotalScore(scores));

module.exports = { getTotalScore };