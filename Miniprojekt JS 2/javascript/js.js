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

document.getElementById('round-result').textContent = roundResult;
document.getElementById('player-score').textContent = playerScore;
document.getElementById('computer-score').textContent = computerScore;

if(playerScore === 3 || computerScore === 3){
    endGame();
}
}

function endGame(){
let winner = '';
if(playerScore > computerScore){
    winner = 'Du vinner spelet!';
} else {
    winner = 'Datorn vinner spelet!';
}
document.getElementById('winner').textContent = winner;

const buttons = document.querySelectorAll('#choices button');
buttons.forEach(button =>{
    button.disabled = true;
});

document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult = '';

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('round-result').textContent = roundResult;
  document.getElementById('winner').textContent = '';

  document.getElementById('player-choice').textContent = '';
  document.getElementById('computer-choice').textContent = '';
  document.getElementById('restart-button').style.display = 'none';

const buttons = document.querySelectorAll('#choices button');
buttons.forEach(button => {
    button.disabled = false;
});

}