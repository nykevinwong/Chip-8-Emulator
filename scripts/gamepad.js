// Support gamepads in WebKit.
var GamePad = function(callback) {
	if (typeof callback != "function") {
		throw Error("Callback must implement [[call]].");
	}
	this.callback = callback;
	this.running = false;
};

GamePad.prototype.start = function() {
	if ( ! navigator.webkitGetGamepads) {
		return;
	}
    this.running = true;
    this.tick();
};

GamePad.prototype.stop = function() {
    this.running = false;
};

GamePad.prototype.tick = function() {
    if ( ! this.running) {
    	return;
    }
	this.callback(navigator.webkitGetGamepads());
    webkitRequestAnimationFrame(this.tick.bind(this));
	
};