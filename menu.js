$(document).ready(() => {
  var synth = window.speechSynthesis;
  document.onclick = function () { start() };
  function start() {
    document.getElementById("tapAnywhere").remove();
    document.getElementById("cell1").onclick = function () { clicked1() };
    document.getElementById("cell2").onclick = function () { clicked2() };

    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Hello! Welcome to our game! There are two modes you can play: Tap the left half of the screen to play -- Count the Beats --! Tap the right side of the screen to play -- Making Comparisons!"))
  }

  function clicked1() {
    location.href = "PatternRecognition.html";
  }
  function clicked2() {
    location.href = "MakingComparisons.html";
  }

})
