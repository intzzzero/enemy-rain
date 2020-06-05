window.addEventListener('load', () => {
	console.log('game start');
});

const hero = document.querySelector('.hero');
const enemySpace = document.querySelector('.enemy-space');

let leftOrRightMoving = 400;
let topOrBottomMoving = 30;
window.addEventListener('keydown', e => {
	hero.style.left = leftOrRightMoving + 'px';
	hero.style.bottom = topOrBottomMoving + 'px';
	gameOver(enemyInterval);

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

let enemyLeft = 300;
let enemyBottom = 200;
const enemyRandomMoving = () => {
	enemyLeft = Math.floor(Math.random() * 700);
	enemyBottom = Math.floor(Math.random() * 500);

	enemySpace.style.left = enemyLeft + 'px';
	enemySpace.style.bottom = enemyBottom + 'px';
};

const enemyInterval = setInterval(enemyRandomMoving, 1000);

const gameOver = enemyInterval => {
	const warningMessage = document.querySelector('.warning');

	if (
		leftOrRightMoving - enemyLeft <= 170 &&
		leftOrRightMoving - enemyLeft >= 0 &&
		(topOrBottomMoving - enemyBottom <= 140 && topOrBottomMoving - enemyBottom >= 0)
	) {
		clearInterval(enemyInterval);
		warningMessage.innerHTML = 'YOU DIE!!!';
		warningMessage.style.display = 'block';
	} else if (
		(leftOrRightMoving - enemyLeft <= 170 && leftOrRightMoving - enemyLeft >= 0) ||
		(topOrBottomMoving - enemyBottom <= 140 && topOrBottomMoving - enemyBottom >= 0)
	) {
		warningMessage.style.display = 'block';
		setTimeout(() => {
			warningMessage.style.display = 'none';
		}, 800);
	}
};
