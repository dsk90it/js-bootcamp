import Hangman from './hangman'
import getPuzzle from './requests'
 
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guess')
let game_1

window.addEventListener('keypress', (e) =>{
    const guess = e.key
    game_1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessEl.innerHTML = game_1.statusMessage
    
    game_1.puzzle.split('').forEach((letter) => {
        const spanEl = document.createElement('span')
        spanEl.textContent = letter
        puzzleEl.appendChild(spanEl)
    });
    
}

const startGame = async() => {
    const randomWords = await getPuzzle('2')
    game_1 = new Hangman(randomWords, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()