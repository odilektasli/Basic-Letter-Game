var h1 = document.createElement("h1");
h1.setAttribute("id", "genereted-random-letter");
var h2 = document.createElement("h2");
var ScoreH2 = document.createElement("h2");
h2.setAttribute("id", "js-score");
ScoreH2.setAttribute("id", "current-score");
var currentScore = 0;
var scoreText = document.createTextNode("Score:" + " ");
h2.appendChild(scoreText);
document.getElementById("score-text").appendChild(h2);

initializeScore();

function initializeScore() {
  if (currentScore == 0) {
    var Score = document.createTextNode(currentScore);
    ScoreH2.appendChild(Score);
    document.getElementById("score").appendChild(ScoreH2);
  } else {
    clearScore();
    currentScore = 0;
    var Score = document.createTextNode(currentScore);
    ScoreH2.appendChild(Score);
    document.getElementById("score").appendChild(ScoreH2);
  }
}

function updateScore(newScore) {
  var Score = document.createTextNode(newScore);
  ScoreH2.appendChild(Score);
  document.getElementById("score").appendChild(ScoreH2);
}
function clearScore() {
  const dummyScore = "";
  document.getElementById("current-score").innerHTML = dummyScore;
}
function doWhichKey(e) {
  e = e || window.event;
  let charCode = e.keyCode || e.which;
  return String.fromCharCode(charCode).toUpperCase();
}

function generateRandomLetter() {
  const alphabet = "QWERTYUIOPĞÜASDFGHJKLŞZXCVBNMÖÇ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function writeGeneratedLetter(letter) {
  var generatedLatter = document.createTextNode(letter);
  h1.appendChild(generatedLatter);
  document.getElementById("random-letter").appendChild(h1);
}

function clearH1() {
  const dummyString = "";
  document.getElementById("genereted-random-letter").innerHTML = dummyString;
}

var generateRandLetter = generateRandomLetter();
writeGeneratedLetter(generateRandLetter);

window.addEventListener(
  "keypress",
  function (e) {
    var pressedKey = doWhichKey(e);
    if (pressedKey === generateRandLetter) {
      clearH1();
      clearScore();
      updateScore(++currentScore);
      generateRandLetter = generateRandomLetter();
      writeGeneratedLetter(generateRandLetter);
    } else {
      alert("YOU PRESSED WRONG LETTER!!");
      initializeScore();
    }
  },
  false
);
