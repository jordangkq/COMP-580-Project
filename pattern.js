$(document).ready(() => {
var synth = window.speechSynthesis;
var beginning = true;

document.onclick = function() {start()}

var wasClicked1 = 0;
var wasClicked2 = 0;
var wasClicked3 = 0;
var wasClicked4 = 0;

var pClicked1 = 0;
var pClicked2 = 0;
var pClicked3 = 0;
var pClicked4 = 0;

var lookingFor = false;
var lookingFor1 = false;
var lookingFor2 = false;
var lookingFor3 = false;
var lookingfor4 = false;

//Practice & Instructions
function start() {
  if (beginning) {
    document.getElementById("tapAnywhere").remove();
    document.getElementById("cell1").onclick = function () { clicked1() };
    document.getElementById("cell2").onclick = function () { clicked2() };
    document.getElementById("cell3").onclick = function () { clicked3() };
    document.getElementById("cell4").onclick = function () { clicked4() };
    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Let's play -- Pattern Recognition! In this mode, I will play a pattern of notes. Then you must repeat the pattern that I played. Use the four blocks to play your patterns. Click the practice button to hear the sounds."))
    console.log("Let's play -- Matching Patterns! In this mode, I will play a pattern of notes. Then you must repeat the pattern that I played. Use the four blocks to play your patterns. Click the practice button to hear the sounds.")
    beginning = false;
  }
}

var inPractice = true;
var playing = false;

document.getElementById("inst").onclick = function () { positionInstructions() };

function positionInstructions() {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("There are 4 cells in the middle of the screen"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("The first cell is in the top left corner"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("the second cell is in the top right corner"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("the third cell is in the bottom left corner"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("the fourth cell is in the bottom right corner"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("Click each cell to hear the sounds"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("When you are ready to play click shuffle"))
  inPractice=false;
}

document.getElementById("cell1").onmouseover = function () { clicked1() };
document.getElementById("cell2").onmouseover = function () { clicked2() };
document.getElementById("cell3").onmouseover = function () { clicked3() };
document.getElementById("cell4").onmouseover = function () { clicked4() };
document.getElementById("shuff").onmouseover = function () { shuffplay() };
document.getElementById("inst").onmouseover = function () { instplay() };
function clicked1() {
  //window.speechSynthesis.speak(new SpeechSynthesisUtterance("Cell 1"))
//   cell1.addEventListener("click", function () {
//     this.removeEventListener('mouseover',mouseoverfunc);
// })
}

function shuffplay() {
   window.speechSynthesis.speak(new SpeechSynthesisUtterance("Shuffle"))
 }
 function instplay() {
 window.speechSynthesis.speak(new SpeechSynthesisUtterance("Practice"))
 }
function clicked2() {
 // window.speechSynthesis.speak(new SpeechSynthesisUtterance("Cell 2"))
}
function clicked3() {
 // window.speechSynthesis.speak(new SpeechSynthesisUtterance("Cell 3"))
}
function clicked4() {
  //window.speechSynthesis.speak(new SpeechSynthesisUtterance("Cell 4"))
}

//Practice Playing Notes
const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
  cell.addEventListener('click',() => playNote(cell))
})


//shuff.addEventListener('click',() => playNote(cell));
// cell.addEventListener("mouseover", help());

function playNote(cell){
  const noteAudio = document.getElementById(cell.dataset.note)
  noteAudio.currentTime = 0;
  noteAudio.play()
  cell.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    cell.classList.remove('active')
  })
  }

  document.getElementById("shuff").onclick = function () { pattern() };


//Play Pattern
let arr = [1,2,3,4];
let arr2 = ["notes/C.mp3","notes/Db.mp3","notes/Eb.mp3","notes/E.mp3"];
let arr3 = ["cell1","cell2","cell3","cell4"];

let arrayShuffle = function(arr){
  let newPos,
    temp;
    for(let i = arr.length-1;i>0;i--){
      newPos = Math.floor(Math.random()*(i+1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return(arr);
};

//Test Array
let newArray = arrayShuffle(arr);

console.log(newArray);

let newArray2 = arrayShuffle(newArray);

console.log(newArray2);

let playArray = arrayShuffle(arr2);
console.log(playArray)

let playArray2 = arrayShuffle(arr3);
console.log(playArray2)


function playPattern(){
  let note=0;
  const noteAudio1 = document.getElementById(cell1.dataset.note);
  const noteAudio2 = document.getElementById(cell2.dataset.note);
  const noteAudio3 = document.getElementById(cell3.dataset.note);
  const noteAudio4 = document.getElementById(cell4.dataset.note);
  // noteAudio1.play();
  let arr4 = [noteAudio1,noteAudio2,noteAudio3,noteAudio4];
  let playarr = arrayShuffle(arr4);
  console.log(playarr)
  for(let i = 0;i<arr4.length-1;i++){
    playarr[i].currentTime = 0;
      note = playarr[i];
      note.play();
  }
  // note.play();
}

// matchPattern(arr){
//   for(let i = 0; i<arr;i++){
//     if(arr[i]==clicked){
//       //go on
//     }
//     else{
//       //say try again
//     }
//   }
// }
const n1 = document.getElementById("cell1");
const n2 = document.getElementById("cell2");
const n3 = document.getElementById("cell3");
const n4 = document.getElementById("cell4");

function pattern(){
  playing = true;
  lookingFor = false;
  // window.speechSynthesis.speak(new SpeechSynthesisUtterance("Lets Play!"))
  // console.log("Let's play!")
  var myVar;
  let myarray = [n1,n2,n3,n4];
  let parr = arrayShuffle(myarray);
  console.log(parr);
  // for(let i = 0;i<parr.length;i++){
  //   playNote(parr[i]);
  //   console.log(parr[i]);
  // }

  //matchPattern function
}

function playGame(){
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("A pattern will play"))
  window.speechSynthesis.speak(new SpeechSynthesisUtterance("Try to match the pattern"))
}

// function playPattern(){
//   let note=0;
//   const noteAudio1 = document.getElementById(cell1.dataset.note);
//   const noteAudio2 = document.getElementById(cell2.dataset.note);
//   const noteAudio3 = document.getElementById(cell3.dataset.note);
//   const noteAudio4 = document.getElementById(cell4.dataset.note);
//   // noteAudio1.play();
//   let arr4 = [cell1,cell2,cell3,cell4];
//   let playarr = arrayShuffle(arr4);
//   console.log(playarr)
//   for(let i = 0;i<arr4.length-1;i++){
//     playarr[i].currentTime = 0;
//       note = playarr[i];
//   }
//   note.play();
// }

// let i = arr4.length-1;i>0;i--
//     function to generate a random number
// function generateRandomNumber() {
//   return Math.floor((Math.random() * 2) + 1);
// }

// function generateRandomNumber() {
//   return Math.floor((Math.random() * 2) + 1);
// }
//     function randomize(array){

//     }

  ///Goal 1 Play the Randomized Pattern:

})
