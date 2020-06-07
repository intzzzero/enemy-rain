const enemySpace = document.querySelector('.enemy-space');

export let enemyLeft = 300;
export let enemyBottom = 200;
const enemyRandomMoving = () => {
	enemyLeft = Math.floor(Math.random() * 700);
	enemyBottom = Math.floor(Math.random() * 500);

	enemySpace.style.left = enemyLeft + 'px';
	enemySpace.style.bottom = enemyBottom + 'px';
};

export const enemyInterval = setInterval(enemyRandomMoving, 1000);
