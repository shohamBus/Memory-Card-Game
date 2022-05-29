const cardsArray = [
  "&#128525;",
  "&#128525;",
  "&#128561;",
  "&#128561;",
  "&#128564;",
  "&#128564;",
  "&#128520;",
  "&#128520;",
  "&#128545;",
  "&#128545;",
  "&#129313;",
  "&#129313;",
  "&#129296;",
  "&#129296;",
  "&#129323;",
  "&#129323;",
  "&#129314;",
  "&#129314;",
  "&#128169;",
  "&#128169;",
];

//Disclaimer varibles

const cards = document.querySelectorAll(".inner");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const lives = document.querySelector(".attempts");
let counter = 10;
let time = 60;
lives.textContent = counter;
const timer = document.querySelector(".time");
timer.textContent = time;
let myInterval;
let cardsChosen = [];
let cardsWonArr = [];


//randomize the array

shuffleArray();
function shuffleArray() {
  cardsArray.sort(() => 0.5 - Math.random());
}

//insert emoji to the cards

function displayFront() {
  for (let i = 0; i < cardsArray.length; i++) {
    back[i].innerHTML = cardsArray[i];
    back[i].classList.remove("foundCard");
    cards[i].style.pointerEvents = "all";
    cards[i].classList.remove("flipped");
  }
}
displayFront();

//flip card

for (const card of cards) {
  card.addEventListener("click", flipCard);
}

//start the timer

function flipCard() {
  if (!myInterval) {
    myInterval = setInterval(() => {
      time--;
      timer.textContent = time;
      if (time === -1) {
        alert("Game over lets try again");
        newGame();
      }
    }, 1000);
  }
  this.classList.toggle("flipped");
  cardsChosen.push(this);
  this.style.pointerEvents = "none"
  if (cardsChosen.length === 2) {
    setTimeout(function () {
      check(cardsChosen);
    }, 500);
  }
}

//check if match

function check(arr) {
  if (arr[0].lastElementChild.innerText === arr[1].lastElementChild.innerText) {
    let back = document.getElementsByClassName(
      arr[0].lastElementChild.classList[1]
      );
      back[0].classList.add("foundCard");
      back = document.getElementsByClassName(
        arr[1].lastElementChild.classList[1]
        );
        back[0].classList.add("foundCard");
        cardsWonArr.push(arr[0], arr[1]);
        
        cardsWonArr.forEach((element) => {
          element.style.pointerEvents = "none";
        });
        
    // no match flip again one less live
  } else {
    arr.forEach((element) => {
      element.classList.toggle("flipped");
      element.style.pointerEvents = "all"
    });
    counter--;
    lives.textContent = counter;
  }
  cardsChosen = [];
  
  // if the live's end-refresh the game
  
  if (counter === 0) {
    alert("Game over lets try again");
    newGame();
  } else if (cardsWonArr.length === 20) {
    alert("Congratulations! You managed to finish the game");
    newGame();
  }
}

//new game

function newGame() {
  clearInterval(myInterval);
  myInterval=null;
  time = 60;
  timer.textContent = time;
  counter = 10;
  lives.textContent = counter;
  shuffleArray();
  displayFront();
}
