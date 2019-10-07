class Proton extends Particle {
	stable = true;
	name = 'P';
	color = '#E32117';
	constructor(velocity, position, charge) {
		if (charge == 0) throw new Error("Proton charge can't be zero");
		super(velocity, position, charge);
	}

	drawTrace() {
		for (let i = 0; i < this.tracePoints.length - 1; i++) {
			const point = this.tracePoints[i];
			const point2 = this.tracePoints[i + 1];
			stroke(showColors ? this.color : '#333');
			strokeWeight(2);
			fill(showColors ? this.color : '#333');
			line(point.x, point.y, point2.x, point2.y);
		}
	}
}
