playGame()

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3)
  console.log(choice)
  switch(choice) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS"; //TODO: NaN?
    default:
      return 0;
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors?")
  return choice.toUpperCase();
}

function playGame() {
  let humanScore = 0
  let computerScore = 0

  for(let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
  }

  function playRound(humanChoice,computerChoice) {
    let win = false;
    let tie = false;

    switch(humanChoice) {
      case("ROCK"):
        if (computerChoice == "PAPER") { 
          computerScore++; 
        }
        else if (computerChoice == "SCISSORS") {
          humanScore++;
          win = true;
        }
        else { tie = true }
        break;
      case("PAPER"):
        if (computerChoice == "SCISSORS") {
          computerChoice++;
        }
        else if (computerChoice == "ROCK") {
          humanChoice++;
          win = true;
        }
        else { tie = true }
        break;
      case("SCISSORS") :
        if (computerChoice == "ROCK") {
          computerChoice++;
        }
        else if (computerChoice == "PAPER") {
          humanChoice++;
          win = true
        }
        else { tie = true }
        break;
    }
  
    if (tie) { 
      console.log("It's a tie!") 
    } else {
      win ? console.log(`You win! ${humanChoice} beats ${computerChoice}`) : console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
  
  }

  if (humanScore > computerScore) {
    console.log("You've won the game!")
  } else {
    console.log("Game Over. Try again next time!")
  }

}