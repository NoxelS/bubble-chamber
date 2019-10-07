class Electron extends Particle {
	color = '#4924ff';
	decayChance = 0.001;
	stable = true;
	constructor(velocity, position, charge) {
		super(velocity, position, charge);
		this.name = 'e';
	}
}
