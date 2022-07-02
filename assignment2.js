var runs = [1,0,2,4,3,6,0,0,0,2,6,2,6,6,6,4,1,1];

function displayScoreBoard(arr){

    const scoreBoard = {'Total Score' : 0, };

    let totalScore = 0;

    for(let i = 0; i< arr.length/6; i++){
        
        let over = i + 1;
        let sum = 0;
        
        for(let j = i*6; j < i*6 + 6; j++){
            sum = sum + arr[j];
        }
        
        scoreBoard['Over' + over] = sum;
        totalScore += sum;
        
    }
    scoreBoard['Total Score'] = totalScore;

    return scoreBoard;

}

console.log(displayScoreBoard(runs));

