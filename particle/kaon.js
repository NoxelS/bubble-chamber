class Kaon extends Particle {
	color = '#204BF5';
	decayChance = 0.007;
	constructor(velocity, position, charge) {
		super(velocity, position, charge);
		this.name = 'K';
	}

	decay() {
		let r = Math.random();
		let initialVector = this.velocity.copy();
		let vectors = [];
		vectors.push(createVector(random(this.velocity.copy().x), random(this.velocity.copy().y)));
		vectors.push(initialVector.copy().sub(vectors[0]));

		if (r < 0.64) {
			activeParticles.push(new Muon(vectors[0].copy(), this.position.copy(), -1));
			activeParticles.push(new Neutrino(vectors[1].copy(), this.position.copy(), 0));
		} else if (r < 0.85) {
			activeParticles.push(new Pion(vectors[0].copy(), this.position.copy(), -1));
			activeParticles.push(new Pion(vectors[1].copy(), this.position.copy(), 0));
		} else if (r < 0.9) {
			// TODO Make 3 vectors
			activeParticles.push(new Pion(vectors[0].copy(), this.position.copy(), 0));
			activeParticles.push(new Neutrino(vectors[1].copy(), this.position.copy(), 0));
			activeParticles.push(new Electron(vectors[1].copy(), this.position.copy(), -1));
		} else if (r < 0.95) {
			activeParticles.push(new Pion(vectors[0].copy(), this.position.copy(), -1));
			activeParticles.push(new Pion(vectors[1].copy(), this.position.copy(), 1));
			activeParticles.push(new Pion(vectors[0].copy(), this.position.copy(), -1));
		}
	}

	drawName() {
		strokeWeight(0);
		fill(showColors ? this.color : '#333');
		text(this.name, this.tracePoints[0].x + 15, this.tracePoints[0].y - 15);
		text(
			`${this.charge === 0 ? '0' : this.charge === 1 ? '+' : '-'}`,
			this.tracePoints[0].x + 20,
			this.tracePoints[0].y - 25
		);
	}
}
