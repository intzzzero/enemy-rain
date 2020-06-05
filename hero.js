// class Hero {
// 	constructor(move) {
// 		this._move = move;
// 	}
// }

// Hero.prototype.moveLeft = function() {};
// Hero.prototype.moveRight = function() {};

const hero = document.querySelector('.hero');

let leftOrRightMoving = 400;
let topOrBottomMoving = 0;
window.addEventListener('keydown', e => {
	hero.style.left = leftOrRightMoving + 'px';
	hero.style.bottom = topOrBottomMoving + 'px';
	console.log(e.keyCode);

	if (e.keyCode === 37) {
		hero.classList.remove('hero-front');
		hero.classList.remove('hero-right');
		hero.classList.remove('hero-back');
		hero.classList.add('hero-left');
		leftOrRightMoving = leftOrRightMoving !== 0 ? leftOrRightMoving - 10 : 0;
	} else if (e.keyCode === 39) {
		hero.classList.remove('hero-left');
		hero.classList.remove('hero-front');
		hero.classList.remove('hero-back');
		hero.classList.add('hero-right');
		leftOrRightMoving = leftOrRightMoving < 770 ? leftOrRightMoving + 10 : 770;
	} else if (e.keyCode === 40) {
		hero.classList.remove('hero-left');
		hero.classList.remove('hero-right');
		hero.classList.remove('hero-back');
		hero.classList.add('hero-front');
		topOrBottomMoving = topOrBottomMoving > 7 ? topOrBottomMoving - 10 : 0;
	} else if (e.keyCode === 38) {
		hero.classList.remove('hero-left');
		hero.classList.remove('hero-right');
		hero.classList.remove('hero-front');
		hero.classList.add('hero-back');
		topOrBottomMoving = topOrBottomMoving < 550 ? topOrBottomMoving + 10 : 550;
	}
});
