class Kaon {
	directionVector; // Vector
	velocity; // Vector
	position; // Vector
	charge; // Int [-1, 0, 1]
	tracePoints = [];
	lorenzForce;
	constructor(options) {
		this.direction = options['direction'];
		this.velocity = options['velocity'];
		this.position = options['position'];
		this.charge = options['charge'];

		this.lorenzForce = magneticField.getInteraction(this.charge);
	}

	decay() {
		let r = Math.random();
		console.log(r);

		if (this.charge !== 0) {
			if (r < 0.64) {
				console.log('Muon neutrino decay');
			} else if (r < 0.85) {
				console.log('pion pion0 decay');
			} else if (r < 0.9) {
				console.log('pion0 positron neutrino decay');
			} else if (r < 0.95) {
				console.log('pion-pair and pion decay');
			}
		} else {
			console.log('Kaon pion pair');
		}
	}

	update() {
		if (this.position.y > -10) {
			this.position.add(this.direction.copy().mult(this.velocity));
			this.tracePoints.push(this.position.copy());
		} else {
			//TODO Delete Particle, only save trace
		}
	}

	render() {
		this.update();

		stroke('#333');
		strokeWeight(1);
		fill('#fff');
		circle(this.position.x, this.position.y, 10);

		for (let i = 0; i < this.tracePoints.length - 1; i++) {
			const point = this.tracePoints[i];
			const point2 = this.tracePoints[i + 1];
			stroke('#333');
			strokeWeight(1);
			fill('#fff');
			line(point.x, point.y, point2.x, point2.y);
		}
	}
}
