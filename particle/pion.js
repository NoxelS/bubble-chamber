class Pion extends Particle {
	color = '#e371ff';
	decayChance = 0.005;
	constructor(velocity, position, charge) {
		super(velocity, position, charge);
		this.name = 'π';
	}

	decay() {
		if (this.charge != 0) {
			let initialVector = this.velocity.copy();
			let vectors = [];
			vectors.push(
				createVector(random(this.velocity.copy().x), random(this.velocity.copy().y))
			);
			vectors.push(initialVector.copy().sub(vectors[0]));

			activeParticles.push(new Muon(vectors[0].copy(), this.position.copy(), this.charge));
			activeParticles.push(
				new Neutrino(vectors[1].copy(), this.position.copy(), this.charge != 1)
			);
		} else {
			let r = Math.random();
			if (r < 0.98823) {
				console.log('Two photons');
			} else {
				console.log('Photon electron-pair');
			}
		}
	}
}
