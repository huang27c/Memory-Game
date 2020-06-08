document.addEventListener('DOMContentLoaded', () => {

	//card options
	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
	]

	cardArray.sort(() => 0.5 - Math.random())

	//create game board
	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	const attempsDisplay = document.querySelector('#attemps')
	var attempsCount = 0
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []

	function createBoard(){
		for(let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('data-id', i)
			card.setAttribute('status', 'unflipped')
			//when card is clicked, invoke flipcard function
			card.addEventListener('click', flipcard)
			grid.appendChild(card)
		}
	}

	//check for matches
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if(cardsChosen[0] === cardsChosen[1]){
			alert('You found a match')
			//remove the cards
			cards[optionOneId].setAttribute('src', 'images/white.png')
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cardsWon.push(cardsChosen)
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			cards[optionOneId].setAttribute('status', 'unflipped')
			cards[optionTwoId].setAttribute('status', 'unflipped')
			alert('Wrong match!')
		}

		attempsCount += 1
		attempsDisplay.textContent = attempsCount

		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length == cardArray.length/2){
			resultDisplay.textContent = "You WON!"
		}
	}

	//flight cards
	function flipcard(){
		var cardId = this.getAttribute('data-id')

		if(cardsChosenId.length === 1 && cardsChosenId[0] === cardId){
			alert('Please choose a different card.')
		} else if(this.getAttribute('status') === 'flipped'){
			alert('You have cleared this card!')
		}else{
			cardsChosen.push(cardArray[cardId].name)
			cardsChosenId.push(cardId)
			this.setAttribute('src', cardArray[cardId].img)
			this.setAttribute('status', 'flipped')
			if(cardsChosen.length === 2){
				//give us some buffer time
				setTimeout(checkForMatch, 500)
			}
		}
	}

	createBoard()
})











