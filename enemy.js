class Enemy {
	constructor(ghost) {
		this._ghost = ghost;
		this.enemyLeft = 300;
		this.enemyBottom = 200;
	}
	get ghost() {
		return this._ghost;
	}
}

Enemy.prototype.randomMoving = function() {
	this.enemyLeft = Math.floor(Math.random() * 700);
	this.enemyBottom = Math.floor(Math.random() * 500);
};

export const enemy = new Enemy(document.querySelector('.enemy-space'));
