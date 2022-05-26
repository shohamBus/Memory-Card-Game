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
];

const cards = document.querySelectorAll(".inner");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
let cardsChosen = [];
let cardsWonArr = [];
let lives=document.querySelector("h2");
let counter=5;
lives.innerHTML=`lives: ${counter}`;
//insert emoji to the cards

// cardsArray.sort(() => 0.5 - Math.rendom());

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
function flipCard() {
  this.classList.toggle("flipped");
  cardsChosen.push(this)
  if (cardsChosen.length===2){
    setTimeout(function(){check(cardsChosen)},0.1)
  }
}

//check if match

function check(arr) {
  console.log(arr[0].lastElementChild.innerText)
  if(arr[0].lastElementChild.innerText===arr[1].lastElementChild.innerText){
    let back=document.getElementsByClassName(arr[0].lastElementChild.classList[1])
    back[0].style.background='rgb(171,220,77)';
      back=document.getElementsByClassName(arr[1].lastElementChild.classList[1])
      back[0].style.background='rgb(171,220,77)';
        cardsWonArr.push(arr[0],arr[1]);
      }else{
        arr[0].classList.inner
        arr[0].classList.toggle("flipped");
        arr[1].classList.toggle("flipped");
        counter--;
      }
      cardsChosen=[];
      }



//cards Won

