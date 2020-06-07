import { hero } from './hero.js';
import { enemyLeft, enemyBottom, enemyInterval } from './enemy.js';

let surviveTimer = 60;
const countDown = function() {
	const timer = document.querySelector('.timer');
	surviveTimer--;
	timer.innerHTML = surviveTimer;
	if (surviveTimer < 10) {
		timer.style.color = 'red';
	}
	if (surviveTimer === 0) {
		clearInterval(timerInterval);
	}
};

const timerInterval = setInterval(countDown, 1000);

const showRestartBtn = function() {
	const restartBtn = document.querySelector('.restart-btn');
	restartBtn.style.display = 'block';

	restartBtn.addEventListener('mousedown', function() {
		restartBtn.style.boxShadow = 'none';
	});
	restartBtn.addEventListener('mouseup', function() {
		restartBtn.style.boxShadow = '1px 3px 8px rgba(0, 0, 0, 0.8)';
		setTimeout(function() {
			location.reload();
		}, 800);
	});
};

export const gameOver = function() {
	const warningMessage = document.querySelector('.warning');
	const dyingSound = new Audio('audio/dying.wav');

	let horizonDiffer = hero.leftOrRight - enemyLeft;
	let verticalDiffer = hero.topOrBottom - enemyBottom;
	if (horizonDiffer <= 170 && horizonDiffer >= 0 && (verticalDiffer <= 140 && verticalDiffer >= 0)) {
		clearInterval(timerInterval);
		clearInterval(enemyInterval);
		warningMessage.innerHTML = 'YOU DIE!!!';
		warningMessage.style.display = 'block';
		dyingSound.play();
		showRestartBtn();
	} else if ((horizonDiffer <= 170 && horizonDiffer >= 0) || (verticalDiffer <= 140 && verticalDiffer >= 0)) {
		warningMessage.style.display = 'block';
		setTimeout(function() {
			warningMessage.style.display = 'none';
		}, 800);
	} else if (surviveTimer === 0) {
		clearInterval(enemyInterval);
		warningMessage.innerHTML = 'YOU SURVIVE!!!';
		warningMessage.style.color = 'white';
		warningMessage.style.display = 'block';
		showRestartBtn();
	}
};

window.addEventListener('keydown', function(e) {
	hero.player.style.left = hero.leftOrRight + 'px';
	hero.player.style.bottom = hero.topOrBottom + 'px';
	gameOver();

	if (e.keyCode === 37) {
		hero.moveLeft();
	} else if (e.keyCode === 39) {
		hero.moveRight();
	} else if (e.keyCode === 40) {
		hero.moveTop();
	} else if (e.keyCode === 38) {
		hero.moveBottom();
	}
});
