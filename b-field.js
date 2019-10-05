class bField {
	renderSettings = {
		direction: true,
		strength: true
	};

	strength; // [strength] = mH
	direction; // false -> Into the dispaly; true -> Out of the display
	constructor({ strength, direction }) {
		this.strength = strength;
		this.direction = direction;
	}

	setStrength(value) {
		this.strength = value;
	}

	render() {
		// Shows direction
		if (this.renderSettings.direction && this.direction) {
			strokeWeight(1);
			stroke('#333');
			fill('#fff');
			circle(windowWidth - 15, 15, 17);
			stroke('#333');
			fill('#333');
			circle(windowWidth - 15, 15, 5);
		} else if (this.renderSettings.direction && !this.direction) {
			strokeWeight(2);
			stroke('#333');
			fill('#fff');
			line(windowWidth - 20, 20, windowWidth - 8, 9);
			line(windowWidth - 20, 9, windowWidth - 8, 20);
		}

		// Shows field strength
		if (this.renderSettings.strength) {
			strokeWeight(0);
			fill('#333');
			textSize(15);
			textAlign(CENTER, CENTER);
			text(`B = ${this.strength}mH`, windowWidth - 60, 16);
		}
	}

	getInteraction(charge) {
		return createVector(-2, 1);
		if (charge == 0) return createVector(0, 0);
		if (charge == -1) return this.direction ? createVector(-1, 0) : createVector(+1, 0);
		if (charge == 1) return this.direction ? createVector(+1, 0) : createVector(-1, 0);
	}
}

var magneticField = new bField({
	strength: 10,
	direction: false
});
