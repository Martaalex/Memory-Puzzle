const cards = ["bird1.png", "bird2.png", "bird3.png", "bird1.png", "bird2.png", "bird3.png",
  "bird4.png", "bird5.png", "bird5.png", "bird6.png", "bird4.png", "bird6.png"];

var oneVisible = false;
var lock = false;
var visible_nr;
var pairsLeft = 6;
var score = 0;
var moves = 0;

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');

const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const c11 = document.getElementById('c11');

c0.addEventListener('click', () => { revealCard(0) });
c1.addEventListener('click', () => { revealCard(1) });
c2.addEventListener('click', () => { revealCard(2) });
c3.addEventListener('click', () => { revealCard(3) });

c4.addEventListener('click', () => { revealCard(4) });
c5.addEventListener('click', () => { revealCard(5) });
c6.addEventListener('click', () => { revealCard(6) });
c7.addEventListener('click', () => { revealCard(7) });

c8.addEventListener('click', () => { revealCard(8) });
c9.addEventListener('click', () => { revealCard(9) });
c10.addEventListener('click', () => { revealCard(10) });
c11.addEventListener('click', () => { revealCard(11) });



function revealCard(nr) {

  if (document.getElementById(`c${nr}`).disabled === false && lock === false) {
    lock = true;

    var imagePath = "url(img/" + cards[nr] + ")";

    document.getElementById(`c${nr}`).style.backgroundImage = imagePath;
    document.getElementById(`c${nr}`).classList.add("btnA");
    document.getElementById(`c${nr}`).classList.remove("btn");


    if (oneVisible === false) {
      //first card
      visible_nr = nr;
      oneVisible = true;

      lock = false

    } else {

      //second card

      if (cards[visible_nr] === cards[nr]) {
        {
          //console.log("pair");

          setTimeout(function () { matchedCards(nr, visible_nr) }, 750);

        }
        score = score + 20;
        const scoreTable = document.getElementById('score');
        scoreTable.textContent = `Score :  ${score} `;

      } else {
        //console.log('mismatched')

        setTimeout(function () { flipBack(nr, visible_nr) }, 1000);
      }

      moves++;
      const movesTable = document.getElementById('moves');
      movesTable.textContent = `Moves :  ${moves} `;

      oneVisible = false;
    }
  }
};
function matchedCards(nr1, nr2) {
  document.getElementById(`c${nr1}`).setAttribute('disabled', true);
  document.getElementById(`c${nr2}`).setAttribute('disabled', true);

  pairsLeft--;

  gameover();
  lock = false;
}

function flipBack(nr1, nr2) {

  document.getElementById(`c${nr1}`).style.backgroundImage = 'url(img/card.png)';
  document.getElementById(`c${nr1}`).classList.add("btnA");
  document.getElementById(`c${nr1}`).classList.remove("btn");

  document.getElementById(`c${nr2}`).style.backgroundImage = 'url(img/card.png)';
  document.getElementById(`c${nr2}`).classList.add("btnA");
  document.getElementById(`c${nr2}`).classList.remove("btn");

  lock = false;
}

function gameover() {
  if (pairsLeft === 0) {

    document.getElementById('board').innerHTML = `<h1>YOU WIN!</h1> 
    <span>Your score: ${score} </span></br>
    <span>moves: ${moves}</span>`
    // console.log('you win')
  }
}