/*
    Algorithim of the game:
    1.the computer choose a number
    2.convert the number to a string choice
    3.compair the two choices of the player and the compouter
    4.show the result
    5.wins: loses: ties:
*/



let result = ''
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

function PickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = ''

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber < 1/2) {
        computerMove = 'paper'
    } else if (randomNumber >= 1/2 && randomNumber < 1) {
        computerMove = 'scissors'
    }
    return computerMove
}


function playGame(playerMove) {
    const computerMove = PickcomputerMove()

    if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'tie'
        } else if(computerMove === 'paper') {
            result = 'losse'
        } else if(computerMove === 'scissors') {
            result = 'win'
        }

    }else if (playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'win'
        } else if (computerMove === 'paper') {
            result = 'tie'
        } else if (computerMove === 'scissors') {
            result = 'losse'
        }

    }else if (playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'losse'
        } else if(computerMove === 'paper') {
            result = 'win'
        } else if(computerMove === 'scissors') {
            result = 'tie'
        }
    }

    if(result === 'win') {
        score.wins = score.wins + 1
    } else if(result === 'losse') {
        score.losses = score.losses + 1
    } else if(result === 'tie') {
        score.ties = score.ties + 1
    }


    localStorage.setItem('score', JSON.stringify(score))

    // alert(`you ${result} 
    // wins:${score.wins} | losses:${score.losses} | ties:${score.ties}` )

document.querySelector('.who-win')
    .innerHTML = `you ${result} `

document.querySelector('.choose')
    .innerHTML = `     you 
    <img class="small-img" src="./images/${playerMove}-emoji.png">
    <img class="small-img" src="./images/${computerMove}-emoji.png">
    computer`

    document.querySelector('.result')
        .innerHTML = `
wins: ${score.wins} | losses:${score.losses} | ties:${score.ties}`
}

function resetScore() {
    score.wins = 0,
    score.losses = 0,
    score.ties = 0

    localStorage.setItem('score', JSON.stringify(score))

    document.querySelector('.result')
        .innerHTML = `wins: ${score.wins} | losses: ${score.losses} | ties: ${score.wins}`
}

document.querySelector('.result')
    .innerHTML = `wins: ${score.wins} | losses:${score.losses} | ties:${score.ties}`



// function computerMove() {
//     if(randomNumber >= 0 && random)
// }
