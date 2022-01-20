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
    return  `You win this round, You picked rock, computer picked scissors! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection=='scissors' && computerSelection=='paper') {
      playerScore++
      return `You win this round, you picked scissors, computer picked paper! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection=='paper' && computerSelection=='rock') {
      playerScore++
      return `You win this round, you picked paper, computer picked rock! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection=='rock' && computerSelection=='paper') {
      computerScore++
      return `You lose this round, you picked rock, computer picked paper! Score: ${playerScore} to ${computerScore} `
    } else if (playerSelection=='scissors' && computerSelection=='rock') {
      computerScore++
      return `You lose this round, you picked scissors, computer picked rock! Score: ${playerScore} to ${computerScore} `
    } else if (playerSelection=='paper' && computerSelection=='scissors') {
      computerScore++
      return `You lose this round, you picked paper, computer picked scissors! Score: ${playerScore} to ${computerScore} `
    } else return `It's a tie!  Try again.  Score: ${playerScore} to ${computerScore}`
  }
  
function game() {
  for (let step=0; step <5; step++) {
    const computerSelection=computerPlay();
    let playerSelection=prompt('Rock, Paper, or Scissors');
    console.log(playRound(playerSelection, computerSelection));
  }
 if (playerScore>computerScore) {
   console.log(`You Win! Score: ${playerScore} to ${computerScore}`);
 } else if (playerScore<computerScore) {
   console.log(`You Lose! Score: ${playerScore} to ${computerScore}`)
} else 
  console.log(`Its a Tie! Score: ${playerScore} to ${computerScore}`);
}
game();