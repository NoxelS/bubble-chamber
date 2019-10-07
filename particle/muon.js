class Muon extends Particle {
	color = '#69ff12';
	decayChance = 0.001;
	stable = this.charge == 0;
	constructor(velocity, position, charge) {
		super(velocity, position, charge);
		this.name = 'μ';
	}

	decay() {
		// TODO: Drei vektoren
		activeParticles.push(
			new Electron(createVector(-5, -10), this.position.copy(), this.charge)
		);
		activeParticles.push(new Neutrino(createVector(5, -10), this.position.copy(), 0));
		activeParticles.push(new Neutrino(createVector(5, -10), this.position.copy(), 0));
		this.decayed = true;
	}
}
