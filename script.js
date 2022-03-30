//Global Constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 150; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
const winBox = document.querySelectorAll(".none"); //this is used to modify the classes of all boxes

//Global Variables
var pattern = 0; //8 guesses in order to win, randomSequence is called upon start and changes every round
var startPattern = [1, 2, 3, 4, 4, 3, 2, 1]; //displays where the colors are on the boxes
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function randomSequence() {
  var tempPat = [];
  for (let i = 0; i <= 7; i++) {
    tempPat[i] = Math.floor(Math.random() * 4) + 1; //produces random number from 1 to 4
  }
  console.log(tempPat);
  return tempPat;
}

function playStartSequence() {
  //This function plays a start sequence that lets the player know which color each box is
  let delay = nextClueWaitTime;
  console.log("Start sequence initiated");
  console.log("Wait 6 seconds for first clue");
  for (let i = 0; i <= 7; i++) {
    //for loops to display what color each box is
    setTimeout(playSingleClue, delay, startPattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(playClueSequence, 6000); //allows the start sequence to be displayed, waits 6 seconds
}

function startGame() {
  //initialize game variables
  pattern = randomSequence(); //call for sequence generator
  console.log("Game start");
  for (const none of winBox) {
    //makes sure all boxes are reset upon restart
    none.classList.remove("lose", "win");
  }
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  setTimeout(playStartSequence, 500);
}

function stopGame() {
  console.log("Game stop");
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playAllClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function lightButton(btn) {
  //This function is for the starting sequence to display where the color is relative to the boxes
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  //This function is for the starting sequence to clear the box color
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  //This function is for the starting sequence and plays a single box to show to the player
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function displayColor(btn) {
  //this function is for the clue and it illuminates all the boxes with a certain color
  if (btn == 1) {
    //conditional statements to determine which class to add to make all the boxes a certain color
    for (const none of winBox) {
      none.classList.add("red");
    }
  }
  if (btn == 2) {
    for (const none of winBox) {
      none.classList.add("green");
    }
  }
  if (btn == 3) {
    for (const none of winBox) {
      none.classList.add("blue");
    }
  }
  if (btn == 4) {
    for (const none of winBox) {
      none.classList.add("yellow");
    }
  }
}

function clearColor() {
  //This function clears the class that has been assigned to the boxes to make them return to their default color
  for (const none of winBox) {
    none.classList.remove("green", "blue", "red", "yellow");
  }
}

function playAllClue(btn) {
  //This function is for the clue and displays the box color on all boxes and the tone that corresponds to that color
  if (gamePlaying) {
    displayColor(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearColor, clueHoldTime);
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // add game logic here
  if (pattern[guessCounter] == btn) {
    //Correct Guess
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //Game Win
        winGame();
      } else {
        //Pattern correct
        progress++;
        playClueSequence();
      }
    } else {
      //check next guess
      guessCounter++;
    }
  } else {
    //Game lost
    loseGame();
  }
}

function displayWinLoss(val) {
  //takes in parameter to either display win box or loss box
  if (val == 5) {
    for (const none of winBox) {
      //for loop adds class to boxes that denotes a win
      none.classList.add("lose");
    }
  }
  if (val == 6) {
    for (const none of winBox) {
      //for loop adds class to boxes that denotes a loss
      none.classList.add("win");
    }
  }
}

function clearWinLoss() {
  //This function removes class to boxes that denotes a win or loss
  for (const none of winBox) {
    none.classList.remove("lose", "win");
  }
  console.log("Cleared WL");
}

function playWinLoss(val, hold) {
  displayWinLoss(val);
  playTone(val, hold);
  setTimeout(clearWinLoss, hold);
}

function loseGame() {
  var val = 5;
  var hold = 200; //using hold as a parameter to determine how long the note and color is active
  let delay = nextClueWaitTime;
  console.log("Loss Sequence Initiated");
  for (let i = 0; i < 3; i++) {
    if (i == 2) {
      hold = 900; //on the third "beep" the tone is held longer
      setTimeout(playWinLoss, delay, val, hold);
    }
    setTimeout(playWinLoss, delay, val, hold);
    delay += 250;
  }
  setTimeout(stopGame, 2000);
  setTimeout(function () {
    alert("Game Over. You lost.");
  }, 2000);
}

function winGame() {
  var val = 6;
  var hold = 200;
  let delay = nextClueWaitTime;
  console.log("Win Sequence Initiated");
  for (let i = 0; i < 7; i++) {
    setTimeout(playWinLoss, delay, val, hold);
    delay += 250;
    if (i == 6) {
      hold = 1000;
      setTimeout(playWinLoss, delay, val, hold);
    }
  }
  setTimeout(stopGame, 4000);
  setTimeout(function () {
    alert("Game Over. You Won!");
  }, 4000);
}

// Sound Synthesis Functions
const freqMap = {
  1: 800,
  2: 792,
  3: 784,
  4: 776,
  5: 1200, //Freq for loss
  6: 550, //Freq for win
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
