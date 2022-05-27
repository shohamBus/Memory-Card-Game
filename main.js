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

const cards = document.querySelectorAll(".inner");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
let cardsChosen = [];
let cardsWonArr = [];
let counter=10;
let lives=document.querySelector("h2 span");
// lives.innerText=counter;

// if (counter===0){
  //   alert("Game over lets try again")
  //   displayFront()
  // }
  // updateCounter(counter)

  //randomize the array
  
  shuffleArray(cardsArray)
  function shuffleArray(array) {
    array.sort( () => .5 - Math.random() );
  }
  
  //insert emoji to the cards
  
  function displayFront() {
    for (let i = 0; i < cardsArray.length; i++) {
      back[i].innerHTML = cardsArray[i];
    }
  }
  displayFront();
  
  //flip card
  
  for(const card of cards){
    card.addEventListener("click", flipCard);
  }

  console.log(counter);

  function flipCard(counter) {
  this.classList.toggle("flipped");
  cardsChosen.push(this)
  counter--;
  if (cardsChosen.length===2){
    setTimeout(function(){check(cardsChosen)},500)
  }
  return counter
}

//check if match

function check(arr) {
  if(arr[0].lastElementChild.innerText===arr[1].lastElementChild.innerText){
    let back=document.getElementsByClassName(arr[0].lastElementChild.classList[1])
    back[0].style.background='rgb(171,220,77)';
    back=document.getElementsByClassName(arr[1].lastElementChild.classList[1])
    back[0].style.background='rgb(171,220,77)';
    cardsWonArr.push(arr[0],arr[1]);
    // cardsWon(cardsWonArr);
  }else{
    arr.forEach(element => {
      element.classList.toggle("flipped")
    });
  }
  cardsChosen=[];
}

// function cardsWon(arr){
//   for (const item of arr){
//    item = document.getElementsByClassName('inner');
//     item.remove();
//     }
//   }