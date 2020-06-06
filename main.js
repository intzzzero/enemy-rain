window.addEventListener('load', () => {
	console.log('GAME START');
	gameStart();
});

const gameStart = function() {
	const hero = document.querySelector('.hero');
	const enemySpace = document.querySelector('.enemy-space');

	let enemyLeft = 300;
	let enemyBottom = 200;
	const enemyRandomMoving = () => {
		enemyLeft = Math.floor(Math.random() * 700);
		enemyBottom = Math.floor(Math.random() * 500);

		enemySpace.style.left = enemyLeft + 'px';
		enemySpace.style.bottom = enemyBottom + 'px';
	};

	const enemyInterval = setInterval(enemyRandomMoving, 1000);

	let surviveTimer = 60;
	const countDown = () => {
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

	const showRestartBtn = () => {
		const restartBtn = document.querySelector('.restart-btn');
		restartBtn.style.display = 'block';

		restartBtn.addEventListener('mousedown', () => {
			restartBtn.style.boxShadow = 'none';
		});
		restartBtn.addEventListener('mouseup', () => {
			restartBtn.style.boxShadow = '1px 3px 8px rgba(0, 0, 0, 0.8)';
			location.reload();
		});
	};

	const gameOver = () => {
		const warningMessage = document.querySelector('.warning');

		if (
			leftOrRightMoving - enemyLeft <= 170 &&
			leftOrRightMoving - enemyLeft >= 0 &&
			(topOrBottomMoving - enemyBottom <= 140 && topOrBottomMoving - enemyBottom >= 0)
		) {
			clearInterval(timerInterval);
			clearInterval(enemyInterval);
			warningMessage.innerHTML = 'YOU DIE!!!';
			warningMessage.style.display = 'block';
			showRestartBtn();
		} else if (
			(leftOrRightMoving - enemyLeft <= 170 && leftOrRightMoving - enemyLeft >= 0) ||
			(topOrBottomMoving - enemyBottom <= 140 && topOrBottomMoving - enemyBottom >= 0)
		) {
			warningMessage.style.display = 'block';
			setTimeout(() => {
				warningMessage.style.display = 'none';
			}, 1000);
		} else if (surviveTimer === 0) {
			clearInterval(enemyInterval);
			warningMessage.innerHTML = 'YOU SURVIVE!!!';
			warningMessage.style.color = 'white';
			warningMessage.style.display = 'block';
			showRestartBtn();
		}
	};

	let leftOrRightMoving = 400;
	let topOrBottomMoving = 30;
	window.addEventListener('keydown', e => {
		hero.style.left = leftOrRightMoving + 'px';
		hero.style.bottom = topOrBottomMoving + 'px';
		gameOver();

		if (e.keyCode === 37) {
			hero.classList.remove('hero-front');
			hero.classList.remove('hero-right');
			hero.classList.remove('hero-back');
			hero.classList.add('hero-left');
			leftOrRightMoving = leftOrRightMoving > 50 ? leftOrRightMoving - 10 : 50;
		} else if (e.keyCode === 39) {
			hero.classList.remove('hero-left');
			hero.classList.remove('hero-front');
			hero.classList.remove('hero-back');
			hero.classList.add('hero-right');
			leftOrRightMoving = leftOrRightMoving < 730 ? leftOrRightMoving + 10 : 730;
		} else if (e.keyCode === 40) {
			hero.classList.remove('hero-left');
			hero.classList.remove('hero-right');
			hero.classList.remove('hero-back');
			hero.classList.add('hero-front');
			topOrBottomMoving = topOrBottomMoving > 30 ? topOrBottomMoving - 10 : 30;
		} else if (e.keyCode === 38) {
			hero.classList.remove('hero-left');
			hero.classList.remove('hero-right');
			hero.classList.remove('hero-front');
			hero.classList.add('hero-back');
			topOrBottomMoving = topOrBottomMoving < 550 ? topOrBottomMoving + 10 : 550;
		}
	});
};
