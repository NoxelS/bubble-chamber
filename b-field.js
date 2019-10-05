class bField {
	renderSettings = {
		direction: true,
		strength: true
	};

	strength;
	direction; // false -> Into the dispaly; true -> Out of the display
	constructor(initial_strength, initial_direction) {
		this.strength = initial_strength;
		this.direction = initial_direction;
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
}

var magneticField = new bField(10, false);
