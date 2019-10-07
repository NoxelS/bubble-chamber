class Neutrino extends Particle {
	color = '#ff824d';
	stable = true;
	constructor(velocity, position, antiMatter) {
		super(velocity, position, 0);
		this.name = 'ν';
		this.antiMatter = antiMatter;
	}

	drawName() {
		strokeWeight(0);
		fill(showColors ? this.color : '#333');

		let offset = this.charge < 0 ? -20 : 20;
		textSize(16);
		text(this.name, this.tracePoints[0].x + offset, this.tracePoints[0].y - 15);
		textSize(10);
		text('μ', this.tracePoints[0].x + offset + 5, this.tracePoints[0].y + -10);
		if (this.antiMatter) {
			text('_', this.tracePoints[0].x + offset, this.tracePoints[0].y + -25);
		}
	}
}
