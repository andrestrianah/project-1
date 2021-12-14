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

const limit = 21;

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
let winner = null;
let shuffledDeck;
let stand;
// 3.Cache elements that need to be updated in the htm:

// buttons(hit,replay,double,play,split,etc) , player and computer cards , the chips, the player's hand count,the wining message and the bank.

const coins = document.querySelector(".betCoins");
const 
// 4.add the event listeners for the buttons (hit,replay,double,play again,split,etc)

// 5.call the init function. The purpose of init, is to initialize our state variables for the start of the game, so give the initial values for the init function.

// 6. invoke the render function to transfer all the data that needs to be update on the dom. 

// for the blackjack , you first will need to update the bank and the bet, after that, give the cards for the player and the computer and count the player cards.Then , if the player cards are over 21 or if it is lower to the computers hand(not over 21), computer wins and pop de message for the winner, if the player has a better hand than the computer or if the computer is bust(over 21), pop the message for the player. if both players have the same count, the player get the money back and is a tie.
// if the first two cards of the player are an A's and a ten, player wins unless computer has a blackjack too. 

// also give a function for the split and double option.

// 7. reset the game by updating the new values for the bank and place the cards that were used in the bottom of the deck.

