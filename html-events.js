const settingsPanel = document.getElementById('settings-panel');
const toggleSettings = () => {
	settingsPanel.classList.toggle('open');
};

// Fire Particle
const fireButton = document.getElementById('fireButton');
const fireSound = new Audio('src/fire.mp3');
fireButton.addEventListener('click', () => {
	//fireSound.play();
	// Delete existing particles
	activeParticles = [];

	// Generate particles
	for (let i = 0; i < 7; i++) {
		activeParticles.push(
			new Kaon(
				createVector(Math.random(), -10 - Math.random() * 10),
				createVector(Math.random() * windowWidth, windowHeight),
				[-1, 1, 1][Math.round(random(2))]
			)
		);
	}
});

const magneticFieldDirectionButton = document.getElementById('magneticFieldDirection');
magneticFieldDirectionButton.addEventListener('click', () => {
	magneticField.direction = !magneticField.direction;
	magneticFieldDirectionButton.innerHTML = magneticField.direction ? 'Out' : 'In';
});

// Change settings of magnetic field
const changeBFieldStrength = () => {
	magneticField.setStrength(document.getElementById('checkbox-b-field-strength').value);
};

// Change render Settings
const toggleRenderSettings = (object, property) => {
	object.renderSettings[property] = !object.renderSettings[property];
};

const toggleParticleSettings = property => {
	if (property == 'traces') showNeutralTraces = !showNeutralTraces;
	if (property == 'colors') showColors = !showColors;
	if (property == 'names') showNames = !showNames;
};
