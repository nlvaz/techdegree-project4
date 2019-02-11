/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	//displays phrase on game board
	addPhraseToDisplay() {
		const numOfChars = this.phrase.length;
		const phraseDiv = document.querySelector("#phrase ul");

		for(let i = 0; i < numOfChars; i++) {
			const li = document.createElement('li');
			if(/[a-z]/.test(this.phrase[i])) {
				li.classList.add("hide");
				li.classList.add("letter");
				li.classList.add(this.phrase[i]);
				li.textContent = this.phrase[i];
				phraseDiv.appendChild(li);
			}
			else {
				li.classList.add("hide");
				li.classList.add("space");
				li.textContent = " ";
				phraseDiv.appendChild(li);
			}
		}
	}

	//checks if letter is in phrase
	checkLetter(letter) {
		if(this.phrase.includes(letter))
			return true;
		else
			return false
	}

	//reveals letter(s) on the board that matchs player selection
	showMatchedLetter(letter) {
		if(this.checkLetter(letter)) {
			const getLetter = document.querySelectorAll("#phrase ." + letter);
			for(let i = 0; i < getLetter.length; i++) {
				getLetter[i].classList.remove("hide");
				getLetter[i].classList.add("show");
			}
		}
	}
}