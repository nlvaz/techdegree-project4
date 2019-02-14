/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector("#btn__reset");
const phraseDiv = document.querySelector('#phrase ul');
const keyrows = document.querySelectorAll('#qwerty .keyrow');
const hearts = document.querySelectorAll("#scoreboard .tries");
const buttonKeys = document.querySelectorAll(".key");

startButton.addEventListener('click', () => {
	if(phraseDiv.children.length !== 0) {
		for(let i = phraseDiv.children.length - 1; i >= 0; i--) {
			phraseDiv.children[i].remove();
		}

		for(let k = 0; k < keyrows.length; k++) {
			const keysInRow = keyrows[k].children;
			for(let l = 0; l < keysInRow.length; l++) {
				if(keysInRow[l].classList.contains('wrong'))
					keysInRow[l].classList.remove('wrong');
				else if(keysInRow[l].classList.contains('chosen'))
					keysInRow[l].classList.remove('chosen');
			}
		}

		for(let h = 0; h < hearts.length; h++) {
			hearts[h].children[0].src = "images/liveHeart.png";
		}
	}
	game = new Game();
	game.startGame();
});

//eventListener for all onscreen letters when clicked
document.addEventListener('click', event => {
	if(event.target.matches('.key')) {
		game.handleInteraction(event.target);
	};
});

//eventListener for onscreen letters when matching letter clicked on keyboard
document.addEventListener('keypress', event => {
	const letter = String.fromCharCode(event.keyCode).toLowerCase();
	let handlerButton;

	if(/[a-z]/.test(letter)) {
		for(let i = 0; i < buttonKeys.length; i++) {
			const current = buttonKeys[i];

			if(current.textContent === letter)
				handlerButton = current;
		}

		game.handleInteraction(handlerButton);
	}
});





