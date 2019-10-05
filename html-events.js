const settingsPanel = document.getElementById('settings-panel');
const toggleSettings = () => {
	settingsPanel.classList.toggle('open');
};

// Fire Particle
const fireButton = document.getElementById('fireButton');
const fireSound = new Audio('src/fire.mp3');
fireButton.addEventListener('click', () => {
	fireSound.play();
	activeParticles.push(
		new Kaon({
			direction: createVector(0, -1),
			velocity: 10,
			position: createVector(Math.random() * windowWidth, windowHeight),
			charge: -1
		})
	);
});

// Change settings of magnetic field
const changeBFieldStrength = () => {
	magneticField.setStrength(document.getElementById('checkbox-b-field-strength').value);
};

// Change render Settings
const toggleRenderSettings = (object, property) => {
	object.renderSettings[property] = !object.renderSettings[property];
};
