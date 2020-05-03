$(document).ready(() => {
    var synth = window.speechSynthesis;
    var beginning = true;
    document.onclick = function () { start() };
  
    var wasClicked1 = 0;
    var wasClicked2 = 0;
    var wasClicked3 = 0;
    var wasClicked4 = 0;
  
    var gameClicked1 = 0;
    var gameClicked2 = 0;
    var gameClicked3 = 0;
    var gameClicked4 = 0;

    var pClicked1 = 0;
    var pClicked2 = 0;
    var pClicked3 = 0;
    var pClicked4 = 0;
  
    var lookingFor = false;
    var lookingFor1 = false;
    var lookingFor2 = false;
    var lookingFor3 = false;
    var lookingfor4 = false;
  
    function start() {
      if (beginning) {
        document.getElementById("tapAnywhere").remove();
        document.getElementById("cell1").onclick = function () { clicked1() };
        document.getElementById("cell2").onclick = function () { clicked2() };
        document.getElementById("cell3").onclick = function () { clicked3() };
        document.getElementById("cell4").onclick = function () { clicked4() };
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Let's play -- Count the Beats! In this mode, I will play a note. Then you must play the same note for the number of times that I say. Use the four blocks to play your sounds."))
        console.log("Let's play -- Count the Beats! In this mode, I will play a note. Then you must play the same note for the number of times that I say. Use the four blocks to play your sounds.")
        practice();
        beginning = false;
      }
  
    }
  
    var inPractice = true;
    var playing = false;
  
    function practice() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Let's practice playing the squares to learn what sounds they make!"))
      console.log("Let's practice playing the squares to learn what sounds they make!")
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Click the -- upper -- left -- portion of the screen."))
      console.log("Click the -- upper -- left -- portion of the screen.")
    }
  
    function practice2() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good! Now."))
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Click the -- upper -- right -- portion of the screen."))
      console.log("Good! Now. Click the -- upper -- right -- portion of the screen.")
    }
  
    function practice3() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good! Now."))
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Click the -- lower -- left -- portion of the screen."))
      console.log("Good! Now. Click the -- lower -- left -- portion of the screen.")
  
    }
  
    function practice4() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good! Now."))
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Click the -- lower -- right -- portion of the screen."))
      console.log("Good! Now. Click the -- lower -- right -- portion of the screen.")
  
    }
  
    function finishPractice() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good! Now play around with the sounds as much as you like. When you are ready to begin the game, press the -- upper -- left -- square -- 3 -- times!"))
      console.log("Good! Now play around with the sounds as much as you like. When you are ready to begin the game, press the -- upper -- left -- square -- 3 -- times!")
      inPractice = false;
    }
  
    function playGame() {
      playing = true;
      lookingFor = false;
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Let's play!"))
      console.log("Let's play!")
      var x = 0
      var y = 0
      x = Math.floor(Math.random() * 2) + 1;
      if (x == 1) {
        y = playHigherThan()
      }
      if (x == 2) {
        y = playLowerThan()
      }
      if (x == 3) {
        y = playSameAs()
      }
    }
  
  
  
    function playHigherThan() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Play this sound 5 times:"))
      console.log("Play this sound 5 times:")
      var h = Math.floor(Math.random() * 2) + 1;
      if (h == 1) {
        setTimeout(playC4, 5000);
      }
      if (h == 2) {
        setTimeout(playA4, 5000);
      }
      if (h == 3) {
        setTimeout(playGsharp, 5000);
      }
  
       lookingFor = true;
  
      if (h == 1) {
        lookingFor1 = true;
        lookingFor2 = false;
        lookingFor3 = false;
        lookingfor4 = false;
      }
      if (h == 2) {
        lookingFor1 = false;
        lookingFor2 = true;
        lookingFor3 = false;
        lookingfor4 = false;
      }
      if (h == 3) {
        lookingFor1 = false;
        lookingFor2 = false;
        lookingFor3 = false;
        lookingfor4 = true;
      }
  
  
    }
  
    function playLowerThan() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Play this sound 5 times:"))
      console.log("Play this sound 5 times:")
      var h = Math.floor(Math.random() * 2) + 1;
      if (h == 1) {
        setTimeout(playB5, 5000);
      }
      if (h == 2) {
        setTimeout(playA4, 5000);
      }
      if (h == 3) {
        setTimeout(playGsharp, 5000);
      }
  
       lookingFor = true;
  
      if (h == 1) {
        lookingFor1 = false;
        lookingFor2 = false;
        lookingFor3 = true;
        lookingfor4 = false;
      }
      if (h == 2) {
        lookingFor1 = false;
        lookingFor2 = true;
        lookingFor3 = false;
        lookingfor4 = false;
      }
      if (h == 3) {
        lookingFor1 = false;
        lookingFor2 = false;
        lookingFor3 = false;
        lookingfor4 = true;
      }
  
    }
  
    function playSameAs() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Play this sound 5 times::"))
      console.log("Play this sound 5 times::")
      var h = Math.floor(Math.random() * 2) + 1;
      if (h == 1) {
        setTimeout(playC4, 5000)
      }
      if (h == 2) {
        setTimeout(playA4, 5000)
      }
      if (h == 3) {
        setTimeout(playB5, 5000)
      }
      if (h == 4) {
        setTimeout(playGsharp, 5000)
      }
  
       lookingFor = true;
  
      if (h == 1) {
        lookingFor1 = true;
        lookingFor2 = false;
        lookingFor3 = false;
        lookingfor4 = false;
      }
      if (h == 2) {
        lookingFor1 = false;
        lookingFor2 = true;
        lookingFor3 = false;
        lookingfor4 = false;
      }
      if (h == 3) {
        lookingFor1 = false;
        lookingFor2 = false;
        lookingFor3 = true;
        lookingfor4 = false;
      }
      if (h == 4) {
        lookingFor1 = false;
        lookingFor2 = false;
        lookingFor3 = false;
        lookingfor4 = true;
      }
    }
  
  
    function playGsharp() {
      var context = new AudioContext()
      var o = context.createOscillator()
      var g = context.createGain()
      var frequency = 830.6
      o.frequency.value = frequency
      o.connect(g)
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 1
      )
      console.log("Played G sharp (830)")
    }
  
    function playA4() {
      var context = new AudioContext()
      var o = context.createOscillator()
      var g = context.createGain()
      var frequency = 440.0
      o.frequency.value = frequency
      o.connect(g)
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 1
      )
      console.log("Played A4 (440)")
    }
  
    function playC4() {
      var context = new AudioContext()
      var o = context.createOscillator()
      var g = context.createGain()
      var frequency = 261.6
      o.frequency.value = frequency
      o.connect(g)
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 1
      )
      console.log("Played C4 (261)")
    }
  
    function playB5() {
      var context = new AudioContext()
      var o = context.createOscillator()
      var g = context.createGain()
      var frequency = 987.8
      o.frequency.value = frequency
      o.connect(g)
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 1
      )
      console.log("Played B5 (987)")
    }
  
    function clicked1() {
      playC4()
      gameClicked2 = 0;
      gameClicked3 = 0;
      gameClicked4 = 0;
    //   if(gameClicked1 == 5){
    //       lookingFor=true;
    //   }
    
      if (inPractice == true) {
        wasClicked1 = 0;
        gameClicked1 =0;
        setTimeout(practice2, 1000);
      }
      if (playing == true) {
        gameClicked1 +=1;
        pClicked1 = true;
        pClicked2 = false;
        pClicked3 = false;
        pClicked4 = false;
      }
      if (lookingFor) {
        if (lookingFor1) {
            if(gameClicked1==5){
          setTimeout(goodJob, 2000)
          console.log("Good job!")
          gameClicked1=0;
          setTimeout(playGame, 2000);
        } 
    }
else if(gameClicked1==0) {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance("Not quite, let's try a different sound."))
          setTimeout(playGame, 2000)
        }
      }
      wasClicked1 += 1;
      if (wasClicked1 == 3) {
        setTimeout(playGame, 1000)
      }
    }
  
    function clicked2() {
      playA4()
      wasClicked2 += 1;
      gameClicked1 = 0;
      gameClicked3 = 0;
      gameClicked4 = 0;
    //   if(gameClicked2 == 5){
    //     lookingFor=true;
    // }
   
      wasClicked1 = 0;
      if (inPractice==true) {
        gameClicked2 = 0;
        setTimeout(practice3, 1000);
      }
      if (playing == true) {
        gameClicked2 +=1;
        pClicked2 = true;
        pClicked1 = false;
        pClicked3 = false;
        pClicked4 = false;
      }

      if (lookingFor) {
        if (lookingFor2) {
            if(gameClicked2==5){
          setTimeout(goodJob, 2000)
          console.log("Good job!")
          gameClicked2=0;
          setTimeout(playGame, 2000);
        } 
    }
    else if(gameClicked2==0) {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance("Not quite, let's try a different sound."))
          setTimeout(playGame, 2000)
        }
    }
    
}
  
    function clicked3() {
      playB5()
      wasClicked3 += 1;
      
      gameClicked1 = 0;
      gameClicked2 = 0;
      gameClicked4 = 0;
    //   if(gameClicked3 == 5){
    //     lookingFor=true;
    // }
      wasClicked1 = 0;
      if (inPractice==true) {
        gameClicked3=0;
        setTimeout(practice4, 1000);
      }
      if (playing == true) {
        gameClicked3 +=1;   
        pClicked3 = true;
        pClicked4 = false;
        pClicked1 = false;
        pClicked2 = false;
      }
      if (lookingFor) {
        if (lookingFor3) {
            if(gameClicked3==5){
          setTimeout(goodJob, 2000)
          console.log("Good job!")
          gameClicked3=0;
          setTimeout(playGame, 2000)
        } 
    } else if(gameClicked3==0){
          window.speechSynthesis.speak(new SpeechSynthesisUtterance("Not quite, let's try a different sound."))
          setTimeout(playGame, 2000)
        }
      }
    }
  
    function clicked4() {
      playGsharp()
      wasClicked4 += 1;
      
      gameClicked1 = 0;
      gameClicked2 = 0;
      gameClicked3 = 0;
    //   if(gameClicked4 == 5){
    //     lookingFor=true;
    // }
      wasClicked1 = 0;
      if (inPractice==true) {
        gameClicked4=0;
        setTimeout(finishPractice, 000);
      }
      if (playing == true) {
        gameClicked4 += 1;
        pClicked4 = true;
        pClicked1 = false;
        pClicked2 = false;
        pClicked3 = false;
      }
      if (lookingFor) {
        if (lookingfor4) {
            if(gameClicked4==5){
          setTimeout(goodJob, 2000)
          console.log("Good job!")
          gameClicked4=0;
          setTimeout(playGame, 2000)
        } 
    } else if(gameClicked4==0) {
          window.speechSynthesis.speak(new SpeechSynthesisUtterance("Not quite, let's try a different sound."))
          setTimeout(playGame, 2000)
        }
      }
    }
  
    function goodJob() {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good job!"))
    }
  
  })
