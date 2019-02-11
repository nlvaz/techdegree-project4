/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	/**
	* Creates phrases for use in game
	* @return {array} An array of phrases that could be used in the game
	*/
	createPhrases() {
		const phrases = [
			new Phrase('Bears Beets Battlestar Galactica'),
			new Phrase('Thats what she said'),
			new Phrase('The people persons paper people'),
			new Phrase('Dunder Mifflin'),
			new Phrase('Identity theft is not a joke Jim')
		];

		return phrases
	}

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

	handleInteraction() {
		//checks to see if button clicked matches anything in phrase
			//disable selected letters onscreen keyboard button
			//if letter not included in phrase
				//add wrong css class to selected letter's keyboard button
				//call removeLife() method
			//if letter included in phrase
				//add chosen css class to keyboard button
				//call showMatchedLetter() method on phrase
				//call checkForWin() method
					//if returns true call gameOver()
	}

	//removes a life from scoreboard, if missed === 5 then calls game over
	removeLife() {
		this.missed++;

		if(missed < 5) {
			const hearts = document.querySelectorAll("#scoreboard .tries");
			const img = hearts[hearts.length - this.missed].children[0];
			img.src = "images/lostHeart.png";
		}
		else
			this.gameOver(false);
	}

	//checks to see if player revealed entire phrase and returns boolean
	checkForWin() {
		const allLetters = document.querySelectorAll("#phrase li .letter");
		let check = 0;

		for(let l = 0; l < allLetters.length; l++)
			if(allLetters[l].classList.contains('show'))
				check++;

		if(check === allLetters.length)
			return true;
		else
			return false;
	}

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