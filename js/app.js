//worked with Aileen, Zarrina, and Chris
window.onload = function() {
console.log('Game is ready!');

//call necessary elements for race
    var player1 = document.getElementById('player1');
    var player2 = document.getElementById('player2');

    var winner = document.getElementById('winner');

    var racetrack = document.querySelectorAll('racetrack');

//set racers at zero
    let racer1 = 0;
    let racer2 = 0;

    document.getElementById('start').addEventListener('click', startGame);

    function startGame (){
    document.onkeydown = movePlayer;
    }

function movePlayer(event) {
//if key is right arrow move racer1 to the by 10px
   if (event.keyCode === 39) {
    racer1 += 10;
    player1.style.left = racer1 + 'px';
//if key is z move player2 by 10px
  } else if (event.keyCode === 90){
    racer2 += 10;
    player2.style.left = racer2 + 'px';
  }
  declareWinner();
}

//couldn't get this function to work- played around with querying elements locally and globally
//couldn't get result to appear in 'winner' element or in console

function declareWinner() {
    if (document.getElementById('player1').style.left === '700px'){
      //winner is printed in the the result box
      document.getElementById('winner').innerHTML = 'Blue Won!';
} else if (document.getElementById('player2').style.left === '700px'){
      //winner is printed in the the result box
      document.getElementById('winner').innerHTML = 'Orange Won!';
}
}

  document.getElementById('reset').addEventListener('click', resetGame);

    function resetGame (){
      location.reload();
    }
}
