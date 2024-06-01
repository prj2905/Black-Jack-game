
let cards=[]
let firstCard,secondCard
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")

let player = {
    name: "Player1",
    chips: 145
}

let playerEl=document.getElementById("player-el")
playerEl.textContent= player.name + ": $" + player.chips

function startGame(){
    isAlive=true
     firstCard = getRandomCard()
     secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard 

    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent="Sum: " + sum   
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i] + " "
    }
}

function newCard(){
   if(isAlive && !hasBlackJack){
     messageEl.textContent="Drawing a new card from the deck!"
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
   }
}

function getRandomCard(){
    let random= Math.floor(Math.random()*13)+1
    if(random==1){
        return 11
    }
    else if(random>=11){
        return 10
    }
    else{
        return random
    }
}