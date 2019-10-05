function draw() {
	clear();
	background('#fff');

	// Render bField
	magneticField.render();
	activeParticles.forEach(particle => {
		if (typeof particle.render == 'function') {
			particle.render();
		}
	});
}
