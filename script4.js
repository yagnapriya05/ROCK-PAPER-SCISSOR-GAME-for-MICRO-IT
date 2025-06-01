let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = {
    rock: '🪨 Rock',
    paper: '📄 Paper',
    scissors: '✂️ Scissors'
  };

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = `It's a draw!`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    result = `You Win! ${emojis[playerChoice]} beats ${emojis[computerChoice]}`;
  } else {
    computerScore++;
    result = `You Lose! ${emojis[computerChoice]} beats ${emojis[playerChoice]}`;
  }

  // Update display
  document.getElementById('player-choice').textContent = emojis[playerChoice];
  document.getElementById('computer-choice').textContent = emojis[computerChoice];
  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

