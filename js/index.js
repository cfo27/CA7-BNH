const choices = ["Bear", "Ninja", "Hunter"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result= "";

  if(playerChoice === computerChoice){
    result = "Tie Game";
  }
  else{
    switch(playerChoice){
      case "Bear":
        result = (computerChoice === "Ninja") ? "Player Wins!" : "Computer Loses!";
        break;
      case "Ninja":
        result = (computerChoice === "Hunter") ? "Player Wins!" : "Computer Loses!";
        break;
      case "Hunter":
        result = (computerChoice === "Bear") ? "Player Wins!" : "Computer Loses!";
        break;
    }
  }
  
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
}