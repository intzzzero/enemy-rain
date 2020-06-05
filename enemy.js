// class Enemy {

// }
const enemy = document.querySelector('.enemy');

const enemyRandomMoving = () => {
	const randomLeft = Math.floor(Math.random() * 700);
	const randomBottom = Math.floor(Math.random() * 500);

	enemy.style.left = randomLeft + 'px';
	enemy.style.bottom = randomBottom + 'px';
};

setInterval(enemyRandomMoving, 1000);
