class Hero {
	constructor(character) {
		this._character = character;
	}
}

Hero.prototype.moveLeft = function() {
	this._character;
};
Hero.prototype.moveRignt = function() {};
Hero.prototype.moveTop = function() {};
Hero.prototype.moveBottom = function() {};

const hero = new Hero(document.querySelector('.hero'));
