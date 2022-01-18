function computerPlay() {
  let number = (Math.random()*3);
  if(number <= 1){
   return 'rock';
  } else if (number >= 2){
    return 'paper';
  } else{
    return 'scissors';
  }
} 
let playerScore = 0
let computerScore = 0
function playRound(playerSelection, computerSelection) {
  if (playerSelection=='rock' && computerSelection=='scissors') {
    playerScore++
    return  `You win, rock beats scissors! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection=='scissors' && computerSelection=='paper') {
      playerScore++
      return `You win, scissors beats paper! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection=='paper' && computerSelection=='rock') {
      playerScore++
      return `You win, paper beats rock! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection=='rock' && computerSelection=='paper') {
      computerScore++
      return `You lose, paper beats rock! Score: ${playerScore} to ${computerScore} `
    } else if (playerSelection=='scissors' && computerSelection=='rock') {
      computerScore++
      return `You lose, rock beats scissors! Score: ${playerScore} to ${computerScore} `
    } else if (playerSelection=='paper' && computerSelection=='scissors') {
      computerScore++
      return `You lose, scissors beats paper! Score: ${playerScore} to ${computerScore} `
    } else return `It's a tie!  Try again.  Score: ${playerScore} to ${computerScore}`
  }
  const playerSelection='rock';
  const computerSelection=computerPlay();
console.log(playRound(playerSelection, computerSelection));