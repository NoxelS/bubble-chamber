var activeParticles = [];
var showColors = false;
var showNeutralTraces = false;
var showNames = false;
class Particle {
	velocity;
	position;
	lorenzForce;
	charge;
	tracePoints = [];
	color = '#333';
	decayChance;
	stable = false;
	decayed = false;

	constructor(velocity, position, charge) {
		this.velocity = velocity;
		this.position = position;
		this.charge = charge;
		this.lorenzForce = magneticField.getInteraction(this.charge);
		this.tracePoints.push(this.position.copy());
	}

	update() {
		if (this.position.y > -10 && !this.decayed) {
			this.position.add(this.velocity);
			this.position.add(this.lorenzForce.mult(1.01));
			this.tracePoints.push(this.position.copy());
			if (!this.stable) {
				if (Math.random() < this.decayChance) {
					this.decay();
					this.decayed = true;
				}
			}
		}
	}

	drawParticle() {
		stroke(showColors ? this.color : '#333');
		fill(showColors ? this.color : '#333');
		strokeWeight(1);
		circle(this.position.x, this.position.y, 0.5);
	}

	drawTrace() {
		if (this.charge !== 0) {
			for (let i = 0; i < this.tracePoints.length - 1; i++) {
				const point = this.tracePoints[i];
				const point2 = this.tracePoints[i + 1];
				stroke(showColors ? this.color : '#333');
				strokeWeight(1);
				fill(showColors ? this.color : '#333');
				line(point.x, point.y, point2.x, point2.y);
			}
		} else {
			if (showNeutralTraces) {
				for (let i = 0; i < this.tracePoints.length; i++) {
					const point = this.tracePoints[i];
					stroke(showColors ? this.color : '#333');
					strokeWeight(1);
					fill(showColors ? this.color : '#333');
					circle(point.x, point.y, 1);
				}
			}
		}
	}

	drawName() {
		strokeWeight(0);
		fill(showColors ? this.color : '#333');
		textSize(16);

		let offset = this.charge < 0 ? -20 : 20;
		text(this.name, this.tracePoints[0].x + offset, this.tracePoints[0].y - 15);
		text(
			`${this.charge === 0 ? '0' : this.charge === 1 ? '+' : '-'}`,
			this.tracePoints[0].x + offset + 5,
			this.tracePoints[0].y - 25
		);
	}

	render() {
		this.update();
		if (this.charge != 0 || this.showNeutralTraces) this.drawParticle();
		this.drawTrace();
		if (showNames) this.drawName();
	}

	momentumConservation = {
		testMomentum: (initial, afterArray) => {
			let testVector = createVector(0, 0);
			afterArray.forEach(vector => {
				testVector.add(vector);
			});
			console.log(initial.copy().sub(testVector.copy()));
		},
		generateVectors: initial => {
			let vectors = [];
			vectors.push(
				createVector(
					random(-initial.copy().x, initial.copy().x),
					random(-initial.copy().y, initial.copy().y)
				)
			);
			vectors.push(initial.copy().sub(vectors[0]));

			this.momentumConservation.testMomentum(initialVector, vectors);
		}
	};
}
