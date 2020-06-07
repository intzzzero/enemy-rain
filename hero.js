class Hero {
	constructor(player) {
		this._player = player;
		this.leftOrRight = 400;
		this.topOrBottom = 30;
	}
	get player() {
		return this._player;
	}
}
Hero.prototype.moveLeft = function() {
	this.player.classList.remove('hero-front');
	this.player.classList.remove('hero-right');
	this.player.classList.remove('hero-back');
	this.player.classList.add('hero-left');
	return (this.leftOrRight = this.leftOrRight > 50 ? this.leftOrRight - 10 : 50);
};
Hero.prototype.moveRignt = function() {
	this.player.classList.remove('hero-front');
	this.player.classList.remove('hero-left');
	this.player.classList.remove('hero-back');
	this.player.classList.add('hero-right');
	return (this.leftOrRight = this.leftOrRight < 730 ? this.leftOrRight + 10 : 730);
};
Hero.prototype.moveTop = function() {
	this.player.classList.remove('hero-left');
	this.player.classList.remove('hero-right');
	this.player.classList.remove('hero-back');
	this.player.classList.add('hero-front');
	return (this.topOrBottom = this.topOrBottom > 30 ? this.topOrBottom - 10 : 30);
};
Hero.prototype.moveBottom = function() {
	this.player.classList.remove('hero-left');
	this.player.classList.remove('hero-right');
	this.player.classList.remove('hero-front');
	this.player.classList.add('hero-back');
	return (this.topOrBottom = this.topOrBottom < 550 ? this.topOrBottom + 10 : 550);
};

export const hero = new Hero(document.querySelector('.hero'));
