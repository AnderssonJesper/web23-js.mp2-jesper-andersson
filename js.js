let playerScore = 0;
let computerScore = 0;
let roundResult = '';

function play(playerChoice){
    const playerName = document.getElementById('player-name').value;


  const choices = ['sten', 'sax', 'påse'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

document.getElementById('player-choice').textContent = `${playerName}s val: ${playerChoice}`;
document.getElementById('computer-choice').textContent = `Datorn valde ${computerChoice}`;

if (playerChoice === computerChoice){
    roundResult = 'Oavgjort';
} else if (
    (playerChoice === 'sten' && computerChoice === 'sax') || 
    (playerChoice === 'sax' && computerChoice === 'påse') || 
    (playerChoice === 'påse' && computerChoice === 'sten')  
){
    roundResult = 'Du vinner rundan!';
    playerScore++;
} else {
    roundResult = 'Datorn vinner rundan!';
    computerScore++;
}

updateGame(playerChoice, computerChoice, playerName);
  updateScores();
  checkEndGame();
}

function updateGame(playerChoice, computerChoice, playerName) {
  document.getElementById('player-choice').textContent = `${playerName}s val: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Datorns val: ${computerChoice}`;
  document.getElementById('round-result').textContent = roundResult;
}

function updateScores() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function checkEndGame() {
  if (playerScore === 3 || computerScore === 3) {
    endGame();
  }
}

function endGame() {
  let winner = '';
  if (playerScore > computerScore) {
    winner = 'Du vinner spelet!';
  } else {
    winner = 'Datorn vinner spelet!';
  }
  document.getElementById('winner').textContent = winner;

  disableButtons();
}

function disableButtons() {
  const buttons = document.querySelectorAll('#choices button');
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundResult = '';

  updateScores();
  reset();
  resetWinner();
  enableButtons();
}

function reset() {
  document.getElementById('player-choice').textContent = '';
  document.getElementById('computer-choice').textContent = '';
  document.getElementById('round-result').textContent = roundResult;
}

function resetWinner() {
  document.getElementById('winner').textContent = '';
}

function enableButtons() {
  const buttons = document.querySelectorAll('#choices button');
  buttons.forEach((button) => {
    button.disabled = false;
  });
}