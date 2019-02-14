/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	//creates phrases for use in game
	createPhrases() {
		const phrases = [
			new Phrase('The Office'),
			new Phrase('Thats what she said'),
			new Phrase('Scranton the electric city'),
			new Phrase('Dunder Mifflin'),
			new Phrase('Identity theft is not a joke Jim')
		];

		return phrases
	}

	//begins game by selecting and displaying random phrase
	startGame() {
		document.querySelector("#overlay").style.display = "none";
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	//selects random phrase from phrases property
	getRandomPhrase() {
		const index = Math.round(Math.random() * 4);

		return this.phrases[index];
	}

	//handles game logic depending on letter button passed to it
	handleInteraction(button) {
		button.disabled = true;
		const letter  = button.textContent;

		if(!this.activePhrase.checkLetter(letter)) {
			button.classList.add('wrong');
			this.removeLife();
		} else {
			button.classList.add('chosen');
			this.activePhrase.showMatchedLetter(letter);
			if(this.checkForWin() === true)
				this.gameOver(true);

		}
	}

	//removes a life from scoreboard, if missed === 5 then calls game over
	removeLife() {
		this.missed++;

		if(this.missed < 5) {
			const hearts = document.querySelectorAll("#scoreboard .tries");
			const img = hearts[hearts.length - this.missed].children[0];
			img.src = "images/lostHeart.png";
		}
		else
			this.gameOver(false);
	}

	//checks to see if player revealed entire phrase and returns boolean
	checkForWin() {
		const anyHidden = document.getElementsByClassName("letter hide").length;

		if(!anyHidden) {
			return true;
		} else {
			return false;
		}
	}

	//function that takes in a boolean that determines whether or not the user won the game then displays approprite overlay
	gameOver(gameWon) {
		const overlay = document.querySelector("#overlay");
		overlay.style.display = "block";
		overlay.classList = '';
		const msg = document.querySelector('#game-over-message');
		if(gameWon === false) {
			msg.textContent = "Sorry, better luck next time!";
			overlay.classList.add('lose');
		}
		else {
			msg.textContent = "CONGRATULATIONS! You won! Play again?";
			overlay.classList.add('win');
		}
	}
}