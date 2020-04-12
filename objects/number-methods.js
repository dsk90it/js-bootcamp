let makeGuess = function(answer){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return answer === randomNum
}

console.log(makeGuess(1))