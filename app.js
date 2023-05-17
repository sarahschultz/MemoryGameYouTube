const cardArray = [
{
    name: "fries",
    img: "images/fries.jpg",
},
{
    name: "burger",
    img: "images/burger.jpg",
},
{
    name: "hotdog",
    img: "images/hotdog.jpg",
},
{
    name: "ice-cream",
    img: "images/icecream.jpg",
},
{
    name: "pizza",
    img: "images/pizza.jpg",
},
{
    name: "milk-shake",
    img: "images/milkshake.jpg",
},
{
    name: "fries",
    img: "images/fries.jpg",
},
{
    name: "burger",
    img: "images/burger.jpg",
},
{
    name: "hotdog",
    img: "images/hotdog.jpg",
},
{
    name: "ice-cream",
    img: "images/icecream.jpg",
},
{
    name: "pizza",
    img: "images/pizza.jpg",
},
{
    name: "milk-shake",
    img: "images/milkshake.jpg",
},
]

//nice way to compare two values and sorts through it, checking if smaller than 0.5 or larger than 0.5
cardArray.sort(() => 0.5 - Math.random())
// console.log(cardArray)

const gridDisplay = document.querySelector("#grid") // console.log(gridDisplay)
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        //which is 10 items from index 0
        const cards = document.createElement("img")
        cards.setAttribute("src", "images/cardback.jpg")
        cards.setAttribute("data-id", i)
        cards.addEventListener("click", flipCard)
        gridDisplay.append(cards)
    }
}
createBoard()

function checkMatch () {
    const cards = document.querySelectorAll("#grid img")//need to search every card on the grid
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log("Check for match!")
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "images/white blank.jpg")
        cards[optionTwoId].setAttribute("src", "images/white blank.jpg")
        alert("You have clicked the same image!")
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
    cards[optionOneId].setAttribute("src", "images/white blank.jpg")
    cards[optionTwoId].setAttribute("src", "images/white blank.jpg")
    cards[optionOneId].removeEventListener("click", flipCard)
    cards[optionTwoId].removeEventListener("click", flipCard)
    cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/cardback.jpg")
        cards[optionTwoId].setAttribute("src", "images/cardback.jpg")
        alert ("Sorry, try again!")
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) [
        resultDisplay.textContent = "Congratulations! You found them all!"
    ]
}

function flipCard () {
    const cardId = this.getAttribute("data-id") // console.log(cardArray[cardId]) // // console.log(cardArray[cardId].name) will show the name of the card, like pizza, hotdog, etc
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute("src", cardArray[cardId].img)//also want to add the image when we flip the card
    //now our conditional
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 400)
    }
}

