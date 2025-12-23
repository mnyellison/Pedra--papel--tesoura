const result = document.querySelector('.result')
const myScore = document.querySelector('#my-score')
const scoreMachine = document.querySelector('#score-machine')

let humanScoreNumber = 0
let machineScoreNumber = 0

// ENUMS
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const humanClicked = (humanChoice) => {
    playTheGame(humanChoice, machineChoice())
}

const machineChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Máquina: ' + machine)

    if (human === machine) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        machineScoreNumber++
        scoreMachine.innerHTML = machineScoreNumber
        result.innerHTML = 'Deu empate.'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++
        scoreMachine.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a IA!'
    }
}