const prompt = require('prompt-sync')();

const getTotalScore = (ScoreArray) => {
    let TotalScore = 0;
    let frameCount = 0;
    console.log(ScoreArray);
    for (let index = 0; index < ScoreArray.length; index++) {

        if (isNaN(ScoreArray[index])) throw new Error('Enter a valid input type');

        if (ScoreArray[index] > 10) throw new Error('Enter valid input, should be less than or eqaul to 10');

        if (ScoreArray[index] === 10) {
            frameCount += 1;
            if (frameCount > 10)
                throw new Error('Invalid scores');
            if (frameCount <= 10) {
                if (index + 2 <= ScoreArray.length) {
                    TotalScore = 10 + ScoreArray[index + 1] + ScoreArray[index + 2];
                }

            } else if (frameCount > 10) {
                throw new Error('The input scores are more than 10 frames');
            } else {
                throw new Error('Invalid Input');
            }
        }
        else if (ScoreArray[index] < 10) {
            frameCount += 1;
            if (frameCount > 10)
                throw new Error('Invalid scores');
            let frameScore = 0;
            if (index + 1 <= ScoreArray.length) {
                frameScore = ScoreArray[index] + ScoreArray[index + 1];
                if (frameScore == 10) {
                    if (index + 2 <= ScoreArray.length) {
                        frameScore = ScoreArray[index + 2];
                        index += 2;
                    }
                }
            }
            TotalScore += frameScore;
        }
    }
    return TotalScore;

};
let ScoreArray = [];
ScoreArray = prompt('Enter the scores');
console.log(getTotalScore(ScoreArray));