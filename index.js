
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
let humanScore = 0
let computerScore = 0

playRound(humanChoice,computerChoice);

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3)
  switch(choice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS"
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors?")
  return choice.toUpperCase();
}

function playRound(humanChoice,computerChoice) {
  let win = false;

  if (humanChoice == "ROCK") {
    if (computerChoice == "PAPER") {
      computerScore++;
    }
    else if (computerChoice == "SCISSORS") {
      humanScore++;
      win = true;
    }
  } else if (humanChoice == "PAPER") {
    if (computerChoice == "SCISSORS") {
      computerChoice++;
    }
    else if (computerChoice == "ROCK") {
      humanChoice++;
      win = true;
    }
  } else if (humanChoice == "SCISSORS") {
    if (computerChoice == "ROCK") {
      computerChoice++;
    }
    else if (computerChoice == "PAPER") {
      humanChoice++;
      win = true
    }
  } else {
    console.log("It's a tie!")
    return
  }
  
  win ? console.log(`You win! ${humanChoice} beats ${computerChoice}`) : console.log(`You lose! ${computerChoice} beats ${humanChoice}`)

}