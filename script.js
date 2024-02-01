let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let pcScore = parseInt(localStorage.getItem("pcScore")) || 0;

document.getElementById("user-score").textContent = `${userScore}`;
document.getElementById("pc-score").textContent = `${pcScore}`;

function play(userChoice) {
  const choices = ["stone", "paper", "scissors"];
  const pcChoice = choices[Math.floor(Math.random() * 3)];

  const allChoices = document.querySelectorAll(".choice");
  allChoices.forEach(choice => {
    choice.style.display = "none";
  });

  const allLines = document.querySelectorAll(".hr-line, .rt-line-1, .rt-line-2");
  allLines.forEach(line => {
    line.style.display = "none";
  });

  const userImg = document.querySelector(`.choice.${userChoice}`);
  userImg.style.display = "grid";
  userImg.style.top = "50px";
  userImg.style.left = "-300px";

  
  const pcImg = document.querySelector(`.choice.${pcChoice}`);
  pcImg.style.display = "grid";
  pcImg.style.top = "50px";
  pcImg.style.left = "300px";
  

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; 

    setTimeout(() => {
      const result = getResult(userChoice, pcChoice);
      updateScore(result);
      displayResult(result, pcChoice);
    }, 0); 
    
    const playAgainButton = document.getElementById("play-again");
    playAgainButton.style.display = "block";

  }

  function resetGame() {
    // Reload the page
    window.location.reload();
  }
  

function getResult(userChoice, pcChoice) {
  if (userChoice === pcChoice) {
    return "tie";
  } else if (
    (userChoice === "stone" && pcChoice === "scissors") ||
    (userChoice === "paper" && pcChoice === "stone") ||
    (userChoice === "scissors" && pcChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScore(result) {
  if (result === "win") {
    userScore++;
  } else if (result === "lose") {
    pcScore++;
  }
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("pcScore", pcScore);
  document.getElementById("user-score").textContent = `${userScore}`;
  document.getElementById("pc-score").textContent = `${pcScore}`;
}

function displayResult(result, pcChoice) {
  const resultDiv = document.getElementById("result");
  if (result === "tie") {
    resultDiv.innerHTML = `<span class="result-line1">TIE UP</span>`;
    resultDiv.classList.add("tie"); 
  } else if (result === "win") {
    resultDiv.innerHTML = `<span class="result-line1">YOU WIN</span><br><span class="result-line2">AGAINST PC</span>`;
    resultDiv.classList.add("win"); 
    document.getElementById("next-btn").style.display = "block";
    updateButtonPositions('win');
  } else {
    resultDiv.innerHTML = `<span class="result-line1">YOU LOST</span><br><span class="result-line2">AGAINST PC</span>`;
    resultDiv.classList.add("lose"); 
  }
}


var button = document.getElementById('rules-btn'); 

button.onclick = function() {
    var div = document.getElementById('rules-container');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

function closeRulesContainer() {
  document.getElementById("rules-container").style.display = "none";
}

function updateButtonPositions(outcome) {
  const rulesBtn = document.getElementById('rules-btn');
  const nextBtn = document.getElementById('next-btn');

  if (outcome === 'win') {
    // If the player wins, adjust the positions of the buttons
    rulesBtn.style.right = '150px';
    nextBtn.style.right = '20px';
  } else {
    // Reset the positions to default values
    rulesBtn.style.right = '20px';
    nextBtn.style.right = '150px';
  }
}

function next() {
  window.location.href = "next_page.html";
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the rules container element
  const rulesContainer = document.querySelector('.rules-container');

  // Add the "open" class to the rules container to display it by default
  rulesContainer.classList.add('open');
});
