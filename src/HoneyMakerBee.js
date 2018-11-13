var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10,
	this.job = 'make honey',
	// this.color is inhereted from Bee
	//food property is inhereted from Grub
	this.honeyPot = 0

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot++
}

HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot--
}

