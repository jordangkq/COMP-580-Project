$(document).ready(() => {
  var synth = window.speechSynthesis;
  document.onclick = function () { start() };
  document.getElementById("tapAnywhere").onmouseover = function () { voiceTap() };

  function voiceTap(){
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Tap anywhere to get started"))
    console.log("Tap anywhere to get started")
  }
  
  function start() {
    document.getElementById("tapAnywhere").remove();
    document.getElementById("cell1").onclick = function () { clicked1() };
    document.getElementById("cell2").onclick = function () { clicked2() };
    
    document.getElementById("cell1").onmouseenter = function () { playMouseSound() };
    document.getElementById("cell2").onmouseenter = function () { playMouseSound() };

    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hello! Welcome to our game! There are two modes you can play: Tap the left half of the screen to play -- Count the Beats --! Tap the right side of the screen to play -- Making Comparisons!"))
  }

  function clicked1() {
    location.href = "PatternRecognition.html";
  }
  function clicked2() {
    location.href = "MakingComparisons.html";
  }

})
