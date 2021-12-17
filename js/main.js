/*1. Defining the constant variables .In the particular case of blackjack,the constants will be the deck (value of the cards and the suits)
,the limit(21),the naturals or blackjack (A's + ten) and the value of the chips that are going to be used for the bet.*/
console.log("is working");

const suits = ["s", "c", "d", "h"];
const ranks = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const masterDeck = buildMasterDeck();
// Also, add the images of each card and some sounds for the game.

// 2.It's time for the state variables, do not set a value right now. 

// Set a variable for the player's hand, the computer's hand , the money that the player has (the bank), the bet, the deck(needs to be shuffled when there is no more cards, the cards that have been dealt and have to be placeit again on the deck, a stand variable and the results of the game (winner) 

// bonus: split variable (if the first two cards of the player are the same, split the cards and play with two hands with the initial amount of the bet for each hand)
let gameDeck;
let playerTotal;
let playerHand = [];
let cpuTotal;
let cpuHand = [];
let money;
let bet;
let stand;
let deal;
let usedCards = [];
// 3.Cache elements that need to be updated in the htm:

// buttons(hit,replay,double,play,split,etc) , player and computer cards , the chips, the player's hand count,the wining message and the bank.

let coinsEl = document.getElementById("betCoins");
let computerHandCon = document.getElementById("cpu-hand");
let playerHandCon = document.getElementById("ply-hand")
let winnerMessage = document.getElementById("winner");
let plyCount= document.getElementById("ply-count");
let betEl =document.getElementById("cashbet");
let cashEl =document.getElementById("cash");
const replayEl = document.getElementById("replay");
const standEl = document.getElementById("stand");
const hitEl = document.getElementById("hit"); 
const resetEl = document.getElementById("reset");
const dealEl = document.getElementById("deal");

// 4.add the event listeners for the buttons (hit,replay,double,play again,split,etc)
coinsEl.addEventListener("click",pushBet);
resetEl.addEventListener("click",pushBet);
dealEl.addEventListener("click",plyTurn);
replayEl.addEventListener("click",replayGame);
<<<<<<< HEAD
standEl.addEventListener("click",cmpTurn);
hitEl.addEventListener("click",plyTurn);
dble.addEventListener("click",doble);
=======
standEl.addEventListener("click",standPlay);
hitEl.addEventListener("click",hitIt);
>>>>>>> main


// 5.call the init function. The purpose of init, is to initialize our state variables for the start of the game, so give the initial values for the init function.
gameDeck = getNewShuffledDeck();

function init(){
   deal = false;
   stand = false;
   bet = 0;
   money = 10000;
   console.log('init working')
   
   render();
 }


function pushBet(e){
  amount = parseInt(e.target.innerText);
  console.log(amount);
  if (money >= amount){
    bet = bet + amount;
    money = money - amount;
    render();
  } else if (e.target.id === "reset" ){
    money = money + bet;
    bet = 0
    render();
  } else if (money === 0 && bet === 0 ){
    winnerMessage.innerHTML="Refresh the page for more money";
  }
}

function plyTurn(e){
  if (e.target.id === "deal" && bet > 0){
  console.log("itsmeagain");
  deal = true;
  if(playerHand.length === 0 && cpuHand.length === 0){
  console.log("where are the cards");
  cpuHand = gameDeck.splice (0,2);
  playerHand = gameDeck.splice (0,2);
    } 
  if (count(playerHand) === 21) {
      cmpTurn();
    }
  } 
  render()
}

function hitIt(e){
  if (e.target.id === "hit"){
    console.log("you hit it")
    playerHand.push(gameDeck.splice(0, 1)[0]);  
  }

  if (count(playerHand) === 21) {
    cmpTurn();
  }
  render();
}

<<<<<<< HEAD
function replayGame(){

}

function plyTurn(e){
  if (e.target.id === "deal"){
  plyPlay = true;
  console.log("itsmeagain");
  if(bet > 0 && playerHand.length === 0 && cpuHand.length === 0){
  console.log("where are the cards");
  cpuHand = gameDeck.splice (0,2);
  playerHand = gameDeck.splice (0,2);
    } else {
      playerHand.push(shuffledDeck.splice(0, 1)[0]);
    }
  if (checkTotal(playerHand) === limit) {
      dealerPlay();
    }
  } 
  render()
=======
function standPlay(e){
  if (e.target.id === "stand"){
    stand = true;
    console.log("stand works")
    cmpTurn()
  }
>>>>>>> main
}

function cmpTurn(){
  while (count(cpuHand) < 17){
    cpuHand.push(gameDeck.splice(0,1)[0])
  }

render()
}


<<<<<<< HEAD
=======

function count(cards) {

  let total = 0;
  let hasAce = [];
  cards.forEach(function (item) {
    total = total + item.value;
    if (item.value === 11) {
      hasAce.push(true);
    }if(playerTotal >= 21){
      stand = true;
    }
  });
  while (total > 21 && hasAce.length) {
    total -= 10;
    hasAce.pop();
  }
  return total;
}
>>>>>>> main
// 6. invoke the render function to transfer all the data that needs to be update on the dom. 
// for the blackjack , you first will need to update the bank and the bet, after that, give the cards for the player and the computer and count the player cards.Then , if the player cards are over 21 or if it is lower to the computers hand(not over 21), computer wins and pop de message for the winner, if the player has a better hand than the computer or if the computer is bust(over 21), pop the message for the player. if both players have the same count, the player get the money back and is a tie.
// if the first two cards of the player are an A's and a ten, player wins unless computer has a blackjack too. 
function render(){
  
  betEl.innerHTML = bet;
  cashEl.innerHTML = money;
  replayEl.style.visibility = "hidden";
  standEl.style.visibility = "hidden";
  hitEl.style.visibility = "hidden";

  playerHandCon.innerHTML = "";
  computerHandCon.innerHTML = "";  
  plyCount.innerHTML="";
  if(bet === 0 && playerHand.length === 0 && cpuHand.length === 0){
    winnerMessage.innerHTML = "CLICK ON THE CHIPS TO START THE GAME."
  }else if (bet > 0 && playerHand.length === 0 && cpuHand.length === 0){
    winnerMessage.innerHTML = "";
  } else if ( bet > 0 && playerHand.length >= 2 && cpuHand.length >=2) {
    standEl.style.visibility = "visible";
    hitEl.style.visibility = "visible";
<<<<<<< HEAD
  } else if(playerHand.length === 2){
     dble.style.visibility = "visible";
  } 



=======
    resetEl.style.visibility = "hidden";
    dealEl.style.visibility = "hidden";

    renderDeckInContainer(playerHand, playerHandCon)
    renderDeckInContainer(cpuHand,computerHandCon)
  } if (playerHand.length > 0 && cpuHand.length > 0) {
    playerTotal = count(playerHand);
    cpuTotal = count(cpuHand);
    plyCount.innerHTML = "PLAYER HAND: " + playerTotal;
  } if (deal){
     coinsEl.removeEventListener("click",pushBet);
  }  if (stand){
      if(playerTotal === 21 && playerHand.length === 2){
        winnerMessage.innerHTML = "BLACKJACK!!! PLAYER WINS";
        money = money + bet * 3;
    } else if(cpuTotal === 21 && cpuHand.length === 2){
      winnerMessage.innerHTML = "BLACKJACK!!! DEALER WINS";
    }else if (playerTotal <= 21 && cpuTotal > 21){
        winnerMessage.innerHTML="DEALER BUSTED, PLAYER WINS.";
        money = money + bet * 2;
    } else if (playerTotal > 21 ){
        winnerMessage.innerHTML = "YOU'RE BUSTED";
    } else if (cpuTotal <=21 && cpuTotal > playerTotal && cpuHand.length >= 2){
        winnerMessage.innerHTML = "THE DEALER HAND IS " + cpuTotal +" AND THE PLAYER HAND IS "+ playerTotal +". DEALER WINS.";
    } else if (playerTotal <=21 && playerTotal >cpuTotal && playerHand.length >= 2){
        money = money + bet * 2;
        winnerMessage.innerHTML = "THE DEALER HAND IS " + cpuTotal +" AND THE PLAYER HAND IS "+ playerTotal +". PLAYER WINS.";
    } else if(cpuTotal === playerTotal  && playerHand.length >= 2){
        money = money + bet;
        winnerMessage.innerHTML = "IT IS A TIE, YOU GET YOUR MONEY BACK";
    } 
    replayEl.style.visibility = "visible";
    standEl.style.visibility = "hidden";
    hitEl.style.visibility = "hidden";
    
  }
>>>>>>> main
}

// 7. reset the game by updating the new values for the bank and place the cards that were used in the bottom of the deck.
function replayGame(e){
  if (e.target.id === "replay"){
    coinsEl.addEventListener("click",pushBet);
    replayEl.style.visibility = "hidden";
    resetEl.style.visibility = "visible";
    dealEl.style.visibility = "visible";
    bet = 0;
    deal = false;
    stand = false;
    playerHandCon.innerHTML = "";
    computerHandCon.innerHTML = "";
    winnerMessage.innerHTML="";
    usedCards = playerHand.concat(cpuHand);
    usedCards.forEach((card) => {
      gameDeck.push(card);
    });
    playerHand =[];
    cpuHand = [];
    usedCards = [];
    
    render();
  }
  
}





function getNewShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  const tempDeck = [...masterDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  let cardsHtml = '';
  deck.forEach(function(card) {
    cardsHtml += `<div class="card ${card.face} small"></div>`;
  });
  // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
  // const cardsHtml = deck.reduce(function(html, card) {
  //   return html + `<div class="card ${card.face}"></div>`;
  // }, '');
  container.innerHTML = cardsHtml;

  if (deck === cpuHand && cpuHand.length <= 2 ) {
    container.firstChild.classList.add("back-blue");
  }
  if (stand) {
    container.firstChild.classList.remove("back-blue");
  }
}

function buildMasterDeck() {
  const deck = [];
  // Use nested forEach to generate card objects
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // The 'face' property maps to the library's CSS classes for cards
        face: `${suit}${rank}`,
        // Setting the 'value' property for game of blackjack, not war
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

init();



// also give a function for the split and double option.


